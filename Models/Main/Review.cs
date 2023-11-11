using System;
using System.Collections.Generic;

namespace DeathWishCoffee.Models.Main;

public partial class Review
{
    public Guid Id { get; set; }

    public Guid ProductId { get; set; }

    public double Rating { get; set; }

    public string? Username { get; set; }

    public string? Title { get; set; }

    public string? Text { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime LastModifiedAt { get; set; }

    public virtual Product Product { get; set; } = null!;
}
