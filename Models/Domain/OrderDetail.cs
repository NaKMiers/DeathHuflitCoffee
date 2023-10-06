namespace DeathWishCoffee.Models.Domain
{
    public class OrderDetail
    {
        public Guid Id { get; set; }
        public Guid OrderId { get; set; }
        public Guid ProductId { get; set; }
        public int Quantity { get; set; }
        public Size? Size { get; set; }
        public InsideType? InsideType { get; set; }

        // 

        public Order? Order { get; set; }
        public Product? Product { get; set; }
    }
}