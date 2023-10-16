namespace Backend.Dtos
{
    public class CompraDto
    {
        public int? Id { get; set; }
        public DateTime Fecha { get; set; }
        public double PrecioCompra { get; set; }
        public int CantidadCompra { get; set; }
        public string Simbolo { get; set; }
        public int CuentaId { get; set; }
    }
}
