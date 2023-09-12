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
        name: "subscription",
        pattern: "subscription",
        defaults: new { controller = "Subscription", action = "Index" }
    );

    // [/collections]
    app.MapControllerRoute(
        name: "collections",
        pattern: "collections",
        defaults: new { controller = "Collections", action = "Index" }
    );

    // [/storelocator]
    app.MapControllerRoute(
        name: "storelocator",
        pattern: "storelocator",
        defaults: new { controller = "Storelocator", action = "Index" }
    );

    // [/the-scoop]
    app.MapControllerRoute(
        name: "thescoop",
        pattern: "thescoop",
        defaults: new { controller = "Thescoop", action = "Index" }
    );

    // [/about]
    app.MapControllerRoute(
        name: "about",
        pattern: "about",
        defaults: new { controller = "About", action = "Index" }
    );

    // [/account]
    app.MapControllerRoute(
        name: "account",
        pattern: "account",
        defaults: new { controller = "Account", action = "Index" }
    );

    // [/products]
    app.MapControllerRoute(
        name: "products",
        pattern: "products",
        defaults: new { controller = "Products", action = "Index" }
    );

    // [/quizes]
    app.MapControllerRoute(
        name: "quizes",
        pattern: "quizes",
        defaults: new { controller = "Quizes", action = "Index" }
    );

    // [/]
    app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
});



app.Run();

