using DeathWishCoffee.Data;
using Microsoft.AspNetCore.Http.HttpResults;

namespace DeathWishCoffee.Middlewares
{
    public class AuthenticationMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly DeathWishCoffeeDbContext _deathWishCoffeeDbContext;
        private readonly IHttpContextAccessor _httpContext;

        public AuthenticationMiddleware(RequestDelegate next)
        {
            _next = next;
        }



    }
}