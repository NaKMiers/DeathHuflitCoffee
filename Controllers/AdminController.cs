using DeathWishCoffee.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using DeathWishCoffee.Models.ViewModels;
using DeathWishCoffee.Data;
using DeathWishCoffee.Models.Domain;

namespace DeathWishCoffee.Controllers
{
    public class AdminController : Controller
    {
        private readonly DeathWishCoffeeDbContext _deathWishCoffeeDbContext;

        // constructor
        public AdminController(DeathWishCoffeeDbContext deathWishCoffeeDbContext)
        {
            _deathWishCoffeeDbContext = deathWishCoffeeDbContext;
        }

        // [/admin]
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        // [/admin/login]
        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Login(LoginRequest loginRequest)
        {
            Console.WriteLine("Login");

            // check user if exist
            var user = _deathWishCoffeeDbContext.Users.SingleOrDefault(u => u.Username == loginRequest.Username && u.Password == loginRequest.Password);

            // return bad request if user doesn't exists
            if (user == null)
            {
                return BadRequest("Invalid username or password.");
            }

            return View();
        }

        // [/admin/register]
        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Register(RegisterRequest registerRequest)
        {
            Console.WriteLine("Register");

            // create new user (Models.User) from RegisterRequest (ViewModels)
            if (string.IsNullOrEmpty(registerRequest.MiddleName))
            {
                registerRequest.MiddleName = "";
            }
            if (string.IsNullOrEmpty(registerRequest.Country))
            {
                registerRequest.Country = "";
            }


            var user = new User
            {
                Fullname = registerRequest.FirstName + registerRequest.MiddleName + registerRequest.LastName,
                FirstName = registerRequest.FirstName,
                MiddleName = registerRequest.MiddleName,
                LastName = registerRequest.LastName,
                Email = registerRequest.Email,
                Username = registerRequest.Username,
                Password = registerRequest.Password,
                Phone = registerRequest.Phone,
                Country = registerRequest.Country,
                Address = registerRequest.Address,
            };

            // add users in database
            _deathWishCoffeeDbContext.Users.Add(user);
            _deathWishCoffeeDbContext.SaveChanges();

            return View();
        }

        // [/admin/users]
        [HttpGet]
        public IActionResult AllUsers()
        {
            var users = _deathWishCoffeeDbContext.Users.ToList();
            Console.WriteLine(users);

            return View(users);
        }

        [HttpPost]
        public IActionResult DeleteUser(Guid id)
        {
            Console.WriteLine("Delete User");

            // select user to delete
            var userToDelete = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id == id);

            // if user is exist => delete
            if (userToDelete != null)
            {
                _deathWishCoffeeDbContext.Users.Remove(userToDelete);
                _deathWishCoffeeDbContext.SaveChanges();
            }

            // after deleted, return to [/admin/users]
            return RedirectToAction("AllUsers", "Admin");
        }

        // [/admin/users/edit/{id}]
        [HttpGet]
        public IActionResult EditUser(Guid id)
        {
            Console.WriteLine("Edit user id: " + id);

            // select user to edit
            var user = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id == id);

            // return bad request if user doesn't exists
            if (user == null)
            {
                return BadRequest("Invalid username or password.");
            }

            ViewBag.user = user;

            return View();
        }

        [HttpPost]
        public IActionResult EditUser(RegisterRequest registerRequest, Guid id)
        {
            Console.WriteLine("registerRequest: ", registerRequest);

            // create new user (Models.User) from RegisterRequest (ViewModels)
            if (string.IsNullOrEmpty(registerRequest.MiddleName))
            {
                registerRequest.MiddleName = "";
            }
            if (string.IsNullOrEmpty(registerRequest.Country))
            {
                registerRequest.Country = "";
            }

            // get User in databse
            var userInDb = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id == id);

            // if userInDb doesn't exist
            if (userInDb != null)
            {
                // update
                userInDb.Fullname = registerRequest.FirstName + registerRequest.MiddleName + registerRequest.LastName;
                userInDb.FirstName = registerRequest.FirstName;
                userInDb.MiddleName = registerRequest.MiddleName;
                userInDb.LastName = registerRequest.LastName;
                userInDb.Email = registerRequest.Email;
                userInDb.Username = registerRequest.Username;
                userInDb.Password = registerRequest.Password;
                userInDb.Phone = registerRequest.Phone;
                userInDb.Country = registerRequest.Country;
                userInDb.Address = registerRequest.Address;

                // save update
                _deathWishCoffeeDbContext.SaveChanges();
            }

            // return [/admin/users]
            return RedirectToAction("AllUsers", "Admin");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}