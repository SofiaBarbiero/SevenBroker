using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Backend.Repository
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options)
                : base(options)
                { }
        public DbSet<UsuarioModels> Usuario { get; set; }
        public DbSet<CuentaModels> Cuenta { get; set; }
        public DbSet<CompraModels> Compra { get; set; }

        public async Task<UsuarioModels?> Get(int id)
        {
            UsuarioModels? usuario = await Usuario.FirstOrDefaultAsync(u => u.Id == id);
            return usuario;
        }

        public async Task<List<UsuarioModels>> Get()
        {
            return await Usuario.ToListAsync();
        }

        public async Task<UsuarioModels?> Create(UsuarioModels usuario)
        {
            EntityEntry<UsuarioModels> result = await Usuario.AddAsync(usuario);
            await SaveChangesAsync();
            return await Get(result.Entity.Id);
        }

        public void Delete(int id)
        {
            UsuarioModels? usuario = Usuario.FirstOrDefault(u => u.Id == id);
            if(usuario != null)
            {
                Usuario.Remove(usuario);
                SaveChanges();
            }

        }
    }
}
