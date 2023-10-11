using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;

namespace DeathWishCoffee.Controllers
{
    public class CheckoutController : Controller
    {
        // [/checkouts/{id}]
        public IActionResult Index(Guid id)
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}