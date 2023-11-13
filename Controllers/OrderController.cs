
using DeathWishCoffee.Models.Main;
using DeathWishCoffee.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;

namespace DeathWishCoffee.Controllers
{
    public class OrderController : Controller
    {
        private readonly DeathWishCoffeeDbContext _deathWishCoffeeDbContext;
        private readonly IHttpContextAccessor _httpContext;

        // constructor
        public OrderController(DeathWishCoffeeDbContext deathWishCoffeeDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _deathWishCoffeeDbContext = deathWishCoffeeDbContext;
            _httpContext = httpContextAccessor;
        }

        // [/user/]

        // [/admin/orders]
        [HttpGet]
        public IActionResult AllOrders()
        {
            // Console.WriteLine("AllOrders");
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

            // get all orders from database
            var orders = _deathWishCoffeeDbContext.Orders
                        .Include(o => o.OrderDetails)
                        .ThenInclude(oD => oD.Product)
                        .ToList();

            // if order does NOT EXIST => BadRequest
            if (orders == null)
                return BadRequest("Orders do not exist");

            return View("~/Views/Admin/AllOrders.cshtml", orders);
        }

        // [/admin/orders/{userId}]
        [HttpGet]
        public IActionResult AllOrdersByUser(Guid userId)
        {
            // Console.WriteLine("AllOrdersByUser");

            // get all orders by userId from database
            var orders = _deathWishCoffeeDbContext.Orders
                        .Where(o => o.UserId == userId)
                        .Include(o => o.OrderDetails)
                        .ThenInclude(oD => oD.Product)
                        .ToList();

            // if orders does NOT EXIST => BadRequest
            if (orders == null)
                return BadRequest("Orders do not exists");

            ViewBag.UserId = userId;

            return View("~/Views/Admin/AllOrdersByUser.cshtml", orders);
        }

        // [/admin/orders/detail/{id}]
        public IActionResult OrderDetail(Guid id)
        {

            // get order from database
            var order = _deathWishCoffeeDbContext.Orders
                        .Include(o => o.OrderDetails)
                        .ThenInclude(oD => oD.Product)
                        .ThenInclude(p => p.Images)
                        .FirstOrDefault(o => o.Id == id);

            // if orderDeatail does NOT EXIST => BadRequets
            if (order == null)
                return BadRequest("Order detail does not exist");

            return View("~/Views/Admin/OrderDetail.cshtml", order);
        }

        // [/admin/orders/delete/{id}]
        public IActionResult DeleteOrder(Guid id)
        {
            // get order from database
            var orderToDelete = _deathWishCoffeeDbContext.Orders.FirstOrDefault(o => o.Id == id);

            // if user does NOT EXIST => BadRequest
            if (orderToDelete == null)
                return BadRequest("Order does not exists");

            // Get all OrderDetails of orderToDelete
            var orderDetailsToDelete = _deathWishCoffeeDbContext.OrderDetails
                                        .Where(od => od.OrderId == orderToDelete.Id);

            // Remove order itself and it's orderDetails
            _deathWishCoffeeDbContext.OrderDetails.RemoveRange(orderDetailsToDelete);
            _deathWishCoffeeDbContext.Orders.Remove(orderToDelete);

            // Save changes to the database
            _deathWishCoffeeDbContext.SaveChanges();

            // after deleted, return to [/admin/orders]
            return RedirectToAction("AllOrders", "Order");
        }

        // [/admin/orders/edit/{id}]
        [HttpGet]
        public IActionResult EditOrder(Guid id)
        {
            // Console.WriteLine("EditOrder");
            // get order from database
            var orderToEdit = _deathWishCoffeeDbContext.Orders.FirstOrDefault(o => o.Id == id);

            // if orderToEdit does NOT EXIST => BadRequets
            if (orderToEdit == null)
                return BadRequest("Order does not exist");

            ViewBag.Order = orderToEdit;

            return View("~/Views/Admin/EditOrder.cshtml");
        }

        [HttpPost]
        public IActionResult EditOrder(EditOrderRequest form, Guid id)
        {
            // Console.WriteLine("EditOrder");

            var orderToEditInDB = _deathWishCoffeeDbContext.Orders.FirstOrDefault(o => o.Id == id);
            // if orderToEdit does NOT EXIST => BadRequest
            if (orderToEditInDB == null)
                return BadRequest("Order does not exist");

            // Console.WriteLine(form.Email);
            if (string.IsNullOrEmpty(form.Email))
                form.Email = "";
            // Console.WriteLine(form.Country);
            if (string.IsNullOrEmpty(form.Country))
                form.Country = "";
            // Console.WriteLine(form.Firstname);
            if (string.IsNullOrEmpty(form.Firstname))
                form.Firstname = "";
            // Console.WriteLine(form.Lastname);
            if (string.IsNullOrEmpty(form.Lastname))
                form.Lastname = "";
            // Console.WriteLine(form.Company);
            if (string.IsNullOrEmpty(form.Company))
                form.Company = "";
            // Console.WriteLine(form.Address);
            if (string.IsNullOrEmpty(form.Address))
                form.Address = "";
            // Console.WriteLine(form.Apartment);
            if (string.IsNullOrEmpty(form.Apartment))
                form.Apartment = "";
            // Console.WriteLine(form.City);
            if (string.IsNullOrEmpty(form.City))
                form.City = "";
            // Console.WriteLine(form.PostalCode);
            if (string.IsNullOrEmpty(form.PostalCode))
                form.PostalCode = "";
            // Console.WriteLine(form.Phone);
            if (string.IsNullOrEmpty(form.Phone))
                form.Phone = "";
            // Console.WriteLine(form.TotalAmount);

            // update ORDER
            orderToEditInDB.Status = "Active";
            orderToEditInDB.Email = form.Email.Trim();
            orderToEditInDB.Country = form.Country.Trim();
            orderToEditInDB.Firstname = form.Firstname.Trim();
            orderToEditInDB.Lastname = form.Lastname.Trim();
            orderToEditInDB.Company = form.Company.Trim();
            orderToEditInDB.Address = form.Address.Trim();
            orderToEditInDB.Apartment = form.Apartment.Trim();
            orderToEditInDB.City = form.City.Trim();
            orderToEditInDB.PostalCode = form.PostalCode.Trim();
            orderToEditInDB.Phone = form.Phone.Trim();
            orderToEditInDB.LastModifiedAt = DateTime.Now;

            // save update order to database
            _deathWishCoffeeDbContext.SaveChanges();

            return RedirectToAction("AllOrders", "Order");
        }

        // ERRORS
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}