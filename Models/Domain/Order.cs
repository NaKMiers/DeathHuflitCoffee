namespace DeathWishCoffee.Models.Domain
{
    public class Order
    {
        public Guid Id { get; set; }
        public string? UserId { get; set; }
        public double TotalAmount { get; set; }
        public string? Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastModifiedAt { get; set; }
    }
}