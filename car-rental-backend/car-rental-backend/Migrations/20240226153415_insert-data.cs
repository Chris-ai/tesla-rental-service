using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace car_rental_backend.Migrations
{
    /// <inheritdoc />
    public partial class insertdata : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
                        INSERT INTO ""Cars""
                            (""Model"", ""ImageSrc"", ""PricePerDay"", ""BodyStyle"")
                        VALUES
                            ('Model S', '/images/model-s.webp', 150, 'Sedan'),
                            ('Model S Plaid', '/images/model-s.webp', 200, 'Sedan'),
                            ('Model 3', '/images/model-3.webp', 120, 'Sedan'),
                            ('Model 3 Long Range', '/images/model-3.webp', 150, 'Sedan'),
                            ('Model X', '/images/model-x.webp', 180, 'SUV'),
                            ('Model X Plaid', '/images/model-x.webp', 180, 'SUV'),
                            ('Model Y', '/images/model-y.webp', 140, 'SUV'),
                            ('Model Y Long Range', '/images/model-y.webp', 170, 'SUV'),
                            ('Model Y Performance', '/images/model-y.webp', 200, 'SUV');
                    ");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
