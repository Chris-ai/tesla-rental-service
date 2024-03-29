﻿using car_rental_backend.Models;

namespace car_rental_backend.Dto
{
    public class CarResponseDto
    {
        public DateOnly StartDate { get; set; }
        public DateOnly EndDate { get; set; }
        public string PickupLocation { get; set; }
        public string ReturnLocation { get; set; }
        public int TotalPrice { get; set; }
        public Car Car { get; set; }
    }
}
