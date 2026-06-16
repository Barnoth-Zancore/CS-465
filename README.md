# Travlr Getaways

## Overview

Travlr Getaways is a full stack travel booking web application developed as the final project for CS 465 Full Stack Development at Southern New Hampshire University. The application allows customers to browse available travel packages while providing administrators with a secure single-page application for managing travel content.

The project was built using the MEAN stack (MongoDB, Express, Angular, and Node.js) and demonstrates full stack development concepts including database integration, RESTful APIs, authentication, Angular components, and application architecture.

---

## Features

### Customer-Facing Website

* Browse available travel packages
* View trip details and pricing
* Responsive user interface
* Dynamic content rendered from MongoDB

### Administrator SPA

* View all travel packages
* Add new trips
* Edit existing trips
* Delete trips
* Secure administrator login
* JWT authentication and protected API endpoints
* Angular component-based architecture

---

## Technologies Used

### Front End

* Angular
* TypeScript
* HTML
* CSS
* Bootstrap

### Back End

* Node.js
* Express.js
* RESTful API

### Database

* MongoDB
* Mongoose ODM

### Security

* JSON Web Tokens (JWT)
* Password Hashing
* Protected Administrative Routes

### Development Tools

* Git
* GitHub
* Postman
* Visual Studio Code

---

## API Endpoints

| Method | Endpoint             | Description                |
| ------ | -------------------- | -------------------------- |
| GET    | /api/trips           | Retrieve all trips         |
| GET    | /api/trips/:tripCode | Retrieve a specific trip   |
| POST   | /api/trips           | Create a new trip          |
| PUT    | /api/trips/:tripCode | Update an existing trip    |
| DELETE | /api/trips/:tripCode | Delete a trip              |
| POST   | /api/login           | Authenticate administrator |
| POST   | /api/register        | Register administrator     |

---

## Project Architecture

The application follows a full stack architecture using the MEAN stack:

### Presentation Layer

* Customer-facing Express website
* Angular administrator SPA

### Application Layer

* Express routing
* Controllers
* Authentication services
* RESTful API endpoints

### Data Layer

* MongoDB database
* Mongoose schemas and models

JSON is used throughout the application to transfer data between the client, server, and database.

---

## Testing

The application was tested using:

* Browser-based testing
* Angular component testing
* Postman API testing
* CRUD operation verification
* Authentication testing
* JWT security testing

Testing confirmed successful database retrieval, trip creation, trip updates, trip deletion, user registration, and administrator authentication.

---

## Lessons Learned

This project provided hands-on experience building a complete full stack web application from initial planning through final deployment. Key concepts learned include:

* MEAN stack development
* RESTful API design
* MongoDB database integration
* Angular SPA development
* Authentication and authorization
* GitHub version control
* Software architecture documentation
* Full stack troubleshooting and debugging

One of the most valuable lessons was understanding how the frontend, backend, API, authentication system, and database all work together to create a modern web application.

---

## Author

**Morgun**

Southern New Hampshire University
CS 465 Full Stack Development

---

## Repository Branches

* module1
* module2
* module3
* module4
* module5
* module6
* module7

Each branch represents a major stage of development throughout the course and demonstrates the progression of the Travlr Getaways application from an initial Express website to a fully functional secured MEAN stack application.
