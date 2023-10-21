namespace DeathWishCoffee.Models.Domain
{
   public class OrderDetail
   {
      public Guid Id { get; set; }
      public Guid OrderId { get; set; }
      public Order? Order { get; set; }
      public Product? Product { get; set; }
      public int Quantity { get; set; }
      public string? Size { get; set; }
      public double Price { get; set; }
      public string? InsideType { get; set; }
      public DateTime CreatedAt { get; set; }
      public DateTime LastModifiedAt { get; set; }
   }
}