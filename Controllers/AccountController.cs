using DeathWishCoffee.Data;
using DeathWishCoffee.Models;
using DeathWishCoffee.Models.Domain;
using DeathWishCoffee.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Diagnostics;

namespace DeathWishCoffee.Controllers
{
    public class AccountController : Controller
    {
        private readonly DeathWishCoffeeDbContext _deathWishCoffeeDbContext;
        private readonly IHttpContextAccessor _httpContext;

        // constructor
        public AccountController(DeathWishCoffeeDbContext deathWishCoffeeDbContext, IHttpContextAccessor httpContextAccessor)
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

        // [/account]
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        // [/account/login]
        [HttpGet]
        public IActionResult Login()
        {
            if (_httpContext.HttpContext.Session.GetString("Id") != null)
            {
                return RedirectToAction("Index", "Account");
            }

            return View("~/Views/Admin/Login.cshtml");
        }

        [HttpPost]
        public IActionResult Login(LoginRequest loginRequest)
        {
            Console.WriteLine("Login");

            // check user if exist
            var user = _deathWishCoffeeDbContext.Users
                        .Include(u => u.Cart)
                        .ThenInclude(cartItem => cartItem.Product)
                        .ThenInclude(product => product.Images)
                        .FirstOrDefault(u => u.Username == loginRequest.Username && u.Password == loginRequest.Password);

            // return bad request if user does NOT EXISTS
            if (user == null)
            {
                return BadRequest("Invalid username or password.");
            }

            GetRecommendProducts();

            // set USER data to session
            SetUpUserDataForAllPage(user);

            // set CART data to session
            SetUpCartDataForAllPage(user.Cart);

            return RedirectToAction("Index", "Home");
        }

        // [/account/register]
        [HttpGet]
        public IActionResult Register()
        {
            return View("~/Views/Admin/Register.cshtml");
        }

        // [/account/logout]
        [HttpGet]
        public IActionResult Logout()
        {
            _httpContext.HttpContext.Session.Clear();

            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        public IActionResult Register(RegisterRequest form)
        {
            Console.WriteLine("Register");

            // check if the user exists or not
            var existedUser = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Username == form.Username.Trim());
            if (existedUser != null)
                return BadRequest("User already exists");

            // create new user (Models.User) from RegisterRequest (ViewModels)
            if (string.IsNullOrEmpty(form.MiddleName))
            {
                form.MiddleName = "";
            }
            if (string.IsNullOrEmpty(form.Country))
            {
                form.Country = "";
            }

            string avatarPath = "";
            if (form.Avatar != null)
            {

                Console.WriteLine(form.Avatar.FileName);
                // get path to save in server
                var imagePath = Path.Combine("wwwroot", "uploads");
                var imageName = Guid.NewGuid().ToString() + Path.GetExtension(form.Avatar.FileName);
                var fullPath = Path.Combine(Directory.GetCurrentDirectory(), imagePath, imageName);
                avatarPath = Path.Combine(imageName);
                // save file to server (/wwwroot/uploads)
                using var stream = new FileStream(fullPath, FileMode.Create);
                form.Avatar.CopyTo(stream);
            }

            var newUser = new User
            {
                Fullname = form.FirstName.Trim() + form.MiddleName.Trim() + form.LastName.Trim(),
                FirstName = form.FirstName.Trim(),
                MiddleName = form.MiddleName.Trim(),
                LastName = form.LastName.Trim(),
                Email = form.Email.Trim(),
                Username = form.Username.Trim(),
                Password = form.Password.Trim(),
                Phone = form.Phone.Trim(),
                Country = form.Country.Trim(),
                Address = form.Address.Trim(),
                Avatar = avatarPath,
            };

            // add users in database
            _deathWishCoffeeDbContext.Users.Add(newUser);
            _deathWishCoffeeDbContext.SaveChanges();

            var registedUser = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Username == form.Username && u.Password == form.Password);

            // set user data to session
            SetUpUserDataForAllPage(registedUser);

            return RedirectToAction("Index", "Home");
        }


        // ERRORS
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}