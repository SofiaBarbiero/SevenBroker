using Backend.Repository;

namespace Backend.Services
{
    public class UsuarioService
    {
        private readonly UsuarioContext usuarioContext;
        public UsuarioService (UsuarioContext usuarioContext) //injecto context
        {
            this.usuarioContext = usuarioContext;
        }
    }
}
