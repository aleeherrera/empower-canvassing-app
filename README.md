# Minimal Canvassing Web App

This is a minimal canvassing web app that allows canvassers to write down information about the people they talk to and view their canvassing notes. The app is built using React for the frontend, Express.js for the backend, and MySQL for the database.

## Prerequisites

Before running the app, ensure you have the following installed on your machine:

- Node.js
- MySQL

## Getting Started

1. Clone the repository:
`git clone https://github.com/your-username/canvassing-web-app.git`


2. Navigate to the project directory:
`cd canvassing-web-app`
 
3. Install the dependencies for the backend:
`cd canvassing-app-backend`
`npm install`

4. Set up the MySQL database:
- Create a new database named `canvassing_db`.
- Create a table named `canvassing_notes` with the following columns:
  - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
  - `name` (VARCHAR(255))
  - `notes` (TEXT)

5. Configure the MySQL connection:
- Open the `canvassing-app-backend/server.js` file.
- Replace `'your_mysql_username'` and `'your_mysql_password'` with your actual MySQL credentials in the `mysql.createPool` function.

6. Start the backend server:
`node server.js`

7. Open a new terminal window, navigate to the project directory, and go to the frontend directory:
`cd canvassing-app-frontend`

8. Install the dependencies for the frontend:
`npm install`

9. Start the frontend development server:
`npm start`

10. Open your web browser and visit `http://localhost:3000` to access the canvassing web app.

## Usage

- On the main page, you can write down the name and notes about a person you talked to by filling in the input fields and clicking the "Submit" button.
- The submitted canvassing notes will be displayed on /notes.
