using DeathWishCoffee.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<DeathWishCoffeeDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("azureDB")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

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

// [/admin]
app.MapControllerRoute(
    name: "Admin",
    pattern: "admin",
    defaults: new { controller = "Admin", action = "Index" }
);

// [/admin/login]
app.MapControllerRoute(
    name: "Login",
    pattern: "admin/login",
    defaults: new { controller = "Admin", action = "Login" }
);

// [/admin/register]
app.MapControllerRoute(
    name: "Register",
    pattern: "admin/register",
    defaults: new { controller = "Admin", action = "Register" }
);

// [/admin/users]
app.MapControllerRoute(
    name: "AllUser",
    pattern: "admin/users",
    defaults: new { controller = "Admin", action = "AllUsers" }
);

// [/admin/users/delete/{id}]
app.MapControllerRoute(
    name: "DeleteUser",
    pattern: "admin/users/delete/{id}",
    defaults: new { controller = "Admin", action = "DeleteUser" }
);

// [/admin/users/edit/{id}]
app.MapControllerRoute(
    name: "EditUser",
    pattern: "admin/users/edit/{id}",
    defaults: new { controller = "Admin", action = "EditUser" }
);

// [/admin/products]
app.MapControllerRoute(
    name: "AllProducts",
    pattern: "admin/products",
    defaults: new { controller = "Admin", action = "AllProducts" }
);

// [/admin/products/add]
app.MapControllerRoute(
    name: "AddNewProduct",
    pattern: "admin/products/add",
    defaults: new { controller = "Admin", action = "AddNewProduct" }
);

// [/admin/products/delete/{id}]
app.MapControllerRoute(
    name: "DeleteProduct",
    pattern: "admin/products/delete/{id}",
    defaults: new { controller = "Admin", action = "DeleteProduct" }
);

// [/admin/products/edit/{id}]
app.MapControllerRoute(
    name: "EditProduct",
    pattern: "admin/products/edit/{id}",
    defaults: new { controller = "Admin", action = "EditProduct" }
);

// [/admin/reviews]
app.MapControllerRoute(
    name: "AllReviews",
    pattern: "admin/reviews",
    defaults: new { controller = "Admin", action = "AllReviews" }
);

// [/admin/reviews/add/{productId}]
app.MapControllerRoute(
    name: "AddReviews",
    pattern: "admin/reviews/add/{productId}",
    defaults: new { controller = "Admin", action = "AddNewReview" }
);

// [/admin/reviews/edit/{id}]
app.MapControllerRoute(
    name: "EditReview",
    pattern: "admin/reviews/edit/{id}",
    defaults: new { controller = "Admin", action = "EditReview" }
);

// [/admin/reviews/delete/{id}]
app.MapControllerRoute(
    name: "DeleteReview",
    pattern: "admin/reviews/delete/{id}",
    defaults: new { controller = "Admin", action = "DeleteReview" }
);

// [/admin/orders]
app.MapControllerRoute(
    name: "AllOrders",
    pattern: "admin/orders",
    defaults: new { controller = "Admin", action = "AllOrders" }
);

// [/admin/orders/{userId}]
app.MapControllerRoute(
    name: "AllOrdersByUser",
    pattern: "admin/orders/{userId}",
    defaults: new { controller = "Admin", action = "AllOrdersByUser" }
);

// [/admin/orders/add/{userId}]
app.MapControllerRoute(
    name: "AddNewOrder",
    pattern: "admin/orders/add/{userId}",
    defaults: new { controller = "Admin", action = "AddNewOrder" }
);



// [/admin/orders/edit/{id}]
app.MapControllerRoute(
    name: "EditOrder",
    pattern: "admin/orders/edit/{id}",
    defaults: new { controller = "Admin", action = "EditOrder" }
);

// [/admin/orders/delete/{id}]
app.MapControllerRoute(
    name: "DeleteOrder",
    pattern: "admin/orders/delete/{id}",
    defaults: new { controller = "Admin", action = "DeleteOrder" }
);


// [/]
// app.MapControllerRoute(
//     name: "PageNotFound",
//     pattern: "/{*}",
//     defaults: new { controller = "Home", action = "PageNotFound" }
// );

// [/]
app.MapControllerRoute(
name: "default",
pattern: "{controller=Home}/{action=Index}/{id?}");



app.Run();

