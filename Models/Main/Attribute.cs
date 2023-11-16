using System;
using System.Collections.Generic;

namespace DeathWishCoffee.Models.Main;

public partial class Attribute
{
    public Guid Id { get; set; }

    public Guid ProductId { get; set; }

    public string? Label { get; set; }

    public string? MinLabel { get; set; }

    public string? MaxLabel { get; set; }

    public int Value { get; set; }

    public virtual Product Product { get; set; } = null!;
}

