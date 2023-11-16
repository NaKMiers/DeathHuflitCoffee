using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using DeathWishCoffee.Models;
using DeathWishCoffee.Models.Main;

namespace DeathWishCoffee.Controllers
{
    public class AdminController : Controller
    {
        private readonly DeathWishCoffeeDbContext _deathWishCoffeeDbContext;
        private readonly IHttpContextAccessor _httpContext;

        // constructor
        public AdminController(DeathWishCoffeeDbContext deathWishCoffeeDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _deathWishCoffeeDbContext = deathWishCoffeeDbContext;
            _httpContext = httpContextAccessor;
        }

        // [/admin]
        [HttpGet]
        public IActionResult Index()
        {
            // --Authentication
            string curUserId = _httpContext.HttpContext.Session.GetString("Id");
            if (string.IsNullOrEmpty(curUserId))
                return RedirectToAction("Index", "Home");

            var curUser = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id.ToString() == curUserId);
            if (curUser == null)
                return BadRequest("User does not exists");

            if (!curUser.Admin)
                return RedirectToAction("Index", "Home");
            // Authentication--


            return View();
        }

        // [/admin/attributes]
        public IActionResult Attributes()
        {
            // --Authentication
            string curUserId = _httpContext.HttpContext.Session.GetString("Id");
            if (string.IsNullOrEmpty(curUserId))
                return RedirectToAction("Index", "Home");

            var curUser = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id.ToString() == curUserId);
            if (curUser == null)
                return BadRequest("User does not exists");

            if (!curUser.Admin)
                return RedirectToAction("Index", "Home");
            // Authentication--

            return View("~/Views/Admin/Categories/Attributes.cshtml");
        }

        // [/admin/details]
        public IActionResult Details()
        {
            // --Authentication
            string curUserId = _httpContext.HttpContext.Session.GetString("Id");
            if (string.IsNullOrEmpty(curUserId))
                return RedirectToAction("Index", "Home");

            var curUser = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id.ToString() == curUserId);
            if (curUser == null)
                return BadRequest("User does not exists");

            if (!curUser.Admin)
                return RedirectToAction("Index", "Home");
            // Authentication--

            return View("~/Views/Admin/Categories/Details.cshtml");
        }

        // [/admin/flavor-profiles]
        public IActionResult FlavorProfiles()
        {
            // --Authentication
            string curUserId = _httpContext.HttpContext.Session.GetString("Id");
            if (string.IsNullOrEmpty(curUserId))
                return RedirectToAction("Index", "Home");

            var curUser = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id.ToString() == curUserId);
            if (curUser == null)
                return BadRequest("User does not exists");

            if (!curUser.Admin)
                return RedirectToAction("Index", "Home");
            // Authentication--

            return View("~/Views/Admin/Categories/FlavorProfiles.cshtml");
        }

        // [/admin/flavors]
        public IActionResult Flavors()
        {
            // --Authentication
            string curUserId = _httpContext.HttpContext.Session.GetString("Id");
            if (string.IsNullOrEmpty(curUserId))
                return RedirectToAction("Index", "Home");

            var curUser = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id.ToString() == curUserId);
            if (curUser == null)
                return BadRequest("User does not exists");

            if (!curUser.Admin)
                return RedirectToAction("Index", "Home");
            // Authentication--

            return View("~/Views/Admin/Categories/Flavors.cshtml");
        }

        // [/admin/formats]
        public IActionResult Formats()
        {
            // --Authentication
            string curUserId = _httpContext.HttpContext.Session.GetString("Id");
            if (string.IsNullOrEmpty(curUserId))
                return RedirectToAction("Index", "Home");

            var curUser = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id.ToString() == curUserId);
            if (curUser == null)
                return BadRequest("User does not exists");

            if (!curUser.Admin)
                return RedirectToAction("Index", "Home");
            // Authentication--

            return View("~/Views/Admin/Categories/Formats.cshtml");
        }

        // [/admin/roasts]
        public IActionResult Roasts()
        {
            // --Authentication
            string curUserId = _httpContext.HttpContext.Session.GetString("Id");
            if (string.IsNullOrEmpty(curUserId))
                return RedirectToAction("Index", "Home");

            var curUser = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id.ToString() == curUserId);
            if (curUser == null)
                return BadRequest("User does not exists");

            if (!curUser.Admin)
                return RedirectToAction("Index", "Home");
            // Authentication--

            return View("~/Views/Admin/Categories/Roasts.cshtml");
        }

        // [/admin/types]
        public IActionResult Types()
        {
            // --Authentication
            string curUserId = _httpContext.HttpContext.Session.GetString("Id");
            if (string.IsNullOrEmpty(curUserId))
                return RedirectToAction("Index", "Home");

            var curUser = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id.ToString() == curUserId);
            if (curUser == null)
                return BadRequest("User does not exists");

            if (!curUser.Admin)
                return RedirectToAction("Index", "Home");
            // Authentication--

            return View("~/Views/Admin/Categories/Types.cshtml");
        }

        // [/admin/images]
        public IActionResult Images()
        {
            // --Authentication
            string curUserId = _httpContext.HttpContext.Session.GetString("Id");
            if (string.IsNullOrEmpty(curUserId))
                return RedirectToAction("Index", "Home");

            var curUser = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id.ToString() == curUserId);
            if (curUser == null)
                return BadRequest("User does not exists");

            if (!curUser.Admin)
                return RedirectToAction("Index", "Home");
            // Authentication--

            return View("~/Views/Admin/Categories/Images.cshtml");
        }

        // ERRORS
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}