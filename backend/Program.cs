using Backend.Repository;
using Backend.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


var configuration = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")
            .Build();

var connectionString = configuration.GetConnectionString("connMyDB");

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddDbContext<UsuarioContext>(opt =>
opt.UseSqlServer(connectionString));
builder.Services.AddDbContext<CuentaContext>(opt =>
opt.UseSqlServer(connectionString));
builder.Services.AddDbContext<CompraContext>(opt =>
opt.UseSqlServer(connectionString));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddRouting(routing => routing.LowercaseUrls = true); //convierte rutas en minuscula

builder.Services.AddScoped<UsuarioService>();
builder.Services.AddScoped<CuentaService>();
builder.Services.AddScoped<CompraService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
