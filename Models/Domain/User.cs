namespace DeathWishCoffee.Models.Domain
{
    public class User
    {
        public Guid Id { get; set; }
        public string? Fullname { get; set; }
        public string? FirstName { get; set; }
        public string? MiddleName { get; set; }
        public string? LastName { get; set; }
        public string? Username { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? Phone { get; set; }
        public string? Country { get; set; }
        public string? Address { get; set; }

    }
}