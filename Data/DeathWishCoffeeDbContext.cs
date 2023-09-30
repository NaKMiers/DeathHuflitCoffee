using DeathWishCoffee.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace DeathWishCoffee.Data
{
   public class DeathWishCoffeeDbContext : DbContext
   {
      public DeathWishCoffeeDbContext(DbContextOptions options) : base(options)
      {

      }

      public DbSet<Product> Products { get; set; }
      public DbSet<Review> Reviews { get; set; }
      public DbSet<OrderHistory> OrdersHistory { get; set; }
      public DbSet<User> Users { get; set; }
   }
}
