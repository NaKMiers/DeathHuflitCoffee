using DeathWishCoffee.Models.Main;
using DeathWishCoffee.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace DeathWishCoffee.Controllers
{
    public class ReviewController : Controller
    {

        private readonly DeathWishCoffeeDbContext _deathWishCoffeeDbContext;
        private readonly IHttpContextAccessor _httpContext;

        // constructor
        public ReviewController(DeathWishCoffeeDbContext deathWishCoffeeDbContext, IHttpContextAccessor httpContextAccessor)
        {
            _deathWishCoffeeDbContext = deathWishCoffeeDbContext;
            _httpContext = httpContextAccessor;
        }

        // [/admin/reviews]
        [HttpGet]
        public IActionResult Index()
        {
            var reviews = _deathWishCoffeeDbContext.Reviews.ToList();

            return View("~/Views/Admin/AllReviews.cshtml", reviews);
        }

        // [/admin/reviews/add/{productId}]
        [HttpGet]
        public IActionResult AddNewReview()
        {
            return View("~/Views/Admin/AddNewReview.cshtml");
        }

        [HttpPost]
        public IActionResult AddNewReview(AddNewReviewRequest form, Guid productId)
        {
            // Console.WriteLine("AddNewReview");

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
            var newReview = new Models.Main.Review
            {
                ProductId = productId,
                Title = form.Title,
                Text = form.Text,
                CreatedAt = DateTime.Now,
            };

            _deathWishCoffeeDbContext.Reviews.Add(newReview);
            _deathWishCoffeeDbContext.SaveChanges();

            return RedirectToAction("Index", "Review");
        }

        // [/admin/reviews/delete/{id}]
        public IActionResult DeleteReview(Guid id)
        {
            // Console.WriteLine("DeleteReivew");

            // get review to delete from reviewId
            var reviewToDelete = _deathWishCoffeeDbContext.Reviews.FirstOrDefault(r => r.Id == id);

            // if review is EXIST => DELETE
            if (reviewToDelete != null)
            {
                _deathWishCoffeeDbContext.Reviews.Remove(reviewToDelete);
                _deathWishCoffeeDbContext.SaveChanges();
            }

            // redirect to all reviews
            return RedirectToAction("Index", "Review");
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

            return View("~/Views/Admin/EditReview.cshtml");
        }

        [HttpPost]
        public IActionResult EditReview(AddNewReviewRequest form, Guid id)
        {
            // Console.WriteLine("EditReview");

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

            return RedirectToAction("Index", "Review");
        }

        // ERRORS
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}