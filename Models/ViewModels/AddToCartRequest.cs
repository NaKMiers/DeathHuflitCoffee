namespace DeathWishCoffee.Models.ViewModels
{
    public class AddToCartRequest
    {
        public Guid Id { get; set; }
        public Guid ProductId { get; set; }
        public int Quantity { get; set; }
        public string? Size { get; set; }
        public double Price { get; set; }
        public string? InsideType { get; set; }
    }
}