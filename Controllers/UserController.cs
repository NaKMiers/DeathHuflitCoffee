using DeathWishCoffee.Models.Main;
using DeathWishCoffee.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace DeathWishCoffee.Controllers
{
    public class UserController : Controller
    {
        private readonly DeathWishCoffeeDbContext _deathWishCoffeeDbContext;
        private readonly IHttpContextAccessor _httpContext;

        // constructor
        public UserController(DeathWishCoffeeDbContext deathWishCoffeeDbContext, IHttpContextAccessor httpContextAccessor)
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

        // [/user/order-history]
        public IActionResult OrderHistory()
        {
            string userId = _httpContext.HttpContext.Session.GetString("Id");
            if (string.IsNullOrEmpty(userId))
                return RedirectToAction("Index", "Account");

            string pageQuery = _httpContext.HttpContext.Request.Query["page"];
            int page = 1;
            int pageSize = 8;
            if (!string.IsNullOrEmpty(pageQuery))
            {
                int pageNumber = int.Parse(pageQuery);
                if (pageNumber <= 0)
                    return RedirectToAction("PageNotFound", "Home");
                else
                    page = pageNumber;
            }
            int skip = (page - 1) * pageSize; // Số sản phẩm để bỏ qua

            var orders = _deathWishCoffeeDbContext.Orders
                        .Where(o => o.UserId.ToString() == userId)
                        .Include(o => o.OrderDetails)
                        .ThenInclude(oD => oD.Product)
                        .ThenInclude(p => p.Images)
                        .OrderByDescending(o => o.CreatedAt)
                        .Skip(skip)
                        .Take(pageSize)
                        .ToList();


            return View(orders);
        }

        // [/admin/users]
        [HttpGet]
        public IActionResult Index()
        {
            // --Authentication
            string curUserId = _httpContext.HttpContext.Session.GetString("Id");
            if (string.IsNullOrEmpty(curUserId))
                return RedirectToAction("Index", "Home");

            var curUser = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id.ToString() == curUserId);
            if (curUser == null)
                return BadRequest("User does not exists");

            if (!curUser.Admin)
                return RedirectToAction("Index", "Home");
            // Authentication--

            var users = _deathWishCoffeeDbContext.Users.ToList();

            return View("~/Views/Admin/AllUsers.cshtml", users);
        }

        // [admin/users/delete/{id}]
        [HttpPost]
        public IActionResult DeleteUser(Guid id)
        {
            // Console.WriteLine("DeleteUser");

            // select user to delete
            var userToDelete = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id == id);

            // if user is EXIST => DELETE
            if (userToDelete != null)
            {
                _deathWishCoffeeDbContext.Users.Remove(userToDelete);
                _deathWishCoffeeDbContext.SaveChanges();
            }

            // after deleted, return to [/admin/users]
            return RedirectToAction("Index", "User");
        }

        // [/admin/users/edit/{id}]
        [HttpGet]
        public IActionResult EditUser(Guid id)
        {
            // select user to edit
            var user = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id == id);

            // if user does NOT EXISTS return bad request 
            if (user == null)
                return BadRequest("Invalid username or password.");

            ViewBag.user = user;
            return View("~/Views/Admin/EditUser.cshtml");
        }

        [HttpPost]
        public IActionResult EditUser(RegisterRequest registerRequest, Guid id)
        {
            // Console.WriteLine("EditUser");

            // CREATE new user (Models.User) from RegisterRequest (ViewModels)
            if (string.IsNullOrEmpty(registerRequest.MiddleName))
                registerRequest.MiddleName = "";

            if (string.IsNullOrEmpty(registerRequest.Country))
                registerRequest.Country = "";

            // GET user in databse
            var userInDb = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id == id);

            // if userInDb doesn't exist
            if (userInDb == null)
                return BadRequest("User does not exists");
            // update
            userInDb.Fullname = registerRequest.FirstName + " " + registerRequest.MiddleName + " " + registerRequest.LastName;
            userInDb.FirstName = registerRequest.FirstName;
            userInDb.MiddleName = registerRequest.MiddleName;
            userInDb.LastName = registerRequest.LastName;
            userInDb.Email = registerRequest.Email;
            userInDb.Username = registerRequest.Username;
            userInDb.Password = registerRequest.Password;
            userInDb.Phone = registerRequest.Phone;
            userInDb.Country = registerRequest.Country;
            userInDb.Address = registerRequest.Address;
            userInDb.LastModifiedAt = DateTime.Now;

            // save update
            _deathWishCoffeeDbContext.SaveChanges();

            // get user in database again after edited
            var userEdited = _deathWishCoffeeDbContext.Users
                        .Include(u => u.CartItems)
                        .ThenInclude(cartItem => cartItem.Product)
                        .ThenInclude(product => product.Images)
                        .FirstOrDefault(u => u.Id == id);

            // return bad request if user does NOT EXISTS
            if (userEdited == null)
                return BadRequest("Invalid username or password.");

            GetRecommendProducts();

            // set USER data to session
            SetUpUserDataForAllPage(userEdited);

            // set CART data to session
            SetUpCartDataForAllPage(userEdited.CartItems.ToList());

            // Console.WriteLine(_httpContext.HttpContext.Session.GetString("Username"));

            // return [/admin/users]
            return RedirectToAction("Index", "User");
        }

        // ERRORS
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}