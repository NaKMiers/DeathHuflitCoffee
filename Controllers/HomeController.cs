using DeathWishCoffee.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DeathWishCoffee.Controllers
{
    public class HomeController : Controller
    {

        // [/]
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        // [*]
        [HttpGet]
        public IActionResult PageNotFound()
        {
            Console.WriteLine("PageNotFound");
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