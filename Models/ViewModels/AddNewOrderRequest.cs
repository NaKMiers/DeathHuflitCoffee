namespace DeathWishCoffee.Models.ViewModels
{
    public class AddNewOrderRequest
    {
        public Guid Id { get; set; }
        public Guid? UserId { get; set; }
        public double TotalAmount { get; set; }
        public string? Status { get; set; }
        public string? Email { get; set; }
        public string? Country { get; set; }
        public string? Firstname { get; set; }
        public string? Lastname { get; set; }
        public string? Company { get; set; }
        public string? Address { get; set; }
        public string? Apartment { get; set; }
        public string? City { get; set; }
        public string? PostalCode { get; set; }
        public string? Phone { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastModifiedAt { get; set; }

        public List<Guid>? CartIds { get; set; }
    }
}