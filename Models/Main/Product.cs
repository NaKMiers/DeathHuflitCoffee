using System;
using System.Collections.Generic;

namespace DeathWishCoffee.Models.Main;

public partial class Product
{
    public Guid Id { get; set; }

    public string? Title { get; set; }

    public string? Subtitle { get; set; }

    public string? Description { get; set; }

    public string? SubscribeAndSave { get; set; }

    public string? Note { get; set; }

    public string? PrimaryColor { get; set; }

    public double Rating { get; set; }

    public int NumberOfReview { get; set; }

    public int AmountSold { get; set; }

    public int Remain { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime LastModifiedAt { get; set; }

    public virtual ICollection<Attribute> Attributes { get; set; } = new List<Attribute>();

    public virtual ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();

    public virtual ICollection<Detail> Details { get; set; } = new List<Detail>();

    public virtual ICollection<FlavorProfile> FlavorProfiles { get; set; } = new List<FlavorProfile>();

    public virtual ICollection<Flavor> Flavors { get; set; } = new List<Flavor>();

    public virtual ICollection<Format> Formats { get; set; } = new List<Format>();

    public virtual ICollection<Image> Images { get; set; } = new List<Image>();

    public virtual ICollection<InsideType> InsideTypes { get; set; } = new List<InsideType>();

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    public virtual ICollection<Roast> Roasts { get; set; } = new List<Roast>();

    public virtual ICollection<Size> Sizes { get; set; } = new List<Size>();

    public virtual ICollection<Symbol> Symbols { get; set; } = new List<Symbol>();

    public virtual ICollection<Type> Types { get; set; } = new List<Type>();
}
