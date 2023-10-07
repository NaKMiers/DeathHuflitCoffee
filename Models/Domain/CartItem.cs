using System.ComponentModel.DataAnnotations;

namespace DeathWishCoffee.Models.Domain
{
    public class CartItem
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid ProductId { get; set; }
        public int Quantity { get; set; }
        public string? Size { get; set; }
        public string? InsideType { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastModifiedAt { get; set; }

        public Product? Product { get; set; }
    }
}