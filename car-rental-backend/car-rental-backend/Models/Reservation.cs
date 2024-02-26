using System.ComponentModel.DataAnnotations.Schema;

namespace car_rental_backend.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateOnly StartDate { get; set; }
        public DateOnly EndDate { get; set; }
        public string PickupLocation { get; set; }
        public string ReturnLocation { get; set; }
        public int TotalPrice { get; set; }
        public int CarId { get; set; }
        public Car Car { get; set; }

    }
}
