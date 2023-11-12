using DeathWishCoffee.Models.CompositeModels;
using DeathWishCoffee.Models.Main;
using DeathWishCoffee.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace DeathWishCoffee.Controllers
{
    public class CheckoutController : Controller
    {

        private readonly DeathWishCoffeeDbContext _deathWishCoffeeDbContext;
        private readonly IHttpContextAccessor _httpContext;

        // constructor
        public CheckoutController(DeathWishCoffeeDbContext deathWishCoffeeDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _deathWishCoffeeDbContext = deathWishCoffeeDbContext;
            _httpContext = httpContextAccessor;
        }

        public void SetUpCartDataForAllPage(List<CartItem> cart)
        {
            string myCartCovertedToJson = JsonConvert.SerializeObject(cart);
            _httpContext.HttpContext.Session.SetString("Cart", myCartCovertedToJson);
        }

        // [/checkouts/{userId}]
        [HttpGet]
        public IActionResult Index(Guid userId)
        {
            Console.WriteLine("Checkout");

            // get user from database
            var user = _deathWishCoffeeDbContext.Users
                        .Include(u => u.CartItems)
                        .ThenInclude(cartItem => cartItem.Product)
                        .ThenInclude(product => product.Images)
                        .FirstOrDefault(u => u.Id == userId);

            // if user do NOT EXIST => Bad Request
            if (user == null)
                return BadRequest("User ID does not exist");

            var myCart = user.CartItems;
            ViewBag.UserId = userId;

            var order_listCartItem = new Order_ListCartItem
            {
                OrderRequest = new AddNewOrderRequest(),
                CartItems = myCart.ToList(),
            };

            return View(order_listCartItem);
        }

        [HttpPost]
        public IActionResult Index(AddNewOrderRequest form, Guid userId)
        {
            Console.WriteLine("NewOrder");

            Guid orderId = Guid.NewGuid();

            // Console.WriteLine("---------------------------------");
            // Console.WriteLine(form.Email);
            if (string.IsNullOrEmpty(form.Email))
                form.Email = "";
            // Console.WriteLine(form.Country);
            if (string.IsNullOrEmpty(form.Country))
                form.Country = "";
            // Console.WriteLine(form.Firstname);
            if (string.IsNullOrEmpty(form.Firstname))
                form.Firstname = "";
            // Console.WriteLine(form.Lastname);
            if (string.IsNullOrEmpty(form.Lastname))
                form.Lastname = "";
            // Console.WriteLine(form.Company);
            if (string.IsNullOrEmpty(form.Company))
                form.Company = "";
            // Console.WriteLine(form.Address);
            if (string.IsNullOrEmpty(form.Address))
                form.Address = "";
            // Console.WriteLine(form.Apartment);
            if (string.IsNullOrEmpty(form.Apartment))
                form.Apartment = "";
            // Console.WriteLine(form.City);
            if (string.IsNullOrEmpty(form.City))
                form.City = "";
            // Console.WriteLine(form.PostalCode);
            if (string.IsNullOrEmpty(form.PostalCode))
                form.PostalCode = "";
            // Console.WriteLine(form.Phone);
            if (string.IsNullOrEmpty(form.Phone))
                form.Phone = "";
            // Console.WriteLine(form.TotalAmount);

            // if (form.CartIds != null && form.CartIds.Count > 0)
            // {
            //     foreach (var id in form.CartIds)
            //     {
            //          Console.WriteLine("id: " + id);
            //     }
            // }

            var cartItems = _deathWishCoffeeDbContext.CartItems
                            .Where(cartItem => form.CartIds.Contains(cartItem.Id))
                            .Include(cartItem => cartItem.Product)
                            .ToList();

            // Console.WriteLine("CartItems Product");
            if (cartItems != null && cartItems.Count > 0)
            {
                var orderDetails = cartItems.Select(cartItem => new OrderDetail
                {
                    Id = Guid.NewGuid(),
                    OrderId = orderId,
                    Quantity = cartItem.Quantity,
                    Size = cartItem.Size,
                    Price = cartItem.Price,
                    InsideType = cartItem.InsideType,
                    Product = cartItem.Product,
                    CreatedAt = DateTime.Now,
                    LastModifiedAt = DateTime.Now
                });

                _deathWishCoffeeDbContext.OrderDetails.AddRange(orderDetails);
            }

            // Console.WriteLine("---------------------------------");

            // create NEW ORDER
            var newOrder = new Order
            {
                Id = orderId,
                UserId = userId,
                TotalAmount = form.TotalAmount,
                Status = "Active",
                Email = form.Email.Trim(),
                Country = form.Country.Trim(),
                Firstname = form.Firstname.Trim(),
                Lastname = form.Lastname.Trim(),
                Company = form.Company.Trim(),
                Address = form.Address.Trim(),
                Apartment = form.Apartment.Trim(),
                City = form.City.Trim(),
                PostalCode = form.PostalCode.Trim(),
                Phone = form.Phone.Trim(),
                CreatedAt = DateTime.Now,
                LastModifiedAt = DateTime.Now
            };

            // add new order to database
            _deathWishCoffeeDbContext.Orders.Add(newOrder);

            // remove cartItem after make order
            _deathWishCoffeeDbContext.CartItems.RemoveRange(cartItems);

            // save change to database
            _deathWishCoffeeDbContext.SaveChanges();

            var user = _deathWishCoffeeDbContext.Users
                        .Include(u => u.CartItems)
                        .ThenInclude(cartItem => cartItem.Product)
                        .ThenInclude(product => product.Images)
                        .FirstOrDefault(u => u.Id == userId);

            // set CART data to session
            SetUpCartDataForAllPage(user.CartItems.ToList());

            return RedirectToAction("Index", "Home");
        }

        // ERRORS
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}