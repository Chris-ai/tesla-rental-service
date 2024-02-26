namespace car_rental_backend.Dto
{
    public class CustomResponse<T>
    {
        public bool Succeeded { get; set; }
        public T? Data { get; set; }
        public string Message { get; set; }
    }
}
