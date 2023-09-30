namespace DeathWishCoffee.Models.Domain
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string SubTitle { get; set; }
        public string Description { get; set; }
        public string SubscribeAndSave { get; set; }
        public string Note { get; set; }
        public List<Sizes> Sizes { get; set; }
        public List<InsideTypes> InsideTypes { get; set; }
        public List<FlavorProfiles> FlavorProfiles { get; set; }
        public List<Attributes> Attributes { get; set; }
        public List<Details> Details { get; set; }
        public string PrimaryColor { get; set; }
        public List<Images> Images { get; set; }
        public double Rating { get; set; }
        public List<Types> Types { get; set; }
        public List<Formats> Formats { get; set; }
        public List<Roasts> Roasts { get; set; }
        public List<Flavors> Flavors { get; set; }
        public int NumberOfReview { get; set; }
        public int AmountSold { get; set; }
        public List<Symbols> Symbols { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastModifiedAt { get; set; }

        // foreign key
        public ICollection<Review> Reviews { get; set; }
    }

    public class FlavorProfiles
    {
        public int Id { get; set; }
        public string Text { get; set; }
    }

    public class Images
    {
        public int Id { get; set; }
        public string Src { get; set; }
    }

    public class Types
    {
        public int Id { get; set; }
        public string Text { get; set; }
    }

    public class Formats
    {
        public int Id { get; set; }
        public string Text { get; set; }
    }

    public class Roasts
    {
        public int Id { get; set; }
        public string Text { get; set; }
    }
    public class Flavors
    {
        public int Id { get; set; }
        public string Text { get; set; }
    }

    public class Sizes
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public double Price { get; set; }
        public string Text { get; set; }
    }

    public class InsideTypes
    {
        public int Id { get; set; }
        public string Icon { get; set; }
        public string Label { get; set; }
    }

    public class Attributes
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public string MinLabel { get; set; }
        public string MaxLabel { get; set; }
        public int Value { get; set; }
    }
    public class Details
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public string Text { get; set; }
    }

    public class Symbols
    {
        public int Id { get; set; }
        public string Icon { get; set; }
        public string Title { get; set; }
    }
}


