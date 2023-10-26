using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos
{
    public class NewCompraDto
    {
        [Required(ErrorMessage = "Es obligatorio definir la fecha de la compra.")]
        public DateTime Fecha { get; set; }

        [Required(ErrorMessage = "Es obligatorio definir el precio de la compra.")]
        public double PrecioCompra { get; set; }

        [Required(ErrorMessage = "Es obligatorio definir la cantidad de acciones compradas.")]
        public int CantidadCompra { get; set; }

        [Required(ErrorMessage = "Es obligatorio definir el simbolo de la compra.")]
        public string Simbolo { get; set; }

        [Required(ErrorMessage = "Es obligatorio definir la cuenta de la compra.")]
        public int CuentaId { get; set; }
    }
}
