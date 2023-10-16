using Backend.Dtos;

namespace Backend.Models
{
    public class CompraModel
    {
        public int? Id { get; set; }
        public DateTime Fecha { get; set; }
        public double PrecioCompra { get; set; }
        public int CantidadCompra { get; set; }
        public string Simbolo { get; set; } //accion : ver si borramos tabla accion de la bd
        public int CuentaId { get; set; }
        public CompraDto ToDto()
        {
            return new CompraDto()
            {
                Id = Id ?? throw new Exception("El id no puede ser null"),
                Fecha = Fecha,
                PrecioCompra = PrecioCompra,
                CantidadCompra = CantidadCompra,
                Simbolo = Simbolo,
                CuentaId = CuentaId,
            };
        }

    }
}

