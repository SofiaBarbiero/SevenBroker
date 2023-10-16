using Backend.Models;
using Backend.Repository;
using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace Backend.Services
{
    public class UsuarioService
    {
        private readonly DBContext usuarioContext;
        public UsuarioService (DBContext usuarioContext) //injecto context
        {
            this.usuarioContext = usuarioContext;
        }

        public async Task<UsuarioModel?> Get(int id)
        {
            return await usuarioContext.Get(id);
        }

        public async Task<List<UsuarioModel>> Get()
        {
            return await usuarioContext.Get();
        }

        public async Task<UsuarioModel?> Create(UsuarioModel usuario)
        {
            return await usuarioContext.Create(usuario);
        }

        public void Delete(int id)
        {
            usuarioContext.Delete(id);
        }
    }
}
