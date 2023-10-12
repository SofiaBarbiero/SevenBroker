using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]

    [ApiController]
    public class CuentaController : Controller
    {
        private readonly CuentaService cuentaService;

        public CuentaController (CuentaService cuentaService)
        {
            this.cuentaService = cuentaService;
        }

    }
}
