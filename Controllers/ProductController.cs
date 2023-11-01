using DeathWishCoffee.Models;
using DeathWishCoffee.Models.Main;
using DeathWishCoffee.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace DeathWishCoffee.Controllers
{
    public class ProductController : Controller
    {
        private readonly DeathWishCoffeeDbContext _deathWishCoffeeDbContext;
        private readonly IHttpContextAccessor _httpContext;

        // constructor
        public ProductController(DeathWishCoffeeDbContext deathWishCoffeeDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _deathWishCoffeeDbContext = deathWishCoffeeDbContext;
            _httpContext = httpContextAccessor;
        }

        // [/admin/products/{id}]
        public IActionResult Index(Guid id)
        {
            // get product from databasee
            var product = _deathWishCoffeeDbContext.Products
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
                            .FirstOrDefault(p => p.Id == id);

            if (product == null)
                return RedirectToAction("Index", "Home");

            return View(product);
        }

        // [/admin/products]
        [HttpGet]
        public IActionResult AllProducts()
        {
            Console.WriteLine("AllProducts");

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

            return View("~/Views/Admin/AllProducts.cshtml", products);
        }

        // [/admin/products/add]
        [HttpGet]
        public IActionResult AddNewProduct()
        {
            return View("~/Views/Admin/AddNewProduct.cshtml");
        }

        [HttpPost]
        public IActionResult AddNewProduct(AddNewProductRequest form, List<IFormFile> imageList)
        {
            Console.WriteLine("AddNewProduct");

            // create product id
            var productId = Guid.NewGuid();

            if (string.IsNullOrEmpty(form.Title))
                form.Title = "";

            if (string.IsNullOrEmpty(form.Subtitle))
                form.Subtitle = "";

            if (string.IsNullOrEmpty(form.Description))
                form.Description = "";

            if (string.IsNullOrEmpty(form.SubscribeAndSave))
                form.SubscribeAndSave = "";

            if (string.IsNullOrEmpty(form.Note))
                form.Note = "";

            if (string.IsNullOrEmpty(form.PrimaryColor))
                form.PrimaryColor = "";

            // Create PRODUCT model
            var newProduct = new Models.Main.Product
            {
                Id = productId,
                Title = form.Title.Trim(),
                Subtitle = form.Subtitle.Trim(),
                Description = form.Description.Trim(),
                SubscribeAndSave = form.SubscribeAndSave.Trim(),
                Note = form.Note.Trim(),
                Remain = form.Remain,
                PrimaryColor = form.PrimaryColor.Trim(),
                CreatedAt = DateTime.Now
            };

            _deathWishCoffeeDbContext.Products.Add(newProduct);

            if (form.Sizes != null && form.Sizes.Count > 0)
            {
                foreach (var item in form.Sizes)
                {
                    if (string.IsNullOrEmpty(item.Label))
                        item.Label = "";
                    if (string.IsNullOrEmpty(item.Text))
                        item.Text = "";

                    var sizeToAdd = new DeathWishCoffee.Models.Main.Size
                    {
                        ProductId = productId,
                        Label = item.Label.Trim(),
                        Price = item.Price,
                        Text = item.Text.Trim()
                    };

                    _deathWishCoffeeDbContext.Sizes.Add(sizeToAdd);
                }
            }

            if (form.FlavorProfiles != null && form.FlavorProfiles.Count > 0)
            {
                foreach (var item in form.FlavorProfiles)
                {
                    if (string.IsNullOrEmpty(item.Label))
                        item.Label = "";
                    if (string.IsNullOrEmpty(item.Text))
                        item.Text = "";

                    var flavorProfileToAdd = new DeathWishCoffee.Models.Main.FlavorProfile
                    {
                        ProductId = productId,
                        Label = item.Label.Trim(),
                        Text = item.Text.Trim()
                    };

                    _deathWishCoffeeDbContext.FlavorProfiles.Add(flavorProfileToAdd);
                }
            }

            if (form.Details != null && form.Details.Count > 0)
            {
                foreach (var item in form.Details)
                {
                    if (string.IsNullOrEmpty(item.Label))
                        item.Label = "";
                    if (string.IsNullOrEmpty(item.Text))
                        item.Text = "";

                    var detailToAdd = new DeathWishCoffee.Models.Main.Detail
                    {
                        ProductId = productId,
                        Label = item.Label.Trim(),
                        Text = item.Text.Trim()
                    };

                    _deathWishCoffeeDbContext.Details.Add(detailToAdd);

                }
            }

            if (form.Types != null && form.Types.Count > 0)
            {
                foreach (var item in form.Types)
                {
                    if (string.IsNullOrEmpty(item.Text))
                        item.Text = "";

                    var typeToAdd = new DeathWishCoffee.Models.Main.Type
                    {
                        ProductId = productId,
                        Text = item.Text.Trim(),
                    };

                    _deathWishCoffeeDbContext.Types.Add(typeToAdd);

                }
            }

            if (form.Attributes != null && form.Attributes.Count > 0)
            {
                foreach (var item in form.Attributes)
                {
                    if (string.IsNullOrEmpty(item.Label))
                        item.Label = "";
                    if (string.IsNullOrEmpty(item.MinLabel))
                        item.MinLabel = "";
                    if (string.IsNullOrEmpty(item.MaxLabel))
                        item.MaxLabel = "";

                    var attributeToAdd = new DeathWishCoffee.Models.Main.Attribute
                    {
                        ProductId = productId,
                        Label = item.Label.Trim(),
                        MinLabel = item.MinLabel.Trim(),
                        MaxLabel = item.MaxLabel.Trim(),
                        Value = item.Value,
                    };

                    _deathWishCoffeeDbContext.Attributes.Add(attributeToAdd);
                }
            }

            if (form.InsideTypes != null && form.InsideTypes.Count > 0)
            {
                foreach (var item in form.InsideTypes)
                {
                    if (string.IsNullOrEmpty(item.Label))
                        item.Label = "";
                    if (string.IsNullOrEmpty(item.Icon))
                        item.Icon = "0";

                    var insideTypeToAdd = new DeathWishCoffee.Models.Main.InsideType
                    {
                        ProductId = productId,
                        Label = item.Label.Trim(),
                        Icon = item.Icon.Trim(),
                    };

                    _deathWishCoffeeDbContext.InsideTypes.Add(insideTypeToAdd);
                }
            }

            if (form.Symbols != null && form.Symbols.Count > 0)
            {
                foreach (var item in form.Symbols)
                {
                    if (string.IsNullOrEmpty(item.Title))
                        item.Title = "";
                    if (string.IsNullOrEmpty(item.Icon))
                        item.Icon = "0";

                    var symbolToAdd = new DeathWishCoffee.Models.Main.Symbol
                    {
                        ProductId = productId,
                        Title = item.Title.Trim(),
                        Icon = item.Icon.Trim(),
                    };

                    _deathWishCoffeeDbContext.Symbols.Add(symbolToAdd);
                }
            }

            if (form.Formats != null && form.Formats.Count > 0)
            {
                foreach (var item in form.Formats)
                {
                    if (string.IsNullOrEmpty(item.Text))
                        item.Text = "";

                    var formatToAdd = new DeathWishCoffee.Models.Main.Format
                    {
                        ProductId = productId,
                        Text = item.Text.Trim(),
                    };

                    _deathWishCoffeeDbContext.Formats.Add(formatToAdd);
                }
            }

            if (form.Roasts != null && form.Roasts.Count > 0)
            {
                foreach (var item in form.Roasts)
                {
                    if (string.IsNullOrEmpty(item.Text))
                        item.Text = "";

                    var roastToAdd = new DeathWishCoffee.Models.Main.Roast
                    {
                        ProductId = productId,
                        Text = item.Text.Trim(),
                    };

                    _deathWishCoffeeDbContext.Roasts.Add(roastToAdd);
                }
            }

            if (form.Flavors != null && form.Flavors.Count > 0)
            {
                foreach (var item in form.Flavors)
                {
                    if (string.IsNullOrEmpty(item.Text))
                        item.Text = "";

                    var flavorsToAdd = new DeathWishCoffee.Models.Main.Flavor
                    {
                        ProductId = productId,
                        Text = item.Text.Trim(),
                    };

                    _deathWishCoffeeDbContext.Flavors.Add(flavorsToAdd);
                }
            }

            if (form.Images != null && form.Images.Count > 0)
            {
                foreach (var item in form.Images)
                {
                    if (string.IsNullOrEmpty(item.Src))
                        item.Src = "";

                    var ImagesToAdd = new DeathWishCoffee.Models.Main.Image
                    {
                        ProductId = productId,
                        Src = item.Src.Trim(),
                    };

                    _deathWishCoffeeDbContext.Images.Add(ImagesToAdd);
                }
            }

            // if (imageList != null && imageList.Count > 0)
            // {
            //     foreach (var imageFile in imageList)
            //     {
            //         if (imageFile.Length > 0)
            //         {

            //             // get path to save in server
            //             var imagePath = Path.Combine("wwwroot", "uploads");
            //             var imageName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
            //             var fullPath = Path.Combine(Directory.GetCurrentDirectory(), imagePath, imageName);

            //             // save file to server (/wwwroot/uploads)
            //             using (var stream = new FileStream(fullPath, FileMode.Create))
            //                 imageFile.CopyTo(stream);

            //             var imageToAdd = new DeathWishCoffee.Models.Main.Image
            //             {
            //                 ProductId = productId,
            //                 Src = Path.Combine(imageName)
            //             };

            //             _deathWishCoffeeDbContext.Images.Add(imageToAdd);
            //         }
            //     }
            // }

            _deathWishCoffeeDbContext.SaveChanges();

            // return RedirectToAction("AllProducts", "Admin");
            return View("~/Views/Admin/AddNewProduct.cshtml");
        }

        // [/admin/products/delete/{1}]
        [HttpPost]
        public IActionResult DeleteProduct(Guid id)
        {
            Console.WriteLine("DeleteProduct");

            // get product to delete by productId
            var productToDelete = _deathWishCoffeeDbContext.Products.FirstOrDefault(p => p.Id == id);

            // if product is EXIST => remove in database
            if (productToDelete != null)
            {
                _deathWishCoffeeDbContext.Products.Remove(productToDelete);
                _deathWishCoffeeDbContext.SaveChanges();
            }

            // redirect to All Products Page
            return RedirectToAction("AllProducts", "Product");
        }

        // [/admin/products/edit/{id}]
        [HttpGet]
        public IActionResult EditProduct(Guid id)
        {
            // GET product by database by "id"
            var product = _deathWishCoffeeDbContext.Products.FirstOrDefault(p => p.Id == id);

            // product does NOT EXISTS => bad request
            if (product == null)
            {
                return BadRequest("Product does not exists.");
            }

            var sizesForProduct = _deathWishCoffeeDbContext.Sizes.Where(e => e.ProductId == id).ToList();
            var insideTypesForProduct = _deathWishCoffeeDbContext.InsideTypes.Where(e => e.ProductId == id).ToList();
            var flavorProfilesForProduct = _deathWishCoffeeDbContext.FlavorProfiles.Where(e => e.ProductId == id).ToList();
            var attributesForProduct = _deathWishCoffeeDbContext.Attributes.Where(e => e.ProductId == id).ToList();
            var detailsForProduct = _deathWishCoffeeDbContext.Details.Where(e => e.ProductId == id).ToList();
            var imagesForProduct = _deathWishCoffeeDbContext.Images.Where(e => e.ProductId == id).ToList();
            var typesForProduct = _deathWishCoffeeDbContext.Types.Where(e => e.ProductId == id).ToList();
            var formatsForProduct = _deathWishCoffeeDbContext.Formats.Where(e => e.ProductId == id).ToList();
            var roastsForProduct = _deathWishCoffeeDbContext.Roasts.Where(e => e.ProductId == id).ToList();
            var flavorsForProduct = _deathWishCoffeeDbContext.Flavors.Where(e => e.ProductId == id).ToList();
            var symbolsForProduct = _deathWishCoffeeDbContext.Symbols.Where(e => e.ProductId == id).ToList();

            // assign to ViewBag to show in View
            ViewBag.Product = product;

            return View("~/Views/Admin/EditProduct.cshtml");
        }

        [HttpPost]
        public IActionResult EditProduct(AddNewProductRequest form, Guid id, List<IFormFile> imageList)
        {
            var productId = id;

            // get product to edit from database
            var productToEdit = _deathWishCoffeeDbContext.Products
                                .Include(p => p.Sizes)
                                .Include(p => p.InsideTypes)
                                .Include(p => p.FlavorProfiles)
                                .Include(p => p.Attributes)
                                .Include(p => p.Details)
                                .Include(p => p.Types)
                                .Include(p => p.Formats)
                                .Include(p => p.Roasts)
                                .Include(p => p.Flavors)
                                .Include(p => p.Symbols)
                                .FirstOrDefault(p => p.Id == id);

            if (productToEdit == null)
                return BadRequest("Product does not exist");

            productToEdit.LastModifiedAt = DateTime.Now;
            productToEdit.Remain = form.Remain;

            if (string.IsNullOrEmpty(form.Title))
                form.Title = "";
            productToEdit.Title = form.Title;

            if (string.IsNullOrEmpty(form.Subtitle))
                form.Subtitle = "";
            productToEdit.Subtitle = form.Subtitle;

            if (string.IsNullOrEmpty(form.Description))
                form.Description = "";
            productToEdit.Description = form.Description;

            if (string.IsNullOrEmpty(form.SubscribeAndSave))
                form.SubscribeAndSave = "";
            productToEdit.SubscribeAndSave = form.SubscribeAndSave;

            if (string.IsNullOrEmpty(form.Note))
                form.Note = "";
            productToEdit.Note = form.Note;

            if (string.IsNullOrEmpty(form.PrimaryColor))
                form.PrimaryColor = "";
            productToEdit.PrimaryColor = form.PrimaryColor;

            if (form.Sizes != null && form.Sizes.Count >= 0)
            {
                if (productToEdit.Sizes != null)
                    _deathWishCoffeeDbContext.Sizes.RemoveRange(productToEdit.Sizes);

                foreach (var item in form.Sizes)
                {
                    if (string.IsNullOrEmpty(item.Label))
                        item.Label = "";
                    if (string.IsNullOrEmpty(item.Text))
                        item.Text = "";
                    var sizeToAdd = new DeathWishCoffee.Models.Main.Size
                    {
                        ProductId = productId,
                        Label = item.Label.Trim(),
                        Price = item.Price,
                        Text = item.Text.Trim()
                    };
                    Console.WriteLine("Label: " + item.Label);
                    Console.WriteLine("Price: " + item.Price);
                    Console.WriteLine("Text: " + item.Text);

                    _deathWishCoffeeDbContext.Sizes.Add(sizeToAdd);
                }
            }

            Console.WriteLine("FlavorProfiles:");
            if (form.FlavorProfiles != null && form.FlavorProfiles.Count >= 0)
            {
                if (productToEdit.FlavorProfiles != null)
                    _deathWishCoffeeDbContext.FlavorProfiles.RemoveRange(productToEdit.FlavorProfiles);

                foreach (var item in form.FlavorProfiles)
                {
                    if (string.IsNullOrEmpty(item.Label))
                        item.Label = "";
                    if (string.IsNullOrEmpty(item.Text))
                        item.Text = "";

                    var flavorProfileToAdd = new DeathWishCoffee.Models.Main.FlavorProfile
                    {
                        ProductId = productId,
                        Label = item.Label.Trim(),
                        Text = item.Text.Trim()
                    };
                    Console.WriteLine("Label: " + item.Label);
                    Console.WriteLine("Text: " + item.Text);

                    _deathWishCoffeeDbContext.FlavorProfiles.Add(flavorProfileToAdd);
                }
            }

            Console.WriteLine("Details:");
            if (form.Details != null && form.Details.Count >= 0)
            {
                if (productToEdit.Details != null)
                    _deathWishCoffeeDbContext.Details.RemoveRange(productToEdit.Details);

                foreach (var item in form.Details)
                {
                    if (string.IsNullOrEmpty(item.Label))
                        item.Label = "";
                    if (string.IsNullOrEmpty(item.Text))
                        item.Text = "";

                    var detailToAdd = new DeathWishCoffee.Models.Main.Detail
                    {
                        ProductId = productId,
                        Label = item.Label.Trim(),
                        Text = item.Text.Trim()
                    };
                    Console.WriteLine("Label: " + item.Label);
                    Console.WriteLine("Text: " + item.Text);

                    _deathWishCoffeeDbContext.Details.Add(detailToAdd);

                }
            }

            Console.WriteLine("Types:");
            if (form.Types != null && form.Types.Count >= 0)
            {
                if (productToEdit.Types != null)
                    _deathWishCoffeeDbContext.Types.RemoveRange(productToEdit.Types);

                foreach (var item in form.Types)
                {
                    Console.WriteLine("---------Type: " + item.Text);
                    if (string.IsNullOrEmpty(item.Text))
                        item.Text = "";

                    var typeToAdd = new Models.Main.Type
                    {
                        ProductId = productId,
                        Text = item.Text.Trim(),
                    };
                    Console.WriteLine("Text: " + item.Text);

                    _deathWishCoffeeDbContext.Types.Add(typeToAdd);
                }
            }

            Console.WriteLine("Attributes:");
            if (form.Attributes != null && form.Attributes.Count >= 0)
            {
                if (productToEdit.Attributes != null)
                    _deathWishCoffeeDbContext.Attributes.RemoveRange(productToEdit.Attributes);

                foreach (var item in form.Attributes)
                {
                    if (string.IsNullOrEmpty(item.Label))
                        item.Label = "";
                    if (string.IsNullOrEmpty(item.MinLabel))
                        item.MinLabel = "";
                    if (string.IsNullOrEmpty(item.MaxLabel))
                        item.MaxLabel = "";

                    var attributeToAdd = new DeathWishCoffee.Models.Main.Attribute
                    {
                        ProductId = productId,
                        Label = item.Label.Trim(),
                        MinLabel = item.MinLabel.Trim(),
                        MaxLabel = item.MaxLabel.Trim(),
                        Value = item.Value,
                    };
                    Console.WriteLine("Label: " + item.Label);
                    Console.WriteLine("MinLabel: " + item.MinLabel);
                    Console.WriteLine("MaxLabel: " + item.MaxLabel);
                    Console.WriteLine("Value: " + item.Value);

                    _deathWishCoffeeDbContext.Attributes.Add(attributeToAdd);
                }
            }

            Console.WriteLine("InsideTypes:");
            if (form.InsideTypes != null && form.InsideTypes.Count >= 0)
            {
                if (productToEdit.InsideTypes != null)
                    _deathWishCoffeeDbContext.InsideTypes.RemoveRange(productToEdit.InsideTypes);

                foreach (var item in form.InsideTypes)
                {
                    if (string.IsNullOrEmpty(item.Label))
                        item.Label = "";
                    if (string.IsNullOrEmpty(item.Icon))
                        item.Icon = "0";

                    var insideTypeToAdd = new DeathWishCoffee.Models.Main.InsideType
                    {
                        ProductId = productId,
                        Label = item.Label.Trim(),
                        Icon = item.Icon.Trim(),
                    };
                    Console.WriteLine("Label: " + item.Label);
                    Console.WriteLine("Icon: " + item.Icon);

                    _deathWishCoffeeDbContext.InsideTypes.Add(insideTypeToAdd);
                }
            }

            Console.WriteLine("Symbols:");
            if (form.Symbols != null && form.Symbols.Count >= 0)
            {
                if (productToEdit.Symbols != null)
                    _deathWishCoffeeDbContext.Symbols.RemoveRange(productToEdit.Symbols);

                foreach (var item in form.Symbols)
                {
                    if (string.IsNullOrEmpty(item.Title))
                        item.Title = "";
                    if (string.IsNullOrEmpty(item.Icon))
                        item.Icon = "0";

                    var symbolToAdd = new DeathWishCoffee.Models.Main.Symbol
                    {
                        ProductId = productId,
                        Title = item.Title.Trim(),
                        Icon = item.Icon.Trim(),
                    };
                    Console.WriteLine("Title: " + item.Title);
                    Console.WriteLine("Icon: " + item.Icon);

                    _deathWishCoffeeDbContext.Symbols.Add(symbolToAdd);
                }
            }

            Console.WriteLine("Formats:");
            if (form.Formats != null && form.Formats.Count >= 0)
            {
                if (productToEdit.Formats != null)
                    _deathWishCoffeeDbContext.Formats.RemoveRange(productToEdit.Formats);

                foreach (var item in form.Formats)
                {
                    if (string.IsNullOrEmpty(item.Text))
                        item.Text = "";

                    var formatToAdd = new DeathWishCoffee.Models.Main.Format
                    {
                        ProductId = productId,
                        Text = item.Text.Trim(),
                    };
                    Console.WriteLine("Text: " + item.Text);

                    _deathWishCoffeeDbContext.Formats.Add(formatToAdd);
                }
            }

            Console.WriteLine("Roasts:");
            if (form.Roasts != null && form.Roasts.Count >= 0)
            {

                if (productToEdit.Roasts != null)
                    _deathWishCoffeeDbContext.Roasts.RemoveRange(productToEdit.Roasts);

                foreach (var item in form.Roasts)
                {
                    if (string.IsNullOrEmpty(item.Text))
                        item.Text = "";

                    var roastToAdd = new DeathWishCoffee.Models.Main.Roast
                    {
                        ProductId = productId,
                        Text = item.Text.Trim(),
                    };
                    Console.WriteLine("Text: " + item.Text);

                    _deathWishCoffeeDbContext.Roasts.Add(roastToAdd);
                }
            }

            Console.WriteLine("Flavors:");
            if (form.Flavors != null && form.Flavors.Count >= 0)
            {
                if (productToEdit.Flavors != null)
                    _deathWishCoffeeDbContext.Flavors.RemoveRange(productToEdit.Flavors);
                foreach (var item in form.Flavors)
                {
                    if (string.IsNullOrEmpty(item.Text))
                        item.Text = "";

                    var flavorsToAdd = new DeathWishCoffee.Models.Main.Flavor
                    {
                        ProductId = productId,
                        Text = item.Text.Trim(),
                    };
                    Console.WriteLine("Text: " + item.Text);

                    _deathWishCoffeeDbContext.Flavors.Add(flavorsToAdd);
                }
            }



            _deathWishCoffeeDbContext.SaveChanges();

            return RedirectToAction("AllProducts", "Product");
        }

        // ERRORS

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }

}



