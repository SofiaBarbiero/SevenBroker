using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repository
{
    public class UsuarioContext : DbContext
    {
        public DbSet<UsuarioModels> Usuario { get; set; } 
    }
}
