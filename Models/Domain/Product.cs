using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;

namespace DeathWishCoffee.Models.Domain
{
    public class Product
    {
        public Guid Id { get; set; }
        public string? Title { get; set; }
        public string? SubTitle { get; set; }
        public string? Description { get; set; }
        public string? SubscribeAndSave { get; set; }
        public string? Note { get; set; }
        public List<Size>? Sizes { get; set; }
        public List<InsideType>? InsideTypes { get; set; }
        public string[]? FlavorProfiles { get; set; }
        public List<Attribute>? Attributes { get; set; }
        public List<Detail>? Details { get; set; }
        public string? PrimaryColor { get; set; }
        public string[]? Images { get; set; }
        public double Rating { get; set; }
        public string[]? Types { get; set; }
        public string[]? Formats { get; set; }
        public string[]? Roasts { get; set; }
        public string[]? Flavors { get; set; }
        public int AmountSold { get; set; }
        public List<Symbol>? Symbols { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastModifiedAt { get; set; }

        public ICollection<Review>? Reviews { get; set; }
    }

    public class Size
    {
        public string? Label { get; set; }
        public double Price { get; set; }
        public string? Text { get; set; }
    }

    public class InsideType
    {
        public string? Icon { get; set; }
        public string? Label { get; set; }
    }

    public class Attribute
    {
        public string? Label { get; set; }
        public string? MinLabel { get; set; }
        public string? MaxLabel { get; set; }
        public int Value { get; set; }
    }
    public class Detail
    {
        public string? Label { get; set; }
        public string? Text { get; set; }
    }

    public class Symbol
    {
        public string? Icon { get; set; }
        public string? Title { get; set; }
    }


}


