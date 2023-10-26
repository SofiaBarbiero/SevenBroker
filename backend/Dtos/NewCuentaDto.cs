using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos
{
    public class NewCuentaDto
    {
        [Required(ErrorMessage = "Es obligatorio definir el saldo de la cuenta.")]
        public double Saldo { get; set; }

        [Required(ErrorMessage = "Es obligatorio definir el usuario de la cuenta.")]
        public int UsuarioId { get; set; }
    }
}
