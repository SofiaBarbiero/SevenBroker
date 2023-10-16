using Backend.Services;
using Backend.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]

    [ApiController]
    public class CuentaController : Controller
    {
        private readonly CuentaService _cuentaService;

        public CuentaController(CuentaService cuentaService)
        {
            _cuentaService = cuentaService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<CuentaDto> result = await _cuentaService.Get();
            return new OkObjectResult(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int Id)
        {
            CuentaDto result = await _cuentaService.Get(Id);
            return new OkObjectResult(result);
        }

        [HttpPost]
        public async Task<IActionResult> Create(NewCuentaDto cuentaDto)
        {
            CuentaDto cuenta = await _cuentaService.Create(cuentaDto);
            return CreatedAtAction(nameof(Get), new {Id =  cuenta.Id}, cuenta);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(CuentaDto cuentaDto)
        {
            var result = await _cuentaService.Update(cuentaDto);
            if(result == null)
            {
                return new NotFoundResult();
            }
            return new OkObjectResult(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int Id)
        {
            return new OkObjectResult(await _cuentaService.Delete(Id));
        }
    }
}
