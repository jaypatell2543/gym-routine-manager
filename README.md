# Gym-Routine-Manager

## Reflection

For this assignment, we created a multi-page web application called Gym Routine Manager using Node.js and Express. The goal of the app is to allow users to manage a workout routine by adding, viewing, and deleting exercises. 

The exercise data is stored in a JSON file, which acts as a simple database and keeps the data persistent.

The application includes three pages: Home, Routine, and About. The Routine page communicates with the backend using fetch requests. 

We implemented REST-style endpoints using GET to retrieve exercises, POST to add new exercises, and DELETE to remove them. The server returns appropriate status codes to show whether each request was successful or invalid.

This project meets the assignment requirements because it uses Express for routing, serves static files (HTML, CSS, JavaScript), implements multiple HTTP methods, follows REST principles, and stores data in a JSON file instead of a database. It is structured as a multi-page application rather than a single-page app.

One challenge we faced was understanding how the frontend and backend communicate. It took some time to understand how fetch sends data and how the server updates the JSON file correctly. We also had to fix some issues with folder structure and routing.

Overall, this assignment helped me better understand how full-stack web applications work and how REST APIs function.
