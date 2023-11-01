using System;
using System.Collections.Generic;

namespace DeathWishCoffee.Models.Main;

public partial class Image
{
    public Guid Id { get; set; }

    public Guid ProductId { get; set; }

    public string? Src { get; set; }

    public virtual Product Product { get; set; } = null!;
}
