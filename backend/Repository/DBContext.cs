using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repository
{
    public class DBContext : DbContext
    {
        public DbSet<UsuarioModels> Usuario { get; set; }
        public DbSet<CuentaModels> Cuenta { get; set; }
        public DbSet<CompraModels> Compra { get; set; }

    }
}
