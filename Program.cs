using DeathWishCoffee.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<DeathWishCoffeeDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("localDB"));
    options.EnableSensitiveDataLogging(false);
}
);

// config sesstion
builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(120);
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

// use Session Middleware
app.UseSession();

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

// [/subscription]
app.MapControllerRoute(
    name: "Subscription",
    pattern: "subscription",
    defaults: new { controller = "Subscription", action = "Index" }
);

// [/collections]
app.MapControllerRoute(
    name: "Collections",
    pattern: "collections",
    defaults: new { controller = "Collections", action = "Index" }
);

// [/collections/coffee]
app.MapControllerRoute(
    name: "Coffee",
    pattern: "collections/coffee",
    defaults: new { controller = "Collections", action = "Coffee" }
);

// [/collections/merch]
app.MapControllerRoute(
    name: "Merch",
    pattern: "collections/merch",
    defaults: new { controller = "Collections", action = "Merch" }
);

// [/storelocator]
app.MapControllerRoute(
    name: "StoreLocator",
    pattern: "storelocator",
    defaults: new { controller = "StoreLocator", action = "Index" }
);

// [/the-void]
app.MapControllerRoute(
    name: "TheVoid",
    pattern: "the-void",
    defaults: new { controller = "TheVoid", action = "Index" }
);

// [/about]
app.MapControllerRoute(
    name: "About",
    pattern: "about",
    defaults: new { controller = "About", action = "Index" }
);

// [/account]
app.MapControllerRoute(
    name: "Account",
    pattern: "account",
    defaults: new { controller = "Account", action = "Index" }
);

// [/account/login]
app.MapControllerRoute(
    name: "Login",
    pattern: "account/login",
    defaults: new { controller = "Account", action = "Login" }
);

// [/account/register]
app.MapControllerRoute(
    name: "Register",
    pattern: "account/register",
    defaults: new { controller = "Account", action = "Register" }
);

// [/account/reset-password]
app.MapControllerRoute(
    name: "ResetPassword",
    pattern: "account/reset-password",
    defaults: new { controller = "Account", action = "ResetPassword" }
);

// [/products/{id}]
app.MapControllerRoute(
    name: "Product",
    pattern: "products/{id}",
    defaults: new { controller = "Product", action = "Index" }
);

// [/blogs/{id}]
app.MapControllerRoute(
    name: "Blog",
    pattern: "blogs/{id}",
    defaults: new { controller = "Blog", action = "Index" }
);

// [/checkouts/{userId}]
app.MapControllerRoute(
    name: "Checkout",
    pattern: "checkouts/{userId}",
    defaults: new { controller = "Checkout", action = "Index" }
);

// [/admin]
app.MapControllerRoute(
    name: "Admin",
    pattern: "admin",
    defaults: new { controller = "Admin", action = "Index" }
);

// [/admin/users]
app.MapControllerRoute(
    name: "AllUser",
    pattern: "admin/users",
    defaults: new { controller = "User", action = "Index" }
);

// [/admin/users/delete/{id}]
app.MapControllerRoute(
    name: "DeleteUser",
    pattern: "admin/users/delete/{id}",
    defaults: new { controller = "User", action = "DeleteUser" }
);

// [/admin/users/edit/{id}]
app.MapControllerRoute(
    name: "EditUser",
pattern: "admin/users/edit/{id}",
    defaults: new { controller = "User", action = "EditUser" }
);

// [/admin/products]
app.MapControllerRoute(
    name: "AllProducts",
    pattern: "admin/products",
    defaults: new { controller = "Product", action = "AllProducts" }
);

// [/admin/products/add]
app.MapControllerRoute(
    name: "AddNewProduct",
    pattern: "admin/products/add",
    defaults: new { controller = "Product", action = "AddNewProduct" }
);

// [/admin/products/delete/{id}]
app.MapControllerRoute(
    name: "DeleteProduct",
    pattern: "admin/products/delete/{id}",
    defaults: new { controller = "Product", action = "DeleteProduct" }
);

// [/admin/products/edit/{id}]
app.MapControllerRoute(
    name: "EditProduct",
    pattern: "admin/products/edit/{id}",
    defaults: new { controller = "Product", action = "EditProduct" }
);

// [/admin/reviews]
app.MapControllerRoute(
    name: "AllReviews",
    pattern: "admin/reviews",
    defaults: new { controller = "Review", action = "Index" }
);

// [/admin/reviews/add/{productId}]
app.MapControllerRoute(
    name: "AddReviews",
    pattern: "admin/reviews/add/{productId}",
    defaults: new { controller = "Review", action = "AddNewReview" }
);

// [/admin/reviews/edit/{id}]
app.MapControllerRoute(
    name: "EditReview",
    pattern: "admin/reviews/edit/{id}",
    defaults: new { controller = "Review", action = "EditReview" }
);

// [/admin/reviews/delete/{id}]
app.MapControllerRoute(
    name: "DeleteReview",
    pattern: "admin/reviews/delete/{id}",
    defaults: new { controller = "Review", action = "DeleteReview" }
);

// [/admin/cart/{userId}]
app.MapControllerRoute(
    name: "Cart",
    pattern: "admin/cart/{userId}",
    defaults: new { controller = "Cart", action = "MyCart" }
);

// [/admin/cart/add/{userId}]
app.MapControllerRoute(
    name: "AddToCart",
    pattern: "/admin/cart/add/{userId}",
    defaults: new { controller = "Cart", action = "AddToCart" }
);

// [/admin/cart/delete/{cartItemId}]
app.MapControllerRoute(
    name: "AddToCart",
    pattern: "/admin/cart/delete/{cartItemId}",
    defaults: new { controller = "Cart", action = "DeleteCartItem" }
);

// [/admin/cart/increase/{cartItemId}]
app.MapControllerRoute(
    name: "IncreaseCartItemQuantity",
    pattern: "/admin/cart/increase/{cartItemId}",
    defaults: new { controller = "Cart", action = "IncreaseCartItemQuantity" }
);

// [/admin/cart/decrease/{cartItemId}]
app.MapControllerRoute(
    name: "DecreaseCartItemQuantity",
    pattern: "/admin/cart/decrease/{cartItemId}",
    defaults: new { controller = "Cart", action = "DecreaseCartItemQuantity" }
);

// [/admin/orders]
app.MapControllerRoute(
    name: "AllOrders",
    pattern: "/admin/orders",
    defaults: new { controller = "Order", action = "AllOrders" }
);

// [/admin/orders/{userId}]
app.MapControllerRoute(
    name: "AllOrdersByUser",
    pattern: "/admin/orders/{userId}",
    defaults: new { controller = "Order", action = "AllOrdersByUser" }
);

// [/admin/orders/detail/{id}]
app.MapControllerRoute(
    name: "AllOrdersByUser",
    pattern: "/admin/orders/detail/{id}",
    defaults: new { controller = "Order", action = "OrderDetail" }
);

// [/admin/orders/delete/{id}]
app.MapControllerRoute(
    name: "DeleteOrder",
    pattern: "/admin/orders/delete/{id}",
    defaults: new { controller = "Order", action = "DeleteOrder" }
);

// [/admin/orders/edit/{id}]
app.MapControllerRoute(
    name: "EditOrder",
    pattern: "/admin/orders/edit/{id}",
    defaults: new { controller = "Order", action = "EditOrder" }
);

// [/]
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"
);

// [/]
app.MapControllerRoute(
    name: "PageNotFound",
    pattern: "{*url}",
    defaults: new { controller = "Home", action = "PageNotFound" }
);

// RUN
app.Run();

