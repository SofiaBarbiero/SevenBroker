using Backend.Dtos;

namespace Backend.Models
{
    public class CuentaModel
    {
        public int? Id { get; set; }
        public double Saldo { get; set; }
        //Relacion uno-uno
        public int UsuarioId { get; set; }

        public CuentaDto ToDto()
        {
            return new CuentaDto()
            {
                Id = Id ?? throw new Exception("El id no puede ser null"),
                Saldo = Saldo,
            };
        }
    }
}
