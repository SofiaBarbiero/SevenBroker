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
        public DbSet<UsuarioModel> Usuario { get; set; }
        public DbSet<CuentaModel> Cuenta { get; set; }
        public DbSet<CompraModel> Compra { get; set; }

        //UsuarioModel

        public async Task<UsuarioModel?> GetUsuario(int id)
        {
            UsuarioModel? usuario = await Usuario.FirstOrDefaultAsync(u => u.Id == id);
            return usuario;
        }

        public async Task<List<UsuarioModel>> GetUsuario()
        {
            return await Usuario.ToListAsync();
        }

        public async Task<UsuarioModel?> CreateUsuario(UsuarioModel usuario)
        {
            EntityEntry<UsuarioModel> result = await Usuario.AddAsync(usuario);
            await SaveChangesAsync();
            return await GetUsuario(result.Entity.Id);
        }

        public async Task<UsuarioModel?> UpdateUsuario(UsuarioModel usuario)
        {
            EntityEntry<UsuarioModel> response = Usuario.Update(usuario);
            await SaveChangesAsync();
            return await GetUsuario(response.Entity.Id);
        }

        public void DeleteUsuario(int id)
        {
            UsuarioModel? usuario = Usuario.FirstOrDefault(u => u.Id == id);
            if(usuario != null)
            {
                Usuario.Remove(usuario);
                SaveChanges();
            }

        }

        //CuentaModel

        public async Task<List<CuentaModel>> GetCuenta()
        {
            return await Cuenta.ToListAsync();
        }

        public async Task<CuentaModel> GetCuenta(int? Id)
        {
            return await Cuenta.FirstAsync(x => x.Id == Id);
        }

        public async Task<CuentaModel> CreateCuenta (CuentaModel cuenta)
        {
            EntityEntry<CuentaModel> response = await Cuenta.AddAsync(cuenta);
            await SaveChangesAsync();
            return await GetCuenta(response.Entity.Id ?? throw new Exception("Error al Guardar"));
        }

        public async Task<CuentaModel> UpdateCuenta (CuentaModel cuenta)
        {
            EntityEntry<CuentaModel> response = Cuenta.Update(cuenta);
            await SaveChangesAsync();
            return await GetCuenta(response.Entity.Id ?? throw new Exception("Error al Guardar"));
        }

        public async Task<bool> DeleteCuenta (int Id)
        {
            var cuenta = await Cuenta.FirstAsync(x => x.Id == Id);
            EntityEntry<CuentaModel> response = Cuenta.Remove(cuenta);
            int affectedRows = await SaveChangesAsync();
            return affectedRows > 0;
        }

        //CompraModel
        public async Task<List<CompraModel>> GetCompra()
        {
            return await Compra.ToListAsync();
        }

        public async Task<CompraModel> GetCompra(int? Id)
        {
            return await Compra.FirstAsync(x => x.Id == Id);
        }

        public async Task<CompraModel> CreateCompra(CompraModel compra)
        {
            EntityEntry<CompraModel> response = await Compra.AddAsync(compra);
            await SaveChangesAsync();
            return await GetCompra(response.Entity.Id ?? throw new Exception("Error al Guardar"));
        }

        public async Task<CompraModel> UpdateCompra(CompraModel compra)
        {
            EntityEntry<CompraModel> response = Compra.Update(compra);
            await SaveChangesAsync();
            return await GetCompra(response.Entity.Id ?? throw new Exception("Error al Guardar"));
        }

        public async Task<bool> DeleteCompra(int Id)
        {
            var compra = await Compra.FirstAsync(x => x.Id == Id);
            EntityEntry<CompraModel> response = Compra.Remove(compra);
            int affectedRows = await SaveChangesAsync();
            return affectedRows > 0;
        }
    }
}
