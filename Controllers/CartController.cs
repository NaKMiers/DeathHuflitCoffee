using DeathWishCoffee.Models.Main;
using DeathWishCoffee.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace DeathWishCoffee.Controllers
{
    public class CartController : Controller
    {
        private readonly DeathWishCoffeeDbContext _deathWishCoffeeDbContext;
        private readonly IHttpContextAccessor _httpContext;

        // constructor
        public CartController(DeathWishCoffeeDbContext deathWishCoffeeDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _deathWishCoffeeDbContext = deathWishCoffeeDbContext;
            _httpContext = httpContextAccessor;
        }

        public void SetUpUserDataForAllPage(User user)
        {
            _httpContext.HttpContext.Session.SetString("Id", user.Id.ToString());
            _httpContext.HttpContext.Session.SetString("Username", user.Username);
            _httpContext.HttpContext.Session.SetString("Avatar", user.Avatar);
        }

        public void SetUpCartDataForAllPage(List<CartItem> cart)
        {
            string myCartCovertedToJson = JsonConvert.SerializeObject(cart);
            _httpContext.HttpContext.Session.SetString("Cart", myCartCovertedToJson);
        }

        public void GetRecommendProducts()
        {
            var recommendProducts = _deathWishCoffeeDbContext.Products
                                    .Include(p => p.Images)
                                    .Include(p => p.Sizes)
                                    .Include(p => p.InsideTypes)
                                    .Take(2)
                                    .ToList();

            string rcmPrsJson = JsonConvert.SerializeObject(recommendProducts);
            _httpContext.HttpContext.Session.SetString("recommendProducts", rcmPrsJson);
        }

        // [/admin/cart/{userId}]
        [HttpGet]
        public IActionResult MyCart(Guid userId)
        {
            // Console.WriteLine("MyCart");

            // get user from database
            var user = _deathWishCoffeeDbContext.Users
                    .Include(u => u.CartItems)
                    .FirstOrDefault(u => u.Id == userId);

            // if user do NOT EXIST => Bad Request
            if (user == null)
                return BadRequest("User ID does not exist");

            var myCart = user.CartItems.ToList();
            ViewBag.UserId = userId;

            // string myCartCovertedToJson = JsonConvert.SerializeObject(myCart);
            // _httpContext.HttpContext.Session.SetString("Cart", myCartCovertedToJson);

            return View("~/Views/Admin/MyCart.cshtml", myCart);
        }

        // [/cart/add/{userId}]
        [HttpGet]
        public IActionResult AddToCart(Guid userId)
        {
            // get All Products from DB to select
            var allProducts = _deathWishCoffeeDbContext.Products
                        .Include(p => p.Sizes)
                        .Include(p => p.InsideTypes)
                        .Include(p => p.Images)
                        .ToList();
            var cart = _deathWishCoffeeDbContext.Users
                        .Include(u => u.CartItems)
                        .FirstOrDefault(u => u.Id == userId);

            ViewBag.Products = allProducts;
            ViewBag.UserId = userId;
            ViewBag.Cart = cart;

            // return RedirectToAction("Index", "Home");
            return View("~/Views/Admin/AddToCart.cshtml");
        }
        [HttpPost]
        public IActionResult AddToCart(AddToCartRequest form, Guid userId, Guid productId)
        {
            // Console.WriteLine("AddToCart");

            if (userId == null || userId == Guid.Empty)
            {
                return RedirectToAction("Index", "Account");
            }

            // get product to add from database by productId
            var productToAdd = _deathWishCoffeeDbContext.Products.Find(productId);
            var user = _deathWishCoffeeDbContext.Users
                    .Include(u => u.CartItems)
                    .FirstOrDefault(u => u.Id == userId);

            // if productToAdd does NOT EXISTS => BadRequest
            if (productToAdd == null)
                return BadRequest("Invalid Product");

            // if user does NOT EXISTS => BadRequest
            if (user == null)
                return BadRequest("User does not exist");

            // invalid quantity
            if (form.Quantity <= 0)
                return BadRequest("Invalid Quantity");

            // if cartItem is ALREADY EXISTS in cart
            var existingCartItem = user.CartItems.FirstOrDefault(ci => ci.ProductId == productId);

            if (existingCartItem != null && form.Size == existingCartItem.Size)
            {
                // not enough product
                if (existingCartItem.Quantity + form.Quantity > productToAdd.Remain)
                    return RedirectToAction("Index", "Home");
                // return RedirectToAction("AddToCart", "Cart");
                // return BadRequest("Not enough product to sold");

                existingCartItem.Quantity += form.Quantity;
                _deathWishCoffeeDbContext.SaveChanges();
            }
            else
            {
                if (productToAdd.Remain > 0 && form.Quantity <= productToAdd.Remain)
                {

                    // create new CartItem
                    double price = double.Parse(form.Size.Split('-')[1].Trim());
                    var newCartItem = new CartItem
                    {
                        Id = Guid.NewGuid(),
                        UserId = userId,
                        ProductId = productId,
                        Quantity = form.Quantity,
                        Size = form.Size,
                        Price = price,
                        InsideType = form.InsideType,
                        CreatedAt = DateTime.Now,
                        Product = productToAdd,
                    };

                    _deathWishCoffeeDbContext.CartItems.Add(newCartItem);
                    _deathWishCoffeeDbContext.SaveChanges();
                }
            }

            user = _deathWishCoffeeDbContext.Users
                        .Include(u => u.CartItems)
                        .ThenInclude(cartItem => cartItem.Product)
                        .ThenInclude(product => product.Images)
                        .FirstOrDefault(u => u.Id == userId);

            // set CART data for all pages again
            SetUpCartDataForAllPage(user.CartItems.ToList());

            // return bad request if user does NOT EXISTS
            if (user == null)
                return BadRequest("Invalid username or password.");

            string referrer = HttpContext.Request.Headers["Referer"].ToString();
            return Redirect(referrer);
        }

        // [/cart/delete/{cartItemId}]
        [HttpGet]
        public IActionResult DeleteCartItem(Guid cartItemId)
        {
            // Console.WriteLine("DeleteCartItem");

            // get cartItem to delete from database
            var cartItemToDelete = _deathWishCoffeeDbContext.CartItems.FirstOrDefault(c => c.Id == cartItemId);

            // if cartItem doen NOT EXISTS => BadRequest
            if (cartItemToDelete == null)
                return BadRequest("Cart item does not exists");

            // delete cart item
            _deathWishCoffeeDbContext.CartItems.Remove(cartItemToDelete);
            _deathWishCoffeeDbContext.SaveChanges();

            // get user to set cart again
            var userId = _httpContext.HttpContext.Session.GetString("Id");
            var user = _deathWishCoffeeDbContext.Users
                        .Include(u => u.CartItems)
                        .ThenInclude(cartItem => cartItem.Product)
                        .ThenInclude(product => product.Images)
                        .FirstOrDefault(u => u.Id.ToString() == userId);

            // set CART data for all pages again
            SetUpCartDataForAllPage(user.CartItems.ToList());

            string referrer = HttpContext.Request.Headers["Referer"].ToString();
            return Redirect(referrer);
        }

        // [/cart/increase/{cartItemId}]
        [HttpPost]
        public IActionResult IncreaseCartItemQuantity(Guid cartItemId)
        {
            // Console.WriteLine("IncreaseCartItemQuantity");

            // get cartItem from database
            var cartItem = _deathWishCoffeeDbContext.CartItems
                        .Include(ci => ci.Product)
                        .FirstOrDefault(ci => ci.Id == cartItemId);

            // if cart item does NOT EXISTS => BadRequest
            if (cartItem == null)
                return BadRequest("Invalid cart item");

            // not enough product
            if (cartItem.Quantity + 1 > cartItem.Product.Remain)
                return Json(new { newQuantity = cartItem.Quantity });


            cartItem.Quantity += 1;
            _deathWishCoffeeDbContext.SaveChanges();

            // set cart again
            string userId = _httpContext.HttpContext.Session.GetString("Id");

            // user id does NOT EXISTS
            if (string.IsNullOrEmpty(userId))
                return BadRequest("User ID is does not exists");

            var user = _deathWishCoffeeDbContext.Users
                        .Include(u => u.CartItems)
                        .ThenInclude(cartItem => cartItem.Product)
                        .ThenInclude(product => product.Images)
                        .FirstOrDefault(u => u.Id.ToString() == userId);

            if (user == null)
                return BadRequest("User is does not exists");

            // set CART data for all pages again
            SetUpCartDataForAllPage(user.CartItems.ToList());

            // return bad request if user does NOT EXISTS
            if (user == null)
                return BadRequest("Invalid username or password");

            return Json(new { newQuantity = cartItem.Quantity });
        }

        // [/cart/decrease/{cartItemId}]
        [HttpPost]
        public IActionResult DecreaseCartItemQuantity(Guid cartItemId)
        {
            // Console.WriteLine("DecreaseCartItemQuantity");

            // get cartItem from database
            var cartItem = _deathWishCoffeeDbContext.CartItems
                        .Include(ci => ci.Product)
                        .FirstOrDefault(ci => ci.Id == cartItemId);

            // if cart item does NOT EXISTS => BadRequest
            if (cartItem == null)
                return BadRequest("Invalid cart item");

            // not enough product
            if (cartItem.Quantity - 1 <= 0)
                return Json(new { newQuantity = cartItem.Quantity });

            cartItem.Quantity -= 1;
            _deathWishCoffeeDbContext.SaveChanges();

            // set cart again
            string userId = _httpContext.HttpContext.Session.GetString("Id");

            // user id does NOT EXISTS
            if (string.IsNullOrEmpty(userId))
                return BadRequest("User ID is does not exists");

            var user = _deathWishCoffeeDbContext.Users
                        .Include(u => u.CartItems)
                        .ThenInclude(cartItem => cartItem.Product)
                        .ThenInclude(product => product.Images)
                        .FirstOrDefault(u => u.Id.ToString() == userId);

            if (user == null)
                return BadRequest("User is does not exists");

            // set CART data for all pages again
            SetUpCartDataForAllPage(user.CartItems.ToList());

            // return bad request if user does NOT EXISTS
            if (user == null)
                return BadRequest("Invalid username or password");

            return Json(new { newQuantity = cartItem.Quantity });
        }

        // ERRORS
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}