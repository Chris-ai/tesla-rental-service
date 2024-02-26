using System.ComponentModel.DataAnnotations.Schema;

namespace car_rental_backend.Models
{
    [Table("cars")]
    public class Car
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("model")]
        public string Model { get; set; }
        [Column("imagesrc")]
        public string ImageSrc { get; set; }
        [Column("priceperday")]
        public int PricePerDay { get; set; } 
        [Column("bodystyle")]
        public string BodyStyle { get; set; }
    }
}