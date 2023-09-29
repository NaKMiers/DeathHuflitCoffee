using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeathWishCoffee
{
    public class Review
    {
        public Guid Id { get; set; }
        public double Rating { get; set; }
        public string? Username { get; set; }
        public Guid ProductId { get; set; }
        public string? Title { get; set; }
        public string? Text { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastModifiedAt { get; set; }
    }
}