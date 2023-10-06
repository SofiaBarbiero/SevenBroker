using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repository
{
    public class CompraContext : DbContext
    {
        public DbSet<CompraModels> Compra { get; set; }

    }
}
