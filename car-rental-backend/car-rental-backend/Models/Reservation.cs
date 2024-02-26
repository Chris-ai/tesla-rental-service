using System.ComponentModel.DataAnnotations.Schema;

namespace car_rental_backend.Models
{
    [Table("reservations")]
    public class Reservation
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("startdate")]
        public DateTime StartDate { get; set; }
        [Column("enddate")]
        public DateTime EndDate { get; set; }
        [Column("pickuplocation")]
        public string PickupLocation { get; set; }
        [Column("returnlocation")]
        public string ReturnLocation { get; set; }
        [Column("totalprice")]
        public int TotalPrice { get; set; }
        [Column("carid")]
        public int CarId { get; set; }
    }
}
