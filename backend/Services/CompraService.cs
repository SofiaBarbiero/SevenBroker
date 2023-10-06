using Backend.Repository;

namespace Backend.Services
{
    public class CompraService
    {
        public readonly CompraContext compraContext;

        public CompraService (CompraContext compraContext)
        {
            this.compraContext = compraContext;
        }    
    }
}
