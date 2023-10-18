using Backend.Dtos;
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

        public async Task<UsuarioDto?> Get(int id)
        {
            UsuarioModel? result = await usuarioContext.GetUsuario(id);
            return result.ToDto();
        }

        public async Task<List<UsuarioDto>> Get()
        {
            List<UsuarioModel> result = await usuarioContext.GetUsuario();
            return result.Select(x => x.ToDto()).ToList();
        }

        public async Task<UsuarioDto> Create(NewUsuarioDto usuarioDto)
        {
            UsuarioModel usuario = new UsuarioModel()
            {
                Nombre  = usuarioDto.Nombre,
                Apellido = usuarioDto.Apellido,
                Email = usuarioDto.Email,
                Telefono = usuarioDto.Telefono,
                Dni = usuarioDto.Dni,
                UserName = usuarioDto.UserName,
                Password = usuarioDto.Password,                
            };

            UsuarioModel? result = await usuarioContext.CreateUsuario(usuario);
            return result?.ToDto();
        }

        public async Task<UsuarioDto> Update(UsuarioDto usuarioDto)
        {
            var usuario = await usuarioContext.GetUsuario(usuarioDto.Id);
            if (usuario == null)
            {
                return null;
            }
            usuario.Nombre = usuarioDto.Nombre;
            usuario.Apellido = usuarioDto.Apellido;
            usuario.Email = usuarioDto.Email;
            usuario.Telefono = usuarioDto.Telefono;
            usuario.Dni = usuarioDto.Dni;

            await usuarioContext.UpdateUsuario(usuario);
            return usuario.ToDto();
        }

        public void Delete(int Id)
        {
            usuarioContext.DeleteUsuario(Id);
        }
    }
}
