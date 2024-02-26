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
        public async Task<ActionResult<CustomResponse<Reservation>>> PostReservation(ReservationRequestDto reservation)
        {
            try
            {
                bool isOverlap = await _context.Reservations.AnyAsync(r =>
                    r.CarId == reservation.CarId &&
                    ((reservation.StartDate == r.StartDate && reservation.EndDate == r.EndDate)));

                if (isOverlap)
                {
                    return new CustomResponse<Reservation>
                    {
                        Succeeded = false,
                        Data = null,
                        Message = "Cannot create reservation. There is already an overlapping reservation for the same car and period."
                    };
                }

                var res = new Reservation
                {
                    CarId = reservation.CarId,
                    StartDate = reservation.StartDate,
                    EndDate = reservation.EndDate,
                    PickupLocation = reservation.PickupLocation,
                    ReturnLocation = reservation.ReturnLocation,
                    TotalPrice = reservation.TotalPrice
                };

                _context.Reservations.Add(res);
                await _context.SaveChangesAsync();

                return new CustomResponse<Reservation>
                {
                    Succeeded = true,
                    Data = res,
                    Message = "Reservation created successfully."
                };
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while creating a reservation: {ex}");
                return new CustomResponse<Reservation>
                {
                    Succeeded = false,
                    Data = null,
                    Message = $"An error occurred while processing your request: {ex.Message}"
                };
            }
        }
    }
}
