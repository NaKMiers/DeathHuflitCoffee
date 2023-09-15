using DeathWishCoffee.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DeathWishCoffee.Controllers
{
    public class StoreLocatorController : Controller
    {
        private readonly ILogger<StoreLocatorController> _logger;

        public StoreLocatorController(ILogger<StoreLocatorController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {

            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}