using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class BorroCampoCuentaIDenUsuario : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Usuario_Cuenta_CuentaId",
                table: "Usuario");

            migrationBuilder.DropIndex(
                name: "IX_Usuario_CuentaId",
                table: "Usuario");

            migrationBuilder.DropColumn(
                name: "CuentaId",
                table: "Usuario");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CuentaId",
                table: "Usuario",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_CuentaId",
                table: "Usuario",
                column: "CuentaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Usuario_Cuenta_CuentaId",
                table: "Usuario",
                column: "CuentaId",
                principalTable: "Cuenta",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
