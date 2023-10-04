using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using DeathWishCoffee.Models;
using DeathWishCoffee.Models.Domain;
using DeathWishCoffee.Models.ViewModels;
using DeathWishCoffee.Data;

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
            return View();
        }

        private void SetUpUserDataForAllPage(User user)
        {
            _httpContext.HttpContext.Session.SetString("Id", user.Id.ToString());
            _httpContext.HttpContext.Session.SetString("Username", user.Username);
            _httpContext.HttpContext.Session.SetString("Avatar", user.Avatar);
        }

        // [/admin/login]
        [HttpGet]
        public IActionResult Login()
        {
            if (HttpContext.Session.GetString("Id") != null)
            {
                return RedirectToAction("Index", "Account");
            }

            return View();
        }

        [HttpPost]
        public IActionResult Login(LoginRequest loginRequest)
        {
            Console.WriteLine("Login");

            // check user if exist
            var user = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Username == loginRequest.Username && u.Password == loginRequest.Password);

            // return bad request if user does NOT EXISTS
            if (user == null)
            {
                return BadRequest("Invalid username or password.");
            }

            Console.WriteLine(user.Id);
            Console.WriteLine(user.Username);
            Console.WriteLine(user.Avatar);

            // set user data to session
            SetUpUserDataForAllPage(user);

            return RedirectToAction("Index", "Home");
        }

        // [/admin/register]
        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Register(RegisterRequest form)
        {
            Console.WriteLine("Register");

            // create new user (Models.User) from RegisterRequest (ViewModels)
            if (string.IsNullOrEmpty(form.MiddleName))
            {
                form.MiddleName = "";
            }
            if (string.IsNullOrEmpty(form.Country))
            {
                form.Country = "";
            }

            string avatarPath = "";
            if (form.Avatar != null)
            {

                Console.WriteLine(form.Avatar.FileName);
                // get path to save in server
                var imagePath = Path.Combine("wwwroot", "uploads");
                var imageName = Guid.NewGuid().ToString() + Path.GetExtension(form.Avatar.FileName);
                var fullPath = Path.Combine(Directory.GetCurrentDirectory(), imagePath, imageName);
                avatarPath = Path.Combine(imageName);
                // save file to server (/wwwroot/uploads)
                using var stream = new FileStream(fullPath, FileMode.Create);
                form.Avatar.CopyTo(stream);
            }

            var newUser = new User
            {
                Fullname = form.FirstName + form.MiddleName + form.LastName,
                FirstName = form.FirstName,
                MiddleName = form.MiddleName,
                LastName = form.LastName,
                Email = form.Email,
                Username = form.Username,
                Password = form.Password,
                Phone = form.Phone,
                Country = form.Country,
                Address = form.Address,
                Avatar = avatarPath,
            };

            // add users in database
            _deathWishCoffeeDbContext.Users.Add(newUser);
            _deathWishCoffeeDbContext.SaveChanges();

            var registedUser = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Username == form.Username && u.Password == form.Password);

            // set user data to session
            SetUpUserDataForAllPage(registedUser);

            return RedirectToAction("Index", "Home");
        }

        // [/admin/users]
        [HttpGet]
        public IActionResult AllUsers()
        {
            var users = _deathWishCoffeeDbContext.Users.ToList();

            return View(users);
        }

        [HttpPost]
        public IActionResult DeleteUser(Guid id)
        {
            Console.WriteLine("DeleteUser");

            // select user to delete
            var userToDelete = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id == id);

            // if user is EXIST => DELETE
            if (userToDelete != null)
            {
                _deathWishCoffeeDbContext.Users.Remove(userToDelete);
                _deathWishCoffeeDbContext.SaveChanges();
            }

            // after deleted, return to [/admin/users]
            return RedirectToAction("AllUsers", "Admin");
        }

        // [/admin/users/edit/{id}]
        [HttpGet]
        public IActionResult EditUser(Guid id)
        {
            // select user to edit
            var user = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id == id);

            // if user does NOT EXISTS return bad request 
            if (user == null)
            {
                return BadRequest("Invalid username or password.");
            }

            ViewBag.user = user;

            return View();
        }

        [HttpPost]
        public IActionResult EditUser(RegisterRequest registerRequest, Guid id)
        {
            Console.WriteLine("EditUser");

            // CREATE new user (Models.User) from RegisterRequest (ViewModels)
            if (string.IsNullOrEmpty(registerRequest.MiddleName))
                registerRequest.MiddleName = "";

            if (string.IsNullOrEmpty(registerRequest.Country))
                registerRequest.Country = "";

            // GET user in databse
            var userInDb = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id == id);

            // if userInDb doesn't exist
            if (userInDb != null)
            {
                // update
                userInDb.Fullname = registerRequest.FirstName + " " + registerRequest.MiddleName + " " + registerRequest.LastName;
                userInDb.FirstName = registerRequest.FirstName;
                userInDb.MiddleName = registerRequest.MiddleName;
                userInDb.LastName = registerRequest.LastName;
                userInDb.Email = registerRequest.Email;
                userInDb.Username = registerRequest.Username;
                userInDb.Password = registerRequest.Password;
                userInDb.Phone = registerRequest.Phone;
                userInDb.Country = registerRequest.Country;
                userInDb.Address = registerRequest.Address;
                userInDb.LastModifiedAt = DateTime.Now;

                // save update
                _deathWishCoffeeDbContext.SaveChanges();
            }

            // return [/admin/users]
            return RedirectToAction("AllUsers", "Admin");
        }

        // [/admin/products]
        [HttpGet]
        public IActionResult AllProducts()
        {
            Console.WriteLine("AllProducts");
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

            return View(products);
        }

        // [/admin/products/add]
        [HttpGet]
        public IActionResult AddNewProduct()
        {
            return View();
        }

        [HttpPost]
        public IActionResult AddNewProduct(AddNewProductRequest form, List<IFormFile> imageList)
        {
            Console.WriteLine("AddNewProduct");

            // create product id
            var productId = Guid.NewGuid();

            if (string.IsNullOrEmpty(form.Title))
            {
                form.Title = "";
            }

            if (string.IsNullOrEmpty(form.Subtitle))
            {
                form.Subtitle = "";
            }

            if (string.IsNullOrEmpty(form.Description))
            {
                form.Description = "";
            }

            if (string.IsNullOrEmpty(form.SubscribeAndSave))
            {
                form.SubscribeAndSave = "";
            }

            if (string.IsNullOrEmpty(form.Note))
            {
                form.Note = "";
            }

            if (string.IsNullOrEmpty(form.PrimaryColor))
            {
                form.PrimaryColor = "";
            }

            // Create PRODUCT model
            var newProduct = new Product
            {
                Id = productId,
                Title = form.Title.Trim(),
                Subtitle = form.Subtitle.Trim(),
                Description = form.Description.Trim(),
                SubscribeAndSave = form.SubscribeAndSave.Trim(),
                Note = form.Note.Trim(),
                PrimaryColor = form.PrimaryColor.Trim(),
                CreatedAt = DateTime.Now
            };

            _deathWishCoffeeDbContext.Products.Add(newProduct);

            if (form.Sizes != null && form.Sizes.Count > 0)
            {
                foreach (var item in form.Sizes)
                {
                    if (string.IsNullOrEmpty(item.Label))
                    {
                        item.Label = "";
                    }
                    if (string.IsNullOrEmpty(item.Text))
                    {
                        item.Text = "";
                    }

                    var sizeToAdd = new DeathWishCoffee.Models.Domain.Size
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
                    {
                        item.Label = "";
                    }
                    if (string.IsNullOrEmpty(item.Text))
                    {
                        item.Text = "";
                    }

                    var flavorProfileToAdd = new DeathWishCoffee.Models.Domain.FlavorProfile
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
                    {
                        item.Label = "";
                    }
                    if (string.IsNullOrEmpty(item.Text))
                    {
                        item.Text = "";
                    }

                    var detailToAdd = new DeathWishCoffee.Models.Domain.Detail
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
                    {
                        item.Text = "";
                    }

                    var typeToAdd = new DeathWishCoffee.Models.Domain.Type
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
                    {
                        item.Label = "";
                    }
                    if (string.IsNullOrEmpty(item.MinLabel))
                    {
                        item.MinLabel = "";
                    }
                    if (string.IsNullOrEmpty(item.MaxLabel))
                    {
                        item.MaxLabel = "";
                    }

                    var attributeToAdd = new DeathWishCoffee.Models.Domain.Attribute
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
                    {
                        item.Label = "";
                    }
                    if (string.IsNullOrEmpty(item.Icon))
                    {
                        item.Icon = "0";
                    }

                    var insideTypeToAdd = new DeathWishCoffee.Models.Domain.InsideType
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
                    {
                        item.Title = "";
                    }
                    if (string.IsNullOrEmpty(item.Icon))
                    {
                        item.Icon = "0";
                    }

                    var symbolToAdd = new DeathWishCoffee.Models.Domain.Symbol
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
                    {
                        item.Text = "";
                    }

                    var formatToAdd = new DeathWishCoffee.Models.Domain.Format
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
                    {
                        item.Text = "";
                    }

                    var roastToAdd = new DeathWishCoffee.Models.Domain.Roast
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
                    {
                        item.Text = "";
                    }

                    var flavorsToAdd = new DeathWishCoffee.Models.Domain.Flavor
                    {
                        ProductId = productId,
                        Text = item.Text.Trim(),
                    };

                    _deathWishCoffeeDbContext.Flavors.Add(flavorsToAdd);
                }
            }

            if (imageList != null && imageList.Count > 0)
            {
                foreach (var imageFile in imageList)
                {
                    if (imageFile.Length > 0)
                    {

                        // get path to save in server
                        var imagePath = Path.Combine("wwwroot", "uploads");
                        var imageName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
                        var fullPath = Path.Combine(Directory.GetCurrentDirectory(), imagePath, imageName);

                        // save file to server (/wwwroot/uploads)
                        using (var stream = new FileStream(fullPath, FileMode.Create))
                        {
                            imageFile.CopyTo(stream);
                        }

                        var imageToAdd = new DeathWishCoffee.Models.Domain.Image
                        {
                            ProductId = productId,
                            Src = Path.Combine(imageName)
                        };

                        _deathWishCoffeeDbContext.Images.Add(imageToAdd);
                    }
                }
            }

            _deathWishCoffeeDbContext.SaveChanges();


            Console.WriteLine("-------------------------------------");

            // return RedirectToAction("AllProducts", "Admin");
            return View();
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
            return RedirectToAction("AllProducts", "Admin");
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

            return View();
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
            {
                return BadRequest("Product does not exist");
            }

            productToEdit.LastModifiedAt = DateTime.Now;

            Console.WriteLine("Title:" + form.Title);
            if (string.IsNullOrEmpty(form.Title))
            {
                form.Title = "";
            }
            productToEdit.Title = form.Title;

            Console.WriteLine("Subtitle:" + form.Subtitle);
            if (string.IsNullOrEmpty(form.Subtitle))
            {
                form.Subtitle = "";
            }
            productToEdit.Subtitle = form.Subtitle;

            Console.WriteLine("Description:" + form.Description);
            if (string.IsNullOrEmpty(form.Description))
            {
                form.Description = "";
            }
            productToEdit.Description = form.Description;

            Console.WriteLine("SubscribeAndSave:" + form.SubscribeAndSave);
            if (string.IsNullOrEmpty(form.SubscribeAndSave))
            {
                form.SubscribeAndSave = "";
            }
            productToEdit.SubscribeAndSave = form.SubscribeAndSave;

            Console.WriteLine("Note:" + form.Note);
            if (string.IsNullOrEmpty(form.Note))
            {
                form.Note = "";
            }
            productToEdit.Note = form.Note;

            Console.WriteLine("PrimaryColor:" + form.PrimaryColor);
            if (string.IsNullOrEmpty(form.PrimaryColor))
            {
                form.PrimaryColor = "";
            }
            productToEdit.PrimaryColor = form.PrimaryColor;

            Console.WriteLine("Sizes:");
            if (form.Sizes != null && form.Sizes.Count > 0)
            {

                if (productToEdit.Sizes != null)
                    _deathWishCoffeeDbContext.Sizes.RemoveRange(productToEdit.Sizes);

                foreach (var item in form.Sizes)
                {
                    if (string.IsNullOrEmpty(item.Label))
                    {
                        item.Label = "";
                    }
                    if (string.IsNullOrEmpty(item.Text))
                    {
                        item.Text = "";
                    }
                    var sizeToAdd = new DeathWishCoffee.Models.Domain.Size
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
            if (form.FlavorProfiles != null && form.FlavorProfiles.Count > 0)
            {
                if (productToEdit.FlavorProfiles != null)
                    _deathWishCoffeeDbContext.FlavorProfiles.RemoveRange(productToEdit.FlavorProfiles);

                foreach (var item in form.FlavorProfiles)
                {
                    if (string.IsNullOrEmpty(item.Label))
                    {
                        item.Label = "";
                    }
                    if (string.IsNullOrEmpty(item.Text))
                    {
                        item.Text = "";
                    }

                    var flavorProfileToAdd = new DeathWishCoffee.Models.Domain.FlavorProfile
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
            if (form.Details != null && form.Details.Count > 0)
            {
                if (productToEdit.Details != null)
                    _deathWishCoffeeDbContext.Details.RemoveRange(productToEdit.Details);

                foreach (var item in form.Details)
                {
                    if (string.IsNullOrEmpty(item.Label))
                    {
                        item.Label = "";
                    }
                    if (string.IsNullOrEmpty(item.Text))
                    {
                        item.Text = "";
                    }

                    var detailToAdd = new DeathWishCoffee.Models.Domain.Detail
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
            if (form.Types != null && form.Types.Count > 0)
            {
                if (productToEdit.Types != null)
                    _deathWishCoffeeDbContext.Types.RemoveRange(productToEdit.Types);

                foreach (var item in form.Types)
                {
                    if (string.IsNullOrEmpty(item.Text))
                    {
                        item.Text = "";
                    }

                    var typeToAdd = new DeathWishCoffee.Models.Domain.Type
                    {
                        ProductId = productId,
                        Text = item.Text.Trim(),
                    };
                    Console.WriteLine("Text: " + item.Text);

                    _deathWishCoffeeDbContext.Types.Add(typeToAdd);

                }
            }

            Console.WriteLine("Attributes:");
            if (form.Attributes != null && form.Attributes.Count > 0)
            {
                if (productToEdit.Attributes != null)
                    _deathWishCoffeeDbContext.Attributes.RemoveRange(productToEdit.Attributes);

                foreach (var item in form.Attributes)
                {
                    if (string.IsNullOrEmpty(item.Label))
                    {
                        item.Label = "";
                    }
                    if (string.IsNullOrEmpty(item.MinLabel))
                    {
                        item.MinLabel = "";
                    }
                    if (string.IsNullOrEmpty(item.MaxLabel))
                    {
                        item.MaxLabel = "";
                    }

                    var attributeToAdd = new DeathWishCoffee.Models.Domain.Attribute
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
            if (form.InsideTypes != null && form.InsideTypes.Count > 0)
            {
                if (productToEdit.InsideTypes != null)
                    _deathWishCoffeeDbContext.InsideTypes.RemoveRange(productToEdit.InsideTypes);

                foreach (var item in form.InsideTypes)
                {
                    if (string.IsNullOrEmpty(item.Label))
                    {
                        item.Label = "";
                    }
                    if (string.IsNullOrEmpty(item.Icon))
                    {
                        item.Icon = "0";
                    }

                    var insideTypeToAdd = new DeathWishCoffee.Models.Domain.InsideType
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
            if (form.Symbols != null && form.Symbols.Count > 0)
            {
                if (productToEdit.Symbols != null)
                    _deathWishCoffeeDbContext.Symbols.RemoveRange(productToEdit.Symbols);

                foreach (var item in form.Symbols)
                {
                    if (string.IsNullOrEmpty(item.Title))
                    {
                        item.Title = "";
                    }
                    if (string.IsNullOrEmpty(item.Icon))
                    {
                        item.Icon = "0";
                    }

                    var symbolToAdd = new DeathWishCoffee.Models.Domain.Symbol
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
            if (form.Formats != null && form.Formats.Count > 0)
            {
                if (productToEdit.Formats != null)
                    _deathWishCoffeeDbContext.Formats.RemoveRange(productToEdit.Formats);

                foreach (var item in form.Formats)
                {
                    if (string.IsNullOrEmpty(item.Text))
                    {
                        item.Text = "";
                    }

                    var formatToAdd = new DeathWishCoffee.Models.Domain.Format
                    {
                        ProductId = productId,
                        Text = item.Text.Trim(),
                    };
                    Console.WriteLine("Text: " + item.Text);

                    _deathWishCoffeeDbContext.Formats.Add(formatToAdd);
                }
            }

            Console.WriteLine("Roasts:");
            if (form.Roasts != null && form.Roasts.Count > 0)
            {

                if (productToEdit.Roasts != null)
                    _deathWishCoffeeDbContext.Roasts.RemoveRange(productToEdit.Roasts);

                foreach (var item in form.Roasts)
                {
                    if (string.IsNullOrEmpty(item.Text))
                    {
                        item.Text = "";
                    }

                    var roastToAdd = new DeathWishCoffee.Models.Domain.Roast
                    {
                        ProductId = productId,
                        Text = item.Text.Trim(),
                    };
                    Console.WriteLine("Text: " + item.Text);

                    _deathWishCoffeeDbContext.Roasts.Add(roastToAdd);
                }
            }

            Console.WriteLine("Flavors:");
            if (form.Flavors != null && form.Flavors.Count > 0)
            {
                if (productToEdit.Flavors != null)
                    _deathWishCoffeeDbContext.Flavors.RemoveRange(productToEdit.Flavors);
                foreach (var item in form.Flavors)
                {
                    if (string.IsNullOrEmpty(item.Text))
                    {
                        item.Text = "";
                    }

                    var flavorsToAdd = new DeathWishCoffee.Models.Domain.Flavor
                    {
                        ProductId = productId,
                        Text = item.Text.Trim(),
                    };
                    Console.WriteLine("Text: " + item.Text);

                    _deathWishCoffeeDbContext.Flavors.Add(flavorsToAdd);
                }
            }



            _deathWishCoffeeDbContext.SaveChanges();

            return RedirectToAction("AllProducts", "Admin");
        }

        // [/admin/reviews]
        [HttpGet]
        public IActionResult AllReviews()
        {
            var reviews = _deathWishCoffeeDbContext.Reviews.ToList();

            return View(reviews);
        }

        // [/admin/reviews/add/{productId}]
        [HttpGet]
        public IActionResult AddNewReview()
        {
            return View();
        }

        [HttpPost]
        public IActionResult AddNewReview(AddNewReviewRequest form, Guid productId)
        {
            Console.WriteLine("AddNewReview");

            Console.WriteLine("Title: " + form.Title);
            Console.WriteLine("Text: " + form.Text);

            var reviewToProduct = _deathWishCoffeeDbContext.Products.FirstOrDefault(p => p.Id == productId);

            if (reviewToProduct == null)
            {
                return BadRequest("Invalid Product ID!");
            }

            if (string.IsNullOrEmpty(form.Title))
            {
                form.Title = "";
            }
            if (string.IsNullOrEmpty(form.Text))
            {
                form.Text = "";
            }
            var newReview = new Review
            {
                ProductId = productId,
                Title = form.Title,
                Text = form.Text,
                CreatedAt = DateTime.Now,
            };

            _deathWishCoffeeDbContext.Reviews.Add(newReview);
            _deathWishCoffeeDbContext.SaveChanges();

            // return View();
            return RedirectToAction("AllProducts", "Admin");
        }

        // [/admin/reviews/delete/{id}]
        public IActionResult DeleteReview(Guid id)
        {
            Console.WriteLine("DeleteReivew");

            // get review to delete from reviewId
            var reviewToDelete = _deathWishCoffeeDbContext.Reviews.FirstOrDefault(r => r.Id == id);

            // if review is EXIST => DELETE
            if (reviewToDelete != null)
            {
                _deathWishCoffeeDbContext.Reviews.Remove(reviewToDelete);
                _deathWishCoffeeDbContext.SaveChanges();
            }

            // redirect to all reviews
            return RedirectToAction("AllReviews", "Admin");
        }

        // [/admin/reviews/edit/{id}]
        [HttpGet]
        public IActionResult EditReview(Guid id)
        {

            var review = _deathWishCoffeeDbContext.Reviews.FirstOrDefault(r => r.Id == id);

            // if review does NOT EXISTS return bad request 
            if (review == null)
            {
                return BadRequest("Review does not exist");
            }

            ViewBag.Review = review;

            return View();
        }

        [HttpPost]
        public IActionResult EditReview(AddNewReviewRequest form, Guid id)
        {
            Console.WriteLine("EditReview");

            // prevent null & empty string
            if (string.IsNullOrEmpty(form.Title))
                form.Title = "";

            if (string.IsNullOrEmpty(form.Text))
                form.Text = "";

            // get review in database
            var reviewInDb = _deathWishCoffeeDbContext.Reviews.FirstOrDefault(r => r.Id == id);

            // if review does not EXIST => Bad Request
            if (reviewInDb == null)
                return BadRequest("Review does not exist");

            reviewInDb.Title = form.Title;
            reviewInDb.Text = form.Text;
            reviewInDb.LastModifiedAt = DateTime.Now;

            _deathWishCoffeeDbContext.SaveChanges();

            return RedirectToAction("AllReviews", "Admin");
        }

        // [/admin/orders]
        [HttpGet]
        public IActionResult AllOrders()
        {
            return View();
        }

        // [/admin/orders/{userId}]
        public IActionResult AllOrdersByUser(Guid userId)
        {
            return View();
        }

        // [/admin/orders/add/{userId}]
        [HttpGet]
        public IActionResult AddNewOrder(Guid userId)
        {
            // get All Products from DB to select
            var allProducts = _deathWishCoffeeDbContext.Products
                        .Include(p => p.Sizes)
                        .Include(p => p.InsideTypes)
                        .Include(p => p.Attributes)
                        .Include(p => p.Images)
                        .Include(p => p.Types)
                        .ToList();

            ViewBag.Products = allProducts;
            ViewBag.UserId = userId;

            return View();
        }

        [HttpPost]
        public IActionResult AddNewOrder(AddNewOrderRequest form, Guid userId)
        {
            return View();
        }

        // [/admin/orders/edit/{id}]
        [HttpGet]
        public IActionResult EditOrder(Guid id)
        {
            // get order from database
            var order = _deathWishCoffeeDbContext.Orders
                            .Include(o => o.Products)
                            .FirstOrDefault(o => o.Id == id);

            // assign order to ViewBag to show in view
            ViewBag.Order = order;
            return View();
        }

        [HttpPost]
        public IActionResult EditOrder(AddNewOrderRequest form, Guid id)
        {
            Console.WriteLine("EditOrder");

            return View();
        }

        // [/admin/orders/delete/{id}]
        public IActionResult DeleteOrder(Guid id)
        {
            Console.WriteLine("DeleteOrder");
            // get order to delete from database
            var orderToDelete = _deathWishCoffeeDbContext.Orders.FirstOrDefault(o => o.Id == id);

            // if order does NOT EXISTS => BadRequest
            if (orderToDelete == null)
                return BadRequest("Order does not exists.");

            // delete order
            _deathWishCoffeeDbContext.Orders.Remove(orderToDelete);
            _deathWishCoffeeDbContext.SaveChanges();

            // redirect to All Orders
            return RedirectToAction("AllOrders", "Admin");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}