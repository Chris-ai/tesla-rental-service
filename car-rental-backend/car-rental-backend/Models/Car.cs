using System.ComponentModel.DataAnnotations.Schema;

namespace car_rental_backend.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string Model { get; set; }
        public string ImageSrc { get; set; }
        public int PricePerDay { get; set; } 
        public string BodyStyle { get; set; }
    }
}