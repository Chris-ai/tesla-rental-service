namespace car_rental_backend.Dto
{
    public class ListRequestDto
    {
        public string? PickUpLocation { get; set; }
        public string? ReturnLocation { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
