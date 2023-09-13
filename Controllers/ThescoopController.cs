using DeathWishCoffee.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DeathWishCoffee.Controllers
{
    public class ThescoopController : Controller
    {
        private readonly ILogger<ThescoopController> _logger;

        public ThescoopController(ILogger<ThescoopController> logger)
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