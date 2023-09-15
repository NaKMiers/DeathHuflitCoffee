using DeathWishCoffee.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DeathWishCoffee.Controllers
{
    public class TheVoidController : Controller
    {
        private readonly ILogger<TheVoidController> _logger;

        public TheVoidController(ILogger<TheVoidController> logger)
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