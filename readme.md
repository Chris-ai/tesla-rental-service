# Getting Started

A fullstack application used to make reservations for Tesla car rentals, in Mallorca. The application has two modules, frontend and backend, and connects to an external PostgreSQL database. The backend site was implemented using .NET and the Entity Framework. The frontend, on the other hand, was built using Next.js, a React.js framework. The user has the ability to:

- Select the parameters of the searched car
- choose from a variety of models for selected parameters
- book the selected model

Database schema:
<img src="./er_diagram.png" alt='schema-of-two-tables-database' />

## 1. Create PostgreSQL database

- Install postgreSQL on your machine: [link](https://www.postgresql.org/download/)
- Create database with following credentials:
  - Host=localhost;
  - Port=5432;
  - Database=car-rental;
  - Username=postgres;
  - Password=postgres;
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

- Fill cars table with the data from file `cars.json`

## 2. Run Backend Side

- Open `car-rental-backend` directory using your IDE
- Run backend server

## 3. Run Frontend Side

- Add .env file in the `car-rental-frontend` directory and add env variable: `BACKEND_API_URL = "http://localhost:5022/api"`
- In terminal run following commands:

  - `npm install`

  - `npm run dev`
