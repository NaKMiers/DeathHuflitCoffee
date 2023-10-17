using DeathWishCoffee.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DeathWishCoffee.Controllers
{
    public class CheckoutController : Controller
    {

        private readonly DeathWishCoffeeDbContext _deathWishCoffeeDbContext;
        private readonly IHttpContextAccessor _httpContext;

        // constructor
        public CheckoutController(DeathWishCoffeeDbContext deathWishCoffeeDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _deathWishCoffeeDbContext = deathWishCoffeeDbContext;
            _httpContext = httpContextAccessor;
        }

        // [/checkouts/{userId}]
        [HttpGet]
        public IActionResult Index(Guid userId)
        {
            Console.WriteLine("Checkout");

            // get user from database
            var user = _deathWishCoffeeDbContext.Users
                        .Include(u => u.Cart)
                        .ThenInclude(cartItem => cartItem.Product)
                        .ThenInclude(product => product.Images)
                        .FirstOrDefault(u => u.Id == userId);

            // if user do NOT EXIST => Bad Request
            if (user == null)
                return BadRequest("User ID does not exist");

            var myCart = user.Cart;
            ViewBag.UserId = userId;

            return View(myCart);
        }

        [HttpPost]
        public IActionResult Index()
        {
            return Redirect(Request.Headers["Referer"].ToString());
        }

        // ERRORS
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}