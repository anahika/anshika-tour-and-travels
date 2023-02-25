<h1 align="center">Anshika Tours and Travels</h1>

This is a sample project for a Tours and Travels website built using React for the frontend and Spring Boot for the backend. The project includes multiple services, including an API gateway, Eureka server, and two microservices for managing user data and tour data.

<div align="center">

![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

</div>

## Technologies Used
The following technologies are used in this project:

  - **React**: A JavaScript library for building user interfaces.
  - **Spring Boot**: A Java framework for building web applications.
  - **PostgreSQL**: An open-source relational database management system.
  - **Netflix Eureka**: A service registry for microservices.
  - **Spring Cloud Gateway**: A tool for building API gateways.
  - **Maven**: A build automation tool for Java projects.
  
## Project Structure
The project is organized into two directories:

- `backend`: Contains the backend services built using Spring Boot. This directory is further divided into the following subdirectories:

  - `api-gateway`: Contains the Spring Cloud Gateway service for routing requests to the appropriate microservice.
  - `eureka-server`: Contains the Eureka server for service discovery.
  - `user_service`: Contains the microservice for managing user data.
  - `tour_service`: Contains the microservice for managing tour data.
Each directory contains a separate Spring Boot project with its own pom.xml file for managing dependencies.

- `frontend`: Contains the frontend built using React. This directory contains all the React components, styles, and assets needed to render the user interface of the Tours and Travels website. The frontend directory is further divided into the following subdirectories:

  - `src`: Contains the React components and application logic.
  - `public`: Contains the index.html file and other static assets.
  
## Usage
To run this project locally, you will need to have Java 8 or higher and PostgreSQL installed on your machine. Follow the instructions below to get started:

  1. Clone the repository to your local machine:
      ```
      git clone https://github.com/anahika/anshika-tour-and-travels.git
      ```
  2. Open the project in your preferred IDE. We recommend using IntelliJ IDEA Community Edition.
  3. Configure your PostgreSQL database credentials in the application.properties file, located in the tour_service folder:
      ```
      spring.datasource.url=jdbc:postgresql://localhost:5432/<your_database_name>
      spring.datasource.username=<your_database_username>
      spring.datasource.password=<your_database_password>
      ```
  4. Run the API Gateway by navigating to the `eureka-server`, `tour_service`, `api-gateway` and `user_service` folder and running the following command:
      ```
      mvn spring-boot:run
      ```
  5. Navigate to the fronted directory:
      ```
      cd frontend
      npm install
      npm start
      ```
  6. Once the project is up and running you can access it on http://localhost:3000.
  
 Note: The above steps assume that you have Maven installed on your machine. If not, you can download it  from [here](https://maven.apache.org/download.cgi).
 
 ## Conclusion
 This project is an example of a Tours and Travels website built using React and Spring Boot. It demonstrates how to build microservices and an API gateway to manage different aspects of a web application, as well as how to integrate a React frontend with a Spring Boot backend. If you have any questions or feedback, please feel free to submit an issue or pull request on the GitHub repository.
