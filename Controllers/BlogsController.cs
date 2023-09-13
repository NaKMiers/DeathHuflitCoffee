using DeathWishCoffee.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DeathWishCoffee.Controllers
{
    public class BlogsController : Controller
    {
        private readonly ILogger<BlogsController> _logger;

        public BlogsController(ILogger<BlogsController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index(string id)
        {
            Console.WriteLine(id);
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}