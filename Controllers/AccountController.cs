using DeathWishCoffee.Models;
using DeathWishCoffee.Models.Main;
using DeathWishCoffee.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Diagnostics;

// ten khong gian
namespace DeathWishCoffee.Controllers
{
    //Controller: Chịu trách nhiệm xử lý các yêu cầu từ người dùng, 
    //thực hiện logic xử lý, và cập nhật Model hoặc View tương ứng.
    public class AccountController : Controller
    {
        //readonly: sau khi trường đã nhận giá trị, giá trị đó không thể thay đổi trong suốt vòng đời của đối tượng.
        //dea1: tenlop
        //_dea1: ten truong
        private readonly DeathWishCoffeeDbContext _deathWishCoffeeDbContext;

        private readonly IHttpContextAccessor _httpContext;

        // constructor
        // khởi tạo 2 đối tượng và nhnaj giá trị trả về
        public AccountController(DeathWishCoffeeDbContext deathWishCoffeeDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _deathWishCoffeeDbContext = deathWishCoffeeDbContext;
            _httpContext = httpContextAccessor;
        }
        //Phương thức SetUpUserDataForAllPage có mục đích thiết lập dữ liệu người dùng vào Session của HttpContext. Session trong ASP.NET Core là một cơ chế lưu trữ tạm thời trên máy chủ, giúp lưu trữ thông tin liên quan đến phiên làm việc của người dùng.
        public void SetUpUserDataForAllPage(User user)
        {
            _httpContext.HttpContext.Session.SetString("Id", user.Id.ToString());
            _httpContext.HttpContext.Session.SetString("Username", user.Username);
            // _httpContext.HttpContext.Session.SetString("Avatar", user.Avatar);
        }

        //Phương thức SetUpCartDataForAllPage có mục đích thiết lập dữ liệu giỏ hàng (cart) của người dùng vào Session của HttpContext. 
        public void SetUpCartDataForAllPage(List<CartItem> cart)
        {
            string myCartCovertedToJson = JsonConvert.SerializeObject(cart);
            _httpContext.HttpContext.Session.SetString("Cart", myCartCovertedToJson);
        }
        //Phương thức GetRecommendProducts có mục đích lấy thông tin về sản phẩm được đề xuất (recommend products) từ cơ sở dữ liệu và lưu trữ nó vào Session của HttpContext. 

        public void GetRecommendProducts()
        {
            //: Sử dụng Include để chỉ định rằng các thuộc tính Images, Sizes, và InsideTypes của đối tượng Product cũng được load từ cơ sở dữ liệu.
            var recommendProducts = _deathWishCoffeeDbContext.Products
                                    .Include(p => p.Images)
                                    .Include(p => p.Sizes)
                                    .Include(p => p.InsideTypes)
                                    .Take(2)
                                    .ToList();

            //có mục đích chuyển đổi đối tượng recommendProducts (một danh sách các sản phẩm) thành một chuỗi JSON
            string rcmPrsJson = JsonConvert.SerializeObject(recommendProducts, new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });

            _httpContext.HttpContext.Session.SetString("recommendProducts", rcmPrsJson);
        }

        // [/account]
        [HttpGet]
        public IActionResult Index()
        {
            // Console.WriteLine("Account");
            string userId = _httpContext.HttpContext.Session.GetString("Id");

            // user is not login yet
            //là một điều kiện kiểm tra xem có giá trị "userId" trong Session không. Nếu giá trị này là null hoặc chuỗi rỗng, điều này có nghĩa là người dùng chưa đăng nhập hoặc phiên làm việc đã kết thúc.
            if (string.IsNullOrEmpty(userId))
                return RedirectToAction("Login", "Account");
            //có nhiệm vụ truy vấn cơ sở dữ liệu để lấy thông tin về người dùng (user) dựa trên giá trị của userId
            var user = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Id.ToString() == userId);

            // if user does NOT EXIST => BadRequest
            if (user == null)
                return BadRequest("User does not exist");

            return View(user);
        }

        // [/account/login]
        [HttpGet]

        public IActionResult Login()
        {
            // user is already login
            if (_httpContext.HttpContext.Session.GetString("Id") != null)
                //Nếu người dùng đã đăng nhập, phương thức chuyển hướng (redirect) đến action "Index" của controller "Account" bằng cách sử dụng RedirectToAction.
                return RedirectToAction("Index", "Account");

            // return View("~/Views/Admin/Login.cshtml");
            return View();
        }

        [HttpPost]
        public IActionResult Login(LoginRequest loginRequest)
        {
            // Console.WriteLine("Login");

            // check user if exist
            var user = _deathWishCoffeeDbContext.Users
                        .Include(u => u.CartItems)
                        .ThenInclude(cartItem => cartItem.Product)
                        .ThenInclude(product => product.Images)
                        .FirstOrDefault(u => u.Email == loginRequest.Email && u.Password == loginRequest.Password);

            // return bad request if user does NOT EXISTS
            // sai mk
            if (user == null)
                return BadRequest("Invalid email or password.");
            //để lấy và lưu trữ thông tin về sản phẩm được đề xuất vào Session.
            GetRecommendProducts();

            // set USER data to session
            SetUpUserDataForAllPage(user);

            // set CART data to session
            SetUpCartDataForAllPage(user.CartItems.ToList());

            return RedirectToAction("Index", "Home");
        }

        // [/account/logout]
        [HttpGet]
        //xử lí đăng xuất

        public IActionResult Logout()
        {
            _httpContext.HttpContext.Session.Clear();

            return RedirectToAction("Index", "Home");
        }

        // [/account/register]
        [HttpGet]
        public IActionResult Register()
        {
            // return View("~/Views/Admin/Register.cshtml");
            return View();
        }

        [HttpPost]
        public IActionResult Register(RegisterRequest form)
        {
            // Console.WriteLine("Register");

            // check if the user exists or not
            var existedUser = _deathWishCoffeeDbContext.Users.FirstOrDefault(u => u.Email == form.Email.Trim());
            if (existedUser != null)
                return BadRequest("User already exists");

            // create new user (Models.User) from RegisterRequest (ViewModels)
            if (string.IsNullOrEmpty(form.FirstName))
                form.FirstName = "";
            if (string.IsNullOrEmpty(form.MiddleName))
                form.MiddleName = "";
            if (string.IsNullOrEmpty(form.LastName))
                form.LastName = "";
            if (string.IsNullOrEmpty(form.Username))
                form.Username = "";
            if (string.IsNullOrEmpty(form.Password))
                form.Password = "";
            if (string.IsNullOrEmpty(form.Phone))
                form.Phone = "";
            if (string.IsNullOrEmpty(form.Country))
                form.Country = "";
            if (string.IsNullOrEmpty(form.Address))
                form.Address = "";

            // string avatarPath = "";
            // if (form.Avatar != null)
            // {

            //     // get path to save in server
            //     var imagePath = Path.Combine("wwwroot", "uploads");
            //     var imageName = Guid.NewGuid().ToString() + Path.GetExtension(form.Avatar.FileName);
            //     var fullPath = Path.Combine(Directory.GetCurrentDirectory(), imagePath, imageName);
            //     avatarPath = Path.Combine(imageName);
            //     // save file to server (/wwwroot/uploads)
            //     using var stream = new FileStream(fullPath, FileMode.Create);
            //     form.Avatar.CopyTo(stream);
            // }

            var newUser = new User
            {
                Id = Guid.NewGuid(),
                Fullname = form.FirstName.Trim() + " " + form.MiddleName.Trim() + " " + form.LastName.Trim(),
                FirstName = form.FirstName.Trim(),
                MiddleName = form.MiddleName.Trim(),
                LastName = form.LastName.Trim(),
                Email = form.Email.Trim(),
                Username = form.Username.Trim(),
                Password = form.Password.Trim(),
                Phone = form.Phone.Trim(),
                Country = form.Country.Trim(),
                Address = form.Address.Trim(),
                // Avatar = avatarPath,
            };

            // add users in database
            _deathWishCoffeeDbContext.Users.Add(newUser);
            _deathWishCoffeeDbContext.SaveChanges();

            var registedUser = _deathWishCoffeeDbContext.Users
                        .Include(u => u.CartItems)
                        .ThenInclude(cartItem => cartItem.Product)
                        .ThenInclude(product => product.Images)
                        .FirstOrDefault(u => u.Email == form.Email && u.Password == form.Password);

            // clear all session before update again
            // _httpContext.HttpContext.Session.Clear();
            GetRecommendProducts();
            // set USER data to session
            SetUpUserDataForAllPage(registedUser);
            // set CART data to session
            SetUpCartDataForAllPage(registedUser.CartItems.ToList());

            return RedirectToAction("Index", "Home");
        }

        // [/account/forget-password]
        public IActionResult ForgetPassword()
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