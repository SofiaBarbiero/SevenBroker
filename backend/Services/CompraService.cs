using Backend.Dtos;
using Backend.Models;
using Backend.Repository;

namespace Backend.Services
{
    public class CompraService
    {
        public readonly DBContext _compraContext;

        public CompraService (DBContext compraContext)
        {
            _compraContext = compraContext;
        }

        public async Task<List<CompraDto>> Get()
        {
            List<CompraModel> result = await _compraContext.GetCompra();
            return result.Select(x => x.ToDto()).ToList();
        }

        public async Task<CompraDto> Get(int Id)
        {
            CompraModel result = await _compraContext.GetCompra(Id);
            return result.ToDto();
        }

        public async Task<CompraDto> Create(NewCompraDto compraDto)
        {
            CompraModel newCompra = new CompraModel()
            {
                Id = null,
                Fecha = compraDto.Fecha,
                PrecioCompra = compraDto.PrecioCompra,
                CantidadCompra = compraDto.CantidadCompra,
                Simbolo = compraDto.Simbolo,
                CuentaId = compraDto.CuentaId,
            };
            CompraModel compra = await _compraContext.CreateCompra(newCompra);
            return compra.ToDto();
        }

        public async Task<CompraDto> Update(CompraDto compraDto)
        {
            var compra = await _compraContext.GetCompra(compraDto.Id);
            if (compra == null)
            {
                return null;
            }
            compra.Fecha = compraDto.Fecha;
            compra.PrecioCompra = compraDto.PrecioCompra;
            compra.CantidadCompra = compraDto.CantidadCompra;
            compra.Simbolo = compraDto.Simbolo;
            compra.CuentaId = compraDto.CuentaId;

            await _compraContext.UpdateCompra(compra);
            return compra.ToDto();
        }

        public async Task<bool> Delete(int Id)
        {
            var result = await _compraContext.DeleteCompra(Id);
            return result;
        }
    }
}
