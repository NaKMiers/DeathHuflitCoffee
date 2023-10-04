namespace DeathWishCoffee.Models.Domain
{
    public class Review
    {
        public Guid Id { get; set; }
        public Guid ProductId { get; set; }
        public double Rating { get; set; }
        public string? Username { get; set; }
        public string? Title { get; set; }
        public string? Text { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastModifiedAt { get; set; }
    }
}