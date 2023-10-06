using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    public class CuentaController : Controller
    {
        private readonly CuentaService cuentaService;

        public CuentaController (CuentaService cuentaService)
        {
            this.cuentaService = cuentaService;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
