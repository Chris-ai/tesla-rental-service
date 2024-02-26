using Microsoft.EntityFrameworkCore;

namespace car_rental_backend.Models
{
    public class ApplicationDbContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Car> Cars { get; set; }
        public DbSet<Reservation> Reservations { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=test-database;Username=postgres;Password=postgres;");
        }
    }
}
