using DeathWishCoffee.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using DeathWishCoffee.Models.ViewModels;
using DeathWishCoffee.Data;
using DeathWishCoffee.Models.Domain;

namespace DeathWishCoffee.Controllers
{
    public class AdminController : Controller
    {
        private readonly DeathWishCoffeeDbContext _deathWishCoffeeDbContext;

        // constructor
        public AdminController(DeathWishCoffeeDbContext deathWishCoffeeDbContext)
        {
            _deathWishCoffeeDbContext = deathWishCoffeeDbContext;
        }

        // [/admin]
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        // [/admin/login]
        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Login(LoginRequest loginRequest)
        {
            Console.WriteLine("Login");

            // check user if exist
            var user = _deathWishCoffeeDbContext.Users.SingleOrDefault(u => u.Username == loginRequest.Username && u.Password == loginRequest.Password);

            // return bad request if user doesn't exists
            if (user == null)
            {
                return BadRequest("Invalid username or password.");
            }

            return View();
        }

        // [/admin/register]
        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Register(RegisterRequest registerRequest)
        {
            Console.WriteLine("Register");

            // create new user (Models.User) from RegisterRequest (ViewModels)
            if (string.IsNullOrEmpty(registerRequest.MiddleName))
            {
                registerRequest.MiddleName = "";
            }
            if (string.IsNullOrEmpty(registerRequest.Country))
            {
                registerRequest.Country = "";
            }


            var newUser = new User
            {
                Fullname = registerRequest.FirstName + registerRequest.MiddleName + registerRequest.LastName,
                FirstName = registerRequest.FirstName,
                MiddleName = registerRequest.MiddleName,
                LastName = registerRequest.LastName,
                Email = registerRequest.Email,
                Username = registerRequest.Username,
                Password = registerRequest.Password,
                Phone = registerRequest.Phone,
                Country = registerRequest.Country,
                Address = registerRequest.Address,
            };

            // add users in database
            _deathWishCoffeeDbContext.Users.Add(newUser);
            _deathWishCoffeeDbContext.SaveChanges();

            return View();
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
            Console.WriteLine("Delete User");

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
            Console.WriteLine("Edit user id: " + id);

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
            {
                registerRequest.MiddleName = "";
            }
            if (string.IsNullOrEmpty(registerRequest.Country))
            {
                registerRequest.Country = "";
            }

            // GET user in databse
            var userInDb = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id == id);

            // if userInDb doesn't exist
            if (userInDb != null)
            {
                // update
                userInDb.Fullname = registerRequest.FirstName + registerRequest.MiddleName + registerRequest.LastName;
                userInDb.FirstName = registerRequest.FirstName;
                userInDb.MiddleName = registerRequest.MiddleName;
                userInDb.LastName = registerRequest.LastName;
                userInDb.Email = registerRequest.Email;
                userInDb.Username = registerRequest.Username;
                userInDb.Password = registerRequest.Password;
                userInDb.Phone = registerRequest.Phone;
                userInDb.Country = registerRequest.Country;
                userInDb.Address = registerRequest.Address;

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
            var products = _deathWishCoffeeDbContext.Products.ToList();

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

            Console.WriteLine(form.Title);
            if (string.IsNullOrEmpty(form.Title))
            {
                form.Title = "";
            }

            Console.WriteLine(form.Subtitle);
            if (string.IsNullOrEmpty(form.Subtitle))
            {
                form.Subtitle = "";
            }

            Console.WriteLine(form.Description);
            if (string.IsNullOrEmpty(form.Description))
            {
                form.Description = "";
            }

            Console.WriteLine(form.SubscribeAndSave);
            if (string.IsNullOrEmpty(form.SubscribeAndSave))
            {
                form.SubscribeAndSave = "";
            }

            Console.WriteLine(form.Note);
            if (string.IsNullOrEmpty(form.Note))
            {
                form.Note = "";
            }

            Console.WriteLine(form.PrimaryColor);
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

            Console.WriteLine("Sizes:");
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
                    Console.WriteLine("Label: " + item.Label);
                    Console.WriteLine("Price: " + item.Price);
                    Console.WriteLine("Text: " + item.Text);

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

            Console.WriteLine("Flavor Profiles:");
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
                    Console.WriteLine("Label: " + item.Label);
                    Console.WriteLine("Text: " + item.Text);

                    var flavorProfileToAdd = new DeathWishCoffee.Models.Domain.FlavorProfile
                    {
                        ProductId = productId,
                        Label = item.Label.Trim(),
                        Text = item.Text.Trim()
                    };

                    _deathWishCoffeeDbContext.FlavorProfiles.Add(flavorProfileToAdd);
                }
            }

            Console.WriteLine("Details:");
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
                    Console.WriteLine("Label: " + item.Label);
                    Console.WriteLine("Text: " + item.Text);

                    var detailToAdd = new DeathWishCoffee.Models.Domain.Detail
                    {
                        ProductId = productId,
                        Label = item.Label.Trim(),
                        Text = item.Text.Trim()
                    };

                    _deathWishCoffeeDbContext.Details.Add(detailToAdd);

                }
            }

            Console.WriteLine("Types:");
            if (form.Types != null && form.Types.Count > 0)
            {
                foreach (var item in form.Types)
                {
                    if (string.IsNullOrEmpty(item.Text))
                    {
                        item.Text = "";
                    }
                    Console.WriteLine("Text: " + item.Text);

                    var typeToAdd = new DeathWishCoffee.Models.Domain.Type
                    {
                        ProductId = productId,
                        Text = item.Text.Trim(),
                    };

                    _deathWishCoffeeDbContext.Types.Add(typeToAdd);

                }
            }

            Console.WriteLine("Attributes:");
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
                    Console.WriteLine("Label: " + item.Label);
                    Console.WriteLine("MinLabel: " + item.MinLabel);
                    Console.WriteLine("MaxLabel: " + item.MaxLabel);
                    Console.WriteLine("Value: " + item.Value);

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

            Console.WriteLine("InsideTypes:");
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
                    Console.WriteLine("Label: " + item.Label);
                    Console.WriteLine("Icon: " + item.Icon);

                    var insideTypeToAdd = new DeathWishCoffee.Models.Domain.InsideType
                    {
                        ProductId = productId,
                        Label = item.Label.Trim(),
                        Icon = item.Icon.Trim(),
                    };

                    _deathWishCoffeeDbContext.InsideTypes.Add(insideTypeToAdd);
                }
            }

            Console.WriteLine("Symbols:");
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
                    Console.WriteLine("Title: " + item.Title);
                    Console.WriteLine("Icon: " + item.Icon);

                    var symbolToAdd = new DeathWishCoffee.Models.Domain.Symbol
                    {
                        ProductId = productId,
                        Title = item.Title.Trim(),
                        Icon = item.Icon.Trim(),
                    };

                    _deathWishCoffeeDbContext.Symbols.Add(symbolToAdd);
                }
            }

            Console.WriteLine("Formats:");
            if (form.Formats != null && form.Formats.Count > 0)
            {
                foreach (var item in form.Formats)
                {
                    if (string.IsNullOrEmpty(item.Text))
                    {
                        item.Text = "";
                    }
                    Console.WriteLine("Text: " + item.Text);

                    var formatToAdd = new DeathWishCoffee.Models.Domain.Format
                    {
                        ProductId = productId,
                        Text = item.Text.Trim(),
                    };

                    _deathWishCoffeeDbContext.Formats.Add(formatToAdd);
                }
            }

            Console.WriteLine("Roasts:");
            if (form.Roasts != null && form.Roasts.Count > 0)
            {
                foreach (var item in form.Roasts)
                {
                    if (string.IsNullOrEmpty(item.Text))
                    {
                        item.Text = "";
                    }
                    Console.WriteLine("Text: " + item.Text);

                    var roastToAdd = new DeathWishCoffee.Models.Domain.Roast
                    {
                        ProductId = productId,
                        Text = item.Text.Trim(),
                    };

                    _deathWishCoffeeDbContext.Roasts.Add(roastToAdd);
                }
            }

            Console.WriteLine("Flavors:");
            if (form.Flavors != null && form.Flavors.Count > 0)
            {
                foreach (var item in form.Flavors)
                {
                    if (string.IsNullOrEmpty(item.Text))
                    {
                        item.Text = "";
                    }
                    Console.WriteLine("Text: " + item.Text);

                    var flavorsToAdd = new DeathWishCoffee.Models.Domain.Flavor
                    {
                        ProductId = productId,
                        Text = item.Text.Trim(),
                    };

                    _deathWishCoffeeDbContext.Flavors.Add(flavorsToAdd);
                }
            }

            Console.WriteLine("Images:");
            if (imageList != null && imageList.Count > 0)
            {
                foreach (var imageFile in imageList)
                {
                    if (imageFile.Length > 0)
                    {
                        Console.WriteLine(imageFile.FileName);

                        // get path to save in server
                        var imagePath = Path.Combine("wwwroot", "uploads");
                        var imageName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
                        var fullPath = Path.Combine(Directory.GetCurrentDirectory(), imagePath, imageName);

                        Console.WriteLine("Full path: " + fullPath);

                        // save file to server (/wwwroot/uploads)
                        using (var stream = new FileStream(fullPath, FileMode.Create))
                        {
                            imageFile.CopyTo(stream);
                        }

                        var imageToAdd = new DeathWishCoffee.Models.Domain.Image
                        {
                            ProductId = productId,
                            Src = Path.Combine(imagePath, imageName)
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

            // assign to ViewBag to show in View
            ViewBag.product = product;

            return View();
        }

        [HttpPost]
        public IActionResult EditProduct(AddNewProductRequest addNewProductRequest, Guid id)
        {
            return RedirectToAction("AllProducts", "Admin");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}