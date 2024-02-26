using System.ComponentModel.DataAnnotations.Schema;

namespace car_rental_backend.Dto
{
    public class ReservationRequestDto
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string PickupLocation { get; set; }
        public string ReturnLocation { get; set; }
        public int TotalPrice { get; set; }
        public int CarId { get; set; }
    }
}
