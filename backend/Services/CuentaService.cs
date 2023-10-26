using Backend.Dtos;
using Backend.Models;
using Backend.Repository;

namespace Backend.Services
{
    public class CuentaService
    {
        private readonly DBContext _cuentaContext;
        public CuentaService(DBContext cuentaContext)
        {
            _cuentaContext = cuentaContext;
        }

        public async Task<List<CuentaDto>> Get ()
        {
            List<CuentaModel> result = await _cuentaContext.GetCuenta();
            return result.Select(x => x.ToDto()).ToList();
        }

        public async Task<CuentaDto> Get (int Id)
        {
            CuentaModel result = await _cuentaContext.GetCuenta(Id);
            return result.ToDto();
        }

        public async Task<CuentaDto> Create (NewCuentaDto cuentaDto)
        {
            CuentaModel newCuenta = new CuentaModel()
            {
                Saldo = cuentaDto.Saldo,
                UsuarioId = cuentaDto.UsuarioId,
            };
            CuentaModel cuenta = await _cuentaContext.CreateCuenta(newCuenta);
            return cuenta.ToDto();
        }

        public async Task<CuentaDto> Update (CuentaDto cuentaDto)
        {
            var cuenta = await _cuentaContext.GetCuenta(cuentaDto.Id);
            if(cuenta == null)
            {
                return null;
            }
            cuenta.Saldo = cuentaDto.Saldo;

            await _cuentaContext.UpdateCuenta(cuenta);
            return cuenta.ToDto();
        }

        public async Task<bool> Delete (int Id)
        {
            var result = await _cuentaContext.DeleteCuenta(Id);
            return result;
        }
    }
}
