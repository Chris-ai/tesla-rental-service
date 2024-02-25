using Microsoft.EntityFrameworkCore;

namespace car_rental_backend.Models
{
    public class ApplicationDbContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Car> cars { get; set; }
        public DbSet<Reservation> reservations { get; set; }
    }
}
