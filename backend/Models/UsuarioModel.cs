using Backend.Dtos;

namespace Backend.Models
{
    public class UsuarioModel
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public int Dni { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
     

        public UsuarioDto ToDto()
        {
            return new UsuarioDto()
            {
                Id = Id,
                Nombre = Nombre,
                Apellido = Apellido,
                Email = Email,
                Telefono = Telefono,
                Dni = Dni,
                UserName = UserName,
                Password = Password
            };
        }

    }
}
