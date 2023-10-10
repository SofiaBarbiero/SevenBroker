using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    public class UsuarioController : Controller
    {
        private readonly UsuarioService usuarioService;
        public UsuarioController (UsuarioService usuarioService) //injecto service
        {
            this.usuarioService = usuarioService;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
