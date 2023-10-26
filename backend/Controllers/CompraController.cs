using Backend.Dtos;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]

    [ApiController]
    public class CompraController : Controller
    {
        private readonly CompraService _compraService;

        public CompraController (CompraService compraService)
        {
            _compraService = compraService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<CompraDto> result = await _compraService.Get();
            return new OkObjectResult(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int Id)
        {
            CompraDto result = await _compraService.Get(Id);
            return new OkObjectResult(result);
        }

        [HttpPost]
        public async Task<IActionResult> Create(NewCompraDto compraDto)
        {
            CompraDto compra = await _compraService.Create(compraDto);
            return CreatedAtAction(nameof(Get), new {Id = compra.Id}, compra);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(CompraDto compraDto)
        {
            var result = await _compraService.Update(compraDto);
            if(result == null)
            {
                return new NotFoundResult();
            }
            return new OkObjectResult(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int Id)
        {
            return new OkObjectResult(await _compraService.Delete(Id));
        }
    }
}
