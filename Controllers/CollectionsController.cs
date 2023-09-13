using DeathWishCoffee.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DeathWishCoffee.Controllers
{
    public class CollectionsController : Controller
    {
        private readonly ILogger<CollectionsController> _logger;

        public CollectionsController(ILogger<CollectionsController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult AllProducts()
        {
            return View("AllProducts");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}