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

Use the following link to deploy: https://gym-routine-manager-s37e.onrender.com

The application is deployed online using **Render**, which supports Node.js and Express applications. The hosted version demonstrates the same functionality as the local version.

Note: On the free tier, the server may take a few seconds to wake up after inactivity.

---------------------------------------------------------------------------------------------------------------------------------------------

## Reflection

This project gave us a practical understanding of how a full-stack web application works from start to finish. Instead of only learning concepts in lectures, we were able to apply them by building a working application and seeing how each component connects together.

One of the biggest things we learned was how the frontend and backend communicate. Implementing fetch requests and handling different HTTP methods in Express helped us better understand how data moves between the client and the server. It became much clearer how requests are sent, processed, and returned with proper status codes.

Working as a team was also an important part of this assignment. We had to divide responsibilities, make sure our code worked together, and help each other debug issues. At times, we faced challenges with routing, folder structure, and updating the JSON file correctly. By testing carefully and reviewing each other’s code, we were able to fix these problems.

This project improved not only our technical skills but also our collaboration and problem-solving abilities. If we were to extend this application in the future, we would consider adding stronger input validation, improving the UI design, and integrating a real database. Overall, this assignment helped us build confidence in developing and structuring web applications using Express and REST principles.
