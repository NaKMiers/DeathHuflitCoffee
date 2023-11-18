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

            // get attributes from database
            var attributes = _deathWishCoffeeDbContext.Attributes.ToList();

            return View("~/Views/Admin/Categories/Attributes.cshtml", attributes);
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
            // get attributes from database
            var details = _deathWishCoffeeDbContext.Details.ToList();

            return View("~/Views/Admin/Categories/Details.cshtml", details);
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
            // get attributes from database
            var flavorProfiles = _deathWishCoffeeDbContext.FlavorProfiles.ToList();

            return View("~/Views/Admin/Categories/FlavorProfiles.cshtml", flavorProfiles);
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
            // get attributes from database
            var flavors = _deathWishCoffeeDbContext.Flavors.ToList();

            return View("~/Views/Admin/Categories/Flavors.cshtml", flavors);
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
            // get attributes from database
            var formats = _deathWishCoffeeDbContext.Formats.ToList();

            return View("~/Views/Admin/Categories/Formats.cshtml", formats);
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
            // get attributes from database
            var roasts = _deathWishCoffeeDbContext.Roasts.ToList();

            return View("~/Views/Admin/Categories/Roasts.cshtml", roasts);
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
            // get attributes from database
            var types = _deathWishCoffeeDbContext.Types.ToList();

            return View("~/Views/Admin/Categories/Types.cshtml", types);
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
            // get attributes from database
            var images = _deathWishCoffeeDbContext.Images.ToList();

            return View("~/Views/Admin/Categories/Images.cshtml", images);
        }

        // ERRORS
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}