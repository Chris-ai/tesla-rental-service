# Getting Started

This full-stack application facilitates reservations for Tesla car rentals in Mallorca. The system comprises two modules: frontend and backend, both connecting to an external PostgreSQL database. The backend is developed using .NET with the Entity Framework, while the frontend is built using Next.js, a React.js framework. Users can:

- Select parameters for the desired car
- Choose from various models based on selected parameters
- Book the selected model

Database schema:
<img src="./er_diagram.png" alt='schema-of-two-tables-database' />

## 1. Create PostgreSQL database

- Install postgreSQL on your machine: [link](https://www.postgresql.org/download/)
- Create database with following credentials:
  - Host=localhost;
  - Port=5432;
  - Database=[db_name];
  - Username=[your_username];
  - Password=[your_password];
- Create two tables with following columns:

  - cars

    - id (int4)
    - model (text)
    - imagesrc (text)
    - priceperday (int4)
    - bodystyle (text)

  - reservations
    - id (int4)
    - startdate (date)
    - enddate (date)
    - pickuplocation (text)
    - returnlocation (text)
    - totalprice (text)
    - carid (int4) [(foreign key to the car table)]

- Populate the cars table with data from the `cars.json` file

## 2. Running the Backend

- Open the `car-rental-backend` directory using your IDE.
- In the `appsettings.Development.json` file, under "Logging", add the following connection string:

```
"ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=[db_name];Username=[your_username];Password=[your_password];"
  }

```

- Run backend server

## 3. Running the Frontend

- Add a `.env` file in the car-rental-frontend directory and define the environment variable: `BACKEND_API_URL = "http://localhost:5022/api"`.
- In the terminal, run the following commands:

  - `npm install`

  - `npm run dev`
