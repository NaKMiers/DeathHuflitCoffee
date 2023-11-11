using System;
using System.Collections.Generic;

namespace DeathWishCoffee.Models.Main;

public partial class OrderDetail
{
    public Guid Id { get; set; }

    public Guid OrderId { get; set; }

    public Guid? ProductId { get; set; }

    public int Quantity { get; set; }

    public string? Size { get; set; }

    public double Price { get; set; }

    public string? InsideType { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime LastModifiedAt { get; set; }

    public virtual Order Order { get; set; } = null!;

    public virtual Product? Product { get; set; }
}
