using Microsoft.AspNetCore.Mvc;
using car_rental_backend.Models;
using car_rental_backend.Dto;

namespace car_rental_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CarsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Cars
        [HttpGet]
        public async Task<ActionResult<List<CarResponseDto>>> GetCars([FromQuery] ListRequestDto listRequestDto)
        {
            if (!IsValidRequest(listRequestDto))
            {
                return BadRequest("Invalid request parameters.");
            }

            var availableCars = await GetAvailableCars(listRequestDto);

            return Ok(availableCars);
        }

        private bool IsValidRequest(ListRequestDto requestDto)
        {
            return requestDto.StartDate != DateTime.MinValue &&
                   requestDto.EndDate != DateTime.MinValue &&
                   !string.IsNullOrEmpty(requestDto.ReturnLocation) &&
                   !string.IsNullOrEmpty(requestDto.PickUpLocation);
        }

        private Task<List<CarResponseDto>> GetAvailableCars(ListRequestDto requestDto)
        {
            var allCars = _context.cars.ToList();
            var availableCars = new List<CarResponseDto>();

            foreach (var car in allCars)
            {
                if (!IsCarReserved(car.Id, requestDto))
                {
                    int numberOfDays = (int)(requestDto.EndDate - requestDto.StartDate).TotalDays + 1;
                    int totalPrice = numberOfDays * car.PricePerDay;

                    availableCars.Add(new CarResponseDto
                    {
                        StartDate = requestDto.StartDate,
                        EndDate = requestDto.EndDate,
                        PickupLocation = requestDto.PickUpLocation,
                        ReturnLocation = requestDto.ReturnLocation,
                        TotalPrice = totalPrice,
                        Car = car
                    });
                }
            }

            return Task.FromResult(availableCars);
        }

        private bool IsCarReserved(int carId, ListRequestDto requestDto)
        {
            return _context.reservations.Any(r =>
                r.CarId == carId &&
                ((requestDto.StartDate >= r.StartDate && requestDto.StartDate < r.EndDate) ||
                 (requestDto.EndDate > r.StartDate && requestDto.EndDate <= r.EndDate)));
        }
    }

}
