using System;
using System.Collections.Generic;

namespace DeathWishCoffee.Models.Main;

public partial class Symbol
{
    public Guid Id { get; set; }

    public Guid ProductId { get; set; }

    public string? Icon { get; set; }

    public string? Title { get; set; }

    public virtual Product Product { get; set; } = null!;
}
