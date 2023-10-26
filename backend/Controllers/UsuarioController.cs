using Backend.Dtos;
using Backend.Models;
using Backend.Repository;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]

    [ApiController]
    public class UsuarioController : Controller
    {
        private readonly UsuarioService usuarioService;
        public UsuarioController (UsuarioService usuarioService) //injecto service
        {
            this.usuarioService = usuarioService;
        }

        [HttpGet("{email}")]
        public async Task<IActionResult?> Get(string email)
        {
            UsuarioDto usuario = await usuarioService.Get(email);
            return usuario!= null ? Ok(usuario) : NotFound();
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<UsuarioDto> result = await usuarioService.Get();

            return new OkObjectResult(result);

        }

        [HttpPost]
        public async Task<IActionResult?> Create(NewUsuarioDto usuarioDto)
        {
            UsuarioDto result = await usuarioService.Create(usuarioDto);
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(UsuarioDto usuarioDto)
        {
            var result = await usuarioService.Update(usuarioDto);
            if (result == null)
            {
                return new NotFoundResult();
            }
            return new OkObjectResult(result);
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            usuarioService.Delete(id);
            return NoContent();
        }


        [HttpPost("login")]

        public async Task<IActionResult> PostLogin(LoginDto loginDto)
        {
            LoginDto result = await usuarioService.GetLogin(loginDto.Email, loginDto.Password);
            return result != null ? Ok(result) : NotFound();
        }

    }
}
