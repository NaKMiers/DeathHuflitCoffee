using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeathWishCoffee.Models.ViewModels
{
    public class AddNewProductRequest
    {
        public string? Title { get; set; }
        public string? Subtitle { get; set; }
        public string? Description { get; set; }
        public string? SubscribeAndSave { get; set; }
        public string? Note { get; set; }
        public List<Size>? Sizes { get; set; }
        public List<InsideType>? InsideTypes { get; set; }
        public List<FlavorProfile>? FlavorProfiles { get; set; }
        public List<Attribute>? Attributes { get; set; }
        public List<Detail>? Details { get; set; }
        public string? PrimaryColor { get; set; }
        public List<Image>? Images { get; set; }
        public double Rating { get; set; }
        public List<Type>? Types { get; set; }
        public List<Format>? Formats { get; set; }
        public List<Roast>? Roasts { get; set; }
        public List<Flavor>? Flavors { get; set; }
        public int NumberOfReview { get; set; }
        public int AmountSold { get; set; }
        public int Remain { get; set; }
        public List<Symbol>? Symbols { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastModifiedAt { get; set; }
    }

    public class FlavorProfile
    {
        public string? Label { get; set; }
        public string? Text { get; set; }
    }

    public class Image
    {
        public string? Src { get; set; }
    }

    public class Type
    {
        public string? Text { get; set; }
    }

    public class Format
    {
        public string? Text { get; set; }
    }

    public class Roast
    {
        public string? Text { get; set; }
    }
    public class Flavor
    {
        public string? Text { get; set; }
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
        public string? Title { get; set; }
        public string? Icon { get; set; }
    }
}