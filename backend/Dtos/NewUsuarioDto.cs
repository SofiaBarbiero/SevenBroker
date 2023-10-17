using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos
{
    public class NewUsuarioDto
    {
        [Required(ErrorMessage = "Es obligatorio definir el nombre de usuario.")]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "Es obligatorio definir el apellido de usuario.")]
        public string Apellido { get; set; }

        [Required(ErrorMessage = "Es obligatorio definir el email de usuario.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Es obligatorio definir el telefono de usuario.")]
        public string Telefono { get; set; }

        [Required(ErrorMessage = "Es obligatorio definir el dni de usuario.")]
        public int Dni { get; set; }

        [Required(ErrorMessage = "Es obligatorio definir el user name de usuario.")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Es obligatorio definir la constraseña de usuario.")]
        public string Password { get; set; }
    }
}
