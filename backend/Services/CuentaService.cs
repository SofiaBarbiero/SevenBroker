using Backend.Repository;

namespace Backend.Services
{
    public class CuentaService
    {
        private readonly CuentaContext cuentaContext;
        public CuentaService(CuentaContext cuentaContext)
        {
            this.cuentaContext = cuentaContext;
        }
    }
}
