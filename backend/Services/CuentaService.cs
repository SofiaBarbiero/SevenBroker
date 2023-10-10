using Backend.Repository;

namespace Backend.Services
{
    public class CuentaService
    {
        private readonly DBContext cuentaContext;
        public CuentaService(DBContext cuentaContext)
        {
            this.cuentaContext = cuentaContext;
        }
    }
}
