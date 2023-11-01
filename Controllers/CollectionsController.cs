using DeathWishCoffee.Data;
using DeathWishCoffee.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace DeathWishCoffee.Controllers
{
    public class CollectionsController : Controller
    {

        private readonly DeathWishCoffeeDbContext _deathWishCoffeeDbContext;
        private readonly IHttpContextAccessor _httpContext;

        // constructor
        public CollectionsController(DeathWishCoffeeDbContext deathWishCoffeeDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _deathWishCoffeeDbContext = deathWishCoffeeDbContext;
            _httpContext = httpContextAccessor;
        }

        private IEnumerable<Models.Domain.Product> FilterAndSortForProductPage()
        {
            string filterTypes = _httpContext.HttpContext.Request.Query["filter"];
            string sortBy = _httpContext.HttpContext.Request.Query["sort_by"];

            var products = _deathWishCoffeeDbContext.Products
                        .Include(p => p.Sizes)
                        .Include(p => p.InsideTypes)
                        .Include(p => p.FlavorProfiles)
                        .Include(p => p.Attributes)
                        .Include(p => p.Details)
                        .Include(p => p.Images)
                        .Include(p => p.Types)
                        .Include(p => p.Formats)
                        .Include(p => p.Roasts)
                        .Include(p => p.Flavors)
                        .Include(p => p.Symbols)
                        .Include(p => p.Reviews)
                        .ToList();

            IEnumerable<Models.Domain.Product> finalProducts = null;

            // has FILTER
            if (!string.IsNullOrEmpty(filterTypes))
            {
                var filterTypesArray = filterTypes.Split(',').Select(type => type.ToLower()).ToList();

                var filteredProducts = products
                    .Where(product => filterTypesArray.All(filterType => product.Types.Any(productType => filterType == productType.Text.ToLower())))
                    .ToList();

                // has FILTER && SORT
                if (!string.IsNullOrEmpty(sortBy))
                {
                    switch (sortBy)
                    {
                        case "a-z":
                            Console.WriteLine("a-z");
                            finalProducts = filteredProducts.OrderBy(product => product.Title);
                            break;
                        case "time-created":
                            Console.WriteLine("time-created");
                            // finalProducts = filteredProducts.OrderBy(product => product.Time);
                            break;
                        case "best-seller":
                            Console.WriteLine("best-seller");
                            // finalProducts = filteredProducts.OrderByDescending(product => product.SalesCount);
                            break;
                        default:
                            finalProducts = filteredProducts;
                            break;
                    }
                }
                else
                    finalProducts = filteredProducts;
            }
            // has NOT FILTER
            else
            {
                // has NOT FILTER but has SORT
                if (!string.IsNullOrEmpty(sortBy))
                {
                    switch (sortBy)
                    {
                        case "a-z":
                            Console.WriteLine("a-z");
                            finalProducts = products.OrderBy(product => product.Title);
                            break;
                        case "time-created":
                            Console.WriteLine("time-created");
                            // finalProducts = products.OrderBy(product => product.Time);
                            break;
                        case "best-seller":
                            Console.WriteLine("best-seller");
                            // finalProducts = products.OrderByDescending(product => product.SalesCount);
                            break;
                        default:
                            finalProducts = products;
                            break;
                    }
                }
                else
                    finalProducts = products;
            }


            return finalProducts;
        }

        // [/collections/]
        public IActionResult Index()
        {
            return View();
        }

        // [/collections/coffee]
        public IActionResult Coffee()
        {
            var finalProducts = FilterAndSortForProductPage();

            string pageQuery = _httpContext.HttpContext.Request.Query["page"];
            int page = 1;
            int pageSize = 8;
            if (!string.IsNullOrEmpty(pageQuery))
            {
                int pageNumber = int.Parse(pageQuery);
                if (pageNumber <= 0)
                    return RedirectToAction("PageNotFound", "Home");
                else
                    page = pageNumber;
            }
            int skip = (page - 1) * pageSize; // Số sản phẩm để bỏ qua
            var finalProductsList = finalProducts.Skip(skip).Take(pageSize).ToList();

            Console.WriteLine(finalProductsList.Count);
            ViewBag.CurPage = "Coffee";
            return View(finalProductsList);
        }

        // [/collections/merch]
        public IActionResult Merch()
        {
            var finalProducts = FilterAndSortForProductPage();

            string pageQuery = _httpContext.HttpContext.Request.Query["page"];
            int page = 1;
            int pageSize = 8;
            if (!string.IsNullOrEmpty(pageQuery))
            {
                int pageNumber = int.Parse(pageQuery);
                if (pageNumber <= 0)
                    return RedirectToAction("PageNotFound", "Home");
                else
                    page = pageNumber;
            }
            int skip = (page - 1) * pageSize; // Số sản phẩm để bỏ qua
            var finalProductsList = finalProducts.Skip(skip).Take(pageSize).ToList();

            Console.WriteLine(finalProductsList.Count);
            ViewBag.CurPage = "Merch";
            return View(finalProductsList);

        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}