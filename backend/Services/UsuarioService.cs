using Backend.Repository;

namespace Backend.Services
{
    public class UsuarioService
    {
        private readonly DBContext usuarioContext;
        public UsuarioService (DBContext usuarioContext) //injecto context
        {
            this.usuarioContext = usuarioContext;
        }
    }
}
