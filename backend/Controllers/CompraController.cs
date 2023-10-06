using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    public class CompraController : Controller
    {
        private readonly CompraService compraService;

        public CompraController (CompraService compraService)
        {
            this.compraService = compraService;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
