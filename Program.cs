var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

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

app.UseEndpoints(endpoints =>
{
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
});



app.Run();

