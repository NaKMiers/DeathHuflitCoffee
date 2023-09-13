using DeathWishCoffee.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DeathWishCoffee.Controllers
{
    public class StoreLocator : Controller
    {
        private readonly ILogger<StoreLocator> _logger;

        public StoreLocator(ILogger<StoreLocator> logger)
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