# CPS630 A1 – Gym Routine Manager

## Overview

Gym Routine Manager is a multi-page web application developed for CPS 630: Web Application Development. The purpose of this application is to allow users to view, add, and delete workout exercises while demonstrating client–server communication using a RESTful API.

The application is built using Node.js and Express and uses a JSON file on the server to simulate persistent data storage (no database). The project focuses on routing, REST API design, static asset handling, and clean project organization.

Future extensions could include:
- Adding a database (e.g., MongoDB)
- User authentication
- Tracking workout details such as sets, reps, and weights
- Filtering exercises by muscle group
- A React-based frontend

---------------------------------------------------------------------------------------------------------------------------------------------

## Documentation

### Installation & Setup

1. Clone the repository from GitHub.
2. In the project root, install dependencies: npm install
3. Start the server: npm start
4. Open a browser and go to: http://localhost:3000

### Application Routes

- `/`  
Home page introducing the application.

- `/routine`  
Main functional page where users can view exercises, add new exercises, and delete existing ones.

- `/about`  
Information about the application and its purpose.

Invalid routes are handled gracefully with a 404 response.


### REST API Endpoints

- **GET `/api/exercises`**  
Returns the full list of exercises.  
Status: `200 OK`

- **POST `/api/exercises`**  
Adds a new exercise using JSON input (`name`, `muscleGroup`).  
Status: `201 Created`

- **DELETE `/api/exercises/:id`**  
Deletes an exercise by its ID.  
Status: `200 OK` or `404 Not Found`

All responses are returned in JSON format with appropriate HTTP status codes.

## Deployment

USe the following link to deploy: Https://gym-routine-manager-s37e.onrender.com

The application is deployed online using **Render**, which supports Node.js and Express applications. The hosted version demonstrates the same functionality as the local version.

Note: On the free tier, the server may take a few seconds to wake up after inactivity.

---------------------------------------------------------------------------------------------------------------------------------------------

## Reflection

For this assignment, we created a multi-page web application called Gym Routine Manager using Node.js and Express. The goal of the app is to allow users to manage a workout routine by adding, viewing, and deleting exercises. 

The exercise data is stored in a JSON file, which acts as a simple database and keeps the data persistent.

The application includes three pages: Home, Routine, and About. The Routine page communicates with the backend using fetch requests. 

We implemented REST-style endpoints using GET to retrieve exercises, POST to add new exercises, and DELETE to remove them. The server returns appropriate status codes to show whether each request was successful or invalid.

This project meets the assignment requirements because it uses Express for routing, serves static files (HTML, CSS, JavaScript), implements multiple HTTP methods, follows REST principles, and stores data in a JSON file instead of a database. It is structured as a multi-page application rather than a single-page app.

One challenge we faced was understanding how the frontend and backend communicate. It took some time to understand how fetch sends data and how the server updates the JSON file correctly. We also had to fix some issues with folder structure and routing.

Overall, this assignment helped me better understand how full-stack web applications work and how REST APIs function.
