namespace car_rental_backend.Dto
{
    public class ListRequestDto
    {
        public string? PickUpLocation { get; set; }
        public string? ReturnLocation { get; set; }
        public DateOnly StartDate { get; set; }
        public DateOnly EndDate { get; set; }
    }
}
