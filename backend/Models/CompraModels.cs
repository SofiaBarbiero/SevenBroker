namespace Backend.Models
{
    public class CompraModels
    {
        public int IdCompra { get; set; }
        public DateTime Fecha { get; set; }
        public double PrecioCompra { get; set; }
        public int CantidadCompra { get; set; }
        public string Simbolo { get; set; } //accion : ver si borramos tabla accion de la bd
    }
}

