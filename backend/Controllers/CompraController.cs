using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]

    [ApiController]
    public class CompraController : Controller
    {
        private readonly CompraService compraService;

        public CompraController (CompraService compraService)
        {
            this.compraService = compraService;
        }


    }
}
