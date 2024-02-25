using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using car_rental_backend.Models;
using car_rental_backend.Dto;

namespace car_rental_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ReservationsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // POST: api/Reservations
        [HttpPost]
        public async Task<ActionResult<Reservation>> PostReservation(ReservationRequestDto reservation)
        {
            var res = new Reservation
            {
                CarId = reservation.CarId,
                StartDate = reservation.StartDate,
                EndDate = reservation.EndDate,
                PickupLocation = reservation.PickupLocation,
                ReturnLocation = reservation.ReturnLocation,
                TotalPrice = reservation.TotalPrice
            };
            _context.reservations.Add(res);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReservation", null, res);
        }
        private bool ReservationExists(int id)
        {
            return _context.reservations.Any(e => e.Id == id);
        }
    }
}
