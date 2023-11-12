using DeathWishCoffee.Models;
using DeathWishCoffee.Models.Main;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace DeathWishCoffee.Controllers
{
    public class HomeController : Controller
    {

        private readonly DeathWishCoffeeDbContext _deathWishCoffeeDbContext;
        private readonly IHttpContextAccessor _httpContext;

        public HomeController(DeathWishCoffeeDbContext deathWishCoffeeDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _deathWishCoffeeDbContext = deathWishCoffeeDbContext;
            _httpContext = httpContextAccessor;
        }

        // [/]
        [HttpGet]
        public IActionResult Index()
        {
            var randomProducts = _deathWishCoffeeDbContext.Products
                .Include(p => p.Sizes)
                .Include(p => p.Images)
                .OrderBy(x => Guid.NewGuid())
                .Take(8)
                .ToList();

            return View(randomProducts);
        }

        // [*]
        [HttpGet]
        public IActionResult PageNotFound()
        {
            return View();
        }

        // ERRORS
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}