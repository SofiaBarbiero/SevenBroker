using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repository
{
    public class CuentaContext : DbContext
    {
        public DbSet<CuentaModels> Cuenta { get; set; }

    }
}
