namespace DeathWishCoffee.Models.Domain
{
    public class OrderHistory
    {
        public Guid Id { get; set; }
        public Guid ProductId { get; set; }
        public DateTime OrderDate { get; set; }
        public string? CustomerId { get; set; }
        public double TotalAmount { get; set; }
        public string? Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastModifiedAt { get; set; }
    }
}