namespace DeathWishCoffee.Models.Domain
{
    public class OrderHistory
    {
        public Guid Id { get; set; }
        public DateTime OrderDate { get; set; }
        public string CustomerId { get; set; }
        public decimal TotalAmount { get; set; }
        public string Status { get; set; }
        public ICollection<Product> Products { get; set; }
    }
}