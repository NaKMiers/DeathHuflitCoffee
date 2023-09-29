using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeathWishCoffee.Models.Domain
{
    public class User
    {
        public Guid Id { get; set; }
        public string? Fullname { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Country { get; set; }
        public string? Address { get; set; }
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public ICollection<Product> Carts { get; set; }
        public ICollection<OrderHistory> OrdersHistory { get; set; }
    }
}