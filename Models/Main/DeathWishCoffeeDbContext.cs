using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DeathWishCoffee.Models.Main;

public partial class DeathWishCoffeeDbContext : DbContext
{
    public DeathWishCoffeeDbContext()
    {
    }

    public DeathWishCoffeeDbContext(DbContextOptions<DeathWishCoffeeDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Attribute> Attributes { get; set; }

    public virtual DbSet<CartItem> CartItems { get; set; }

    public virtual DbSet<Detail> Details { get; set; }

    public virtual DbSet<Flavor> Flavors { get; set; }

    public virtual DbSet<FlavorProfile> FlavorProfiles { get; set; }

    public virtual DbSet<Format> Formats { get; set; }

    public virtual DbSet<Image> Images { get; set; }

    public virtual DbSet<InsideType> InsideTypes { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<OrderDetail> OrderDetails { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Review> Reviews { get; set; }

    public virtual DbSet<Roast> Roasts { get; set; }

    public virtual DbSet<Size> Sizes { get; set; }

    public virtual DbSet<Symbol> Symbols { get; set; }

    public virtual DbSet<Type> Types { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=tcp:webhuflit.database.windows.net,1433;Initial Catalog=DeathHuflitCoffeeDB;Persist Security Info=False;User ID=huflitweb;Password=Huflit@123;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Attribute>(entity =>
        {
            entity.HasIndex(e => e.ProductId, "IX_Attributes_ProductId");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.Product).WithMany(p => p.Attributes).HasForeignKey(d => d.ProductId);
        });

        modelBuilder.Entity<CartItem>(entity =>
        {
            entity.HasIndex(e => e.ProductId, "IX_CartItems_ProductId");

            entity.HasIndex(e => e.UserId, "IX_CartItems_UserId");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.Product).WithMany(p => p.CartItems).HasForeignKey(d => d.ProductId);

            entity.HasOne(d => d.User).WithMany(p => p.CartItems).HasForeignKey(d => d.UserId);
        });

        modelBuilder.Entity<Detail>(entity =>
        {
            entity.HasIndex(e => e.ProductId, "IX_Details_ProductId");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.Product).WithMany(p => p.Details).HasForeignKey(d => d.ProductId);
        });

        modelBuilder.Entity<Flavor>(entity =>
        {
            entity.HasIndex(e => e.ProductId, "IX_Flavors_ProductId");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.Product).WithMany(p => p.Flavors).HasForeignKey(d => d.ProductId);
        });

        modelBuilder.Entity<FlavorProfile>(entity =>
        {
            entity.HasIndex(e => e.ProductId, "IX_FlavorProfiles_ProductId");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.Product).WithMany(p => p.FlavorProfiles).HasForeignKey(d => d.ProductId);
        });

        modelBuilder.Entity<Format>(entity =>
        {
            entity.HasIndex(e => e.ProductId, "IX_Formats_ProductId");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.Product).WithMany(p => p.Formats).HasForeignKey(d => d.ProductId);
        });

        modelBuilder.Entity<Image>(entity =>
        {
            entity.HasIndex(e => e.ProductId, "IX_Images_ProductId");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.Product).WithMany(p => p.Images).HasForeignKey(d => d.ProductId);
        });

        modelBuilder.Entity<InsideType>(entity =>
        {
            entity.HasIndex(e => e.ProductId, "IX_InsideTypes_ProductId");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.Product).WithMany(p => p.InsideTypes).HasForeignKey(d => d.ProductId);
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasIndex(e => e.ProductId, "IX_Orders_ProductId");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.Product).WithMany(p => p.Orders).HasForeignKey(d => d.ProductId);
        });

        modelBuilder.Entity<OrderDetail>(entity =>
        {
            entity.HasIndex(e => e.OrderId, "IX_OrderDetails_OrderId");

            entity.HasIndex(e => e.ProductId, "IX_OrderDetails_ProductId");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.Order).WithMany(p => p.OrderDetails).HasForeignKey(d => d.OrderId);

            entity.HasOne(d => d.Product).WithMany(p => p.OrderDetails).HasForeignKey(d => d.ProductId);
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.Property(e => e.Id).ValueGeneratedNever();
        });

        modelBuilder.Entity<Review>(entity =>
        {
            entity.HasIndex(e => e.ProductId, "IX_Reviews_ProductId");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.Product).WithMany(p => p.Reviews).HasForeignKey(d => d.ProductId);
        });

        modelBuilder.Entity<Roast>(entity =>
        {
            entity.HasIndex(e => e.ProductId, "IX_Roasts_ProductId");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.Product).WithMany(p => p.Roasts).HasForeignKey(d => d.ProductId);
        });

        modelBuilder.Entity<Size>(entity =>
        {
            entity.HasIndex(e => e.ProductId, "IX_Sizes_ProductId");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.Product).WithMany(p => p.Sizes).HasForeignKey(d => d.ProductId);
        });

        modelBuilder.Entity<Symbol>(entity =>
        {
            entity.HasIndex(e => e.ProductId, "IX_Symbols_ProductId");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.Product).WithMany(p => p.Symbols).HasForeignKey(d => d.ProductId);
        });

        modelBuilder.Entity<Type>(entity =>
        {
            entity.HasIndex(e => e.ProductId, "IX_Types_ProductId");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.Product).WithMany(p => p.Types).HasForeignKey(d => d.ProductId);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.Property(e => e.Id).ValueGeneratedNever();
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
