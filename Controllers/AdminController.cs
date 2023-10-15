using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using DeathWishCoffee.Models;
using DeathWishCoffee.Data;

namespace DeathWishCoffee.Controllers
{
    public class AdminController : Controller
    {
        private readonly DeathWishCoffeeDbContext _deathWishCoffeeDbContext;
        private readonly IHttpContextAccessor _httpContext;

        // constructor
        public AdminController(DeathWishCoffeeDbContext deathWishCoffeeDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _deathWishCoffeeDbContext = deathWishCoffeeDbContext;
            _httpContext = httpContextAccessor;
        }

        // [/admin]
        [HttpGet]
        public IActionResult Index()
        {
            string curUserId = _httpContext.HttpContext.Session.GetString("Id");
            if (string.IsNullOrEmpty(curUserId))
                return RedirectToAction("Index", "Home");

            var curUser = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id.ToString() == curUserId);
            if (curUser == null)
                return BadRequest("User does not exists");

            if (curUser.Admin)
                return View();
            else
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