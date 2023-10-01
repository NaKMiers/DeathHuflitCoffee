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

      public DbSet<FlavorProfile> FlavorProfiles { get; set; }
      public DbSet<Image> Images { get; set; }
      public DbSet<DeathWishCoffee.Models.Domain.Type> Types { get; set; }
      public DbSet<Format> Formats { get; set; }
      public DbSet<Roast> Roasts { get; set; }
      public DbSet<Flavor> Flavors { get; set; }
      public DbSet<Size> Sizes { get; set; }
      public DbSet<InsideType> InsideTypes { get; set; }
      public DbSet<DeathWishCoffee.Models.Domain.Attribute> Attributes { get; set; }
      public DbSet<Detail> Details { get; set; }
      public DbSet<Symbol> Symbols { get; set; }
   }
}