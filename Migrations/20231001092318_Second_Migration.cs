using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DeathWishCoffee.Migrations
{
    /// <inheritdoc />
    public partial class Second_Migration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_OrdersHistory_OrderHistoryId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_OrderHistoryId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "OrderHistoryId",
                table: "Products");

            migrationBuilder.AddColumn<Guid>(
                name: "ProductId",
                table: "OrdersHistory",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "OrdersHistory");

            migrationBuilder.AddColumn<Guid>(
                name: "OrderHistoryId",
                table: "Products",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Products_OrderHistoryId",
                table: "Products",
                column: "OrderHistoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_OrdersHistory_OrderHistoryId",
                table: "Products",
                column: "OrderHistoryId",
                principalTable: "OrdersHistory",
                principalColumn: "Id");
        }
    }
}
