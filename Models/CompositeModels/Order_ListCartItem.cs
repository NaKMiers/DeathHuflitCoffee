using DeathWishCoffee.Models.Domain;
using DeathWishCoffee.Models.ViewModels;

namespace DeathWishCoffee.Models.CompositeModels
{
   public class Order_ListCartItem
   {
      public AddNewOrderRequest OrderRequest { get; set; }
      public List<CartItem> CartItems { get; set; }

   }
}