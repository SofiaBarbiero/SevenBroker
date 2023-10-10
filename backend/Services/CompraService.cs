using Backend.Repository;

namespace Backend.Services
{
    public class CompraService
    {
        public readonly DBContext compraContext;

        public CompraService (DBContext compraContext)
        {
            this.compraContext = compraContext;
        }    
    }
}
