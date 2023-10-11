using Backend.Models;
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

        [HttpGet("{id}")]
        public async Task<IActionResult?> Get(int id)
        {
            UsuarioModels? usuario = await usuarioService.Get(id);
            return usuario!= null ? Ok(usuario) : NotFound();
        }

        [HttpGet]
        public async Task<IActionResult?> Get()
        {
            return Ok(usuarioService.Get());
        }

        [HttpPost]
        public async Task<IActionResult?> Create(UsuarioModels usuario)
        {
            UsuarioModels? result = await usuarioService.Create(usuario);
            return Ok(result);
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            usuarioService.Delete(id);
            return NoContent();
        }
    }
}
