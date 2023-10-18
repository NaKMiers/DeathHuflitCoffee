
using DeathWishCoffee.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

        // [/admin/orders]
        [HttpGet]
        public IActionResult AllOrders()
        {
            Console.WriteLine("AllOrders");

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
            Console.WriteLine("AllOrdersByUser");

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
            Console.WriteLine("EditOrder");
            // get order from database
            var orderToEdit = _deathWishCoffeeDbContext.Orders.FirstOrDefault(o => o.Id == id);

            // if orderToEdit does NOT EXIST => BadRequets
            if (orderToEdit == null)
                return BadRequest("Order does not exist");

            ViewBag.Order = orderToEdit;

            return View("~/Views/Admin/EditOrder.cshtml");
        }

        // ERRORS
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}