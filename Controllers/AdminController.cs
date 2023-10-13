using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using DeathWishCoffee.Models;

namespace DeathWishCoffee.Controllers
{
    public class AdminController : Controller
    {
        // [/admin]
        [HttpGet]
        public IActionResult Index()
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