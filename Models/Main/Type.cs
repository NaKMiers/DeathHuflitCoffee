﻿using System;
using System.Collections.Generic;

namespace DeathWishCoffee.Models.Main;

public partial class Type
{
    public Guid Id { get; set; }

    public Guid ProductId { get; set; }

    public string? Text { get; set; }

    public virtual Product Product { get; set; } = null!;
}
