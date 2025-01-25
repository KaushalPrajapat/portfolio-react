import eisystem from "../assets/eisystem.png";
import capgemini from "../assets/capgemini.png";

import noteapp from "../assets/noteapp.png";
import shopapp from "../assets/shopapp.png";
import microservice from "../assets/microservice.jpg";
import cricinfo from "../assets/cricinfo.png";
import  thymeleaf from "../assets/thymleaf.png";
import jsoup from '../assets/jsoup.png'
import oauth2 from '../assets/oauth2.png'

import react from "../assets/react.png";
import redux from "../assets/redux.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import tailwind from "../assets/tailwindcss.svg";
import jwt from "../assets/jwt.svg";
import socketio from "../assets/socketio.svg";
import oauth from "../assets/oauth.svg";
import chat from "../assets/chat.svg";
import blogging from "../assets/blogging.svg";
import javascript from "../assets/javascript.png";
import git from "../assets/git.png";
import youtube from "../assets/youtube.svg";
import rapid from "../assets/rapidapi.svg";
import java from "../assets/java.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import angular from "../assets/angular.png";
import typescript from "../assets/typescript.png";
import spring from "../assets/spring-boot.svg";
import mysql from "../assets/mysql.png";
import abap from "../assets/abap.png";
import intellij from "../assets/intellij.svg";

import postman from "../assets/postman.svg";

import docker from "../assets/docker.png";
import github from "../assets/github.png";

import python from "../assets/python.png";

import postgres from "../assets/postgres.png";
import vscode from "../assets/vscode.svg";

export const eisystemData = [
  {
    key: 1,
    text: "Developed a face identification and recognition system using advanced computer vision techniques.",
  },
  {
    key: 3,
    text: "Integrated OpenCV and Python to process real-time image and video streams for face detection.",
  },
  {
    key: 4,
    text: "Implemented machine learning algorithms for facial feature recognition and classification.",
  },
  {
    key: 5,
    text: "Enhanced the system’s accuracy by fine-tuning parameters and leveraging pre-trained models.",
  },
  {
    key: 6,

    text: "Conducted testing and validation to ensure the reliability and scalability of the application.",
  },
  {
    key: 7,

    text: "Collaborated with a team to document and present the project findings effectively.",
  },
  {
    key: 8,
    text: "Published the project on GitHub to demonstrate proficiency in version control and open-source contributions ",
  },
  {
    key: 9,
    text: "Gained valuable hands-on experience with relevant technologies and received positive feedback for my work and learning ability.",
  },
];
export const capgeminiData = [
  {
    key: 1,
    text: "Developed custom SAP ABAP programs and enhancements to streamline complex business processes.",
  },
  {
    key: 2,
    text: "Implemented performance-optimized code to improve the execution time of critical applications by up to 40%.",
  },
  {
    key: 3,
    text: "Proficient in designing and customizing SAP MDG data models to meet specific organizational requirements.",
  },
  {
    key: 5,

    text: "Experienced in creating and maintaining custom selection screens, reports, and ALV outputs in ABAP.",
  },
  {
    key: 6,

    text: "Integrated SAP MDG with other systems to ensure consistent and synchronized master data across the enterprise.",
  },
  {
    key: 7,

    text: "Performed root cause analysis and debugging in ABAP to resolve critical production issues.",
  },
  {
    key: 8,

    text: "Collaborated with cross-functional teams to enhance the usability and scalability of SAP MDG solutions.",
  },
];

export const experiences = [
  {
    id: "1",
    company: "Capgemini",
    logo: capgemini,
    location: "Banglore India",
    role: "Backend Developer",
    duration: "March 2023 - Present",
    description: capgeminiData,
  },
  {
    id: "2",
    company: "Ei Systems",
    logo: eisystem,
    location: "Remote",
    role: "Machine Learning and Deep Learning",
    duration: "JUNE 2021 - AUG 2021",
    description: eisystemData,
  },
];

export const projects = [
  {
    id: "1",
    name: "Note Taking App",
    coverImage: noteapp,
    workedOn: ["Website"],
    description: [
      "Built a responsive and user-friendly note-taking application with a clean, minimalistic UI using React and Tailwind CSS.",
      "Implemented CRUD functionality for notes, allowing users to create, edit, delete, and manage their notes efficiently.",
      "Integrated real-time data persistence with a backend API using modern frameworks like Spring Boot.",
      "Enhanced user experience by implementing search and filter features for quick note retrieval.",
      "Developed an authentication system for secure login and registration using JWT-based authorization.",
      "Designed a light and visually appealing color scheme to improve readability and user engagement.",
      "Optimized app performance by employing efficient state management techniques and API calls.",
      "Ensured scalability and reliability by following modular code practices and implementing robust error handling.",
      "Deployed the application on a cloud platform (e.g., AWS, Heroku) for global accessibility and availability.",
      "Showcased modern development practices, including responsive design and adherence to coding standards.",
    ],
    technologies: [
      {
        logo: javascript,
        name: "Javascript",
      },
      {
        logo: react,
        name: "React.js",
      },
      {
        logo: spring,
        name: "Spring Boot",
      },
      {
        logo: tailwind,
        name: "Tailwind CSS",
      },
      {
        logo: java,
        name: "Java ",
      },
      {
        logo: mysql,
        name: "Mysql",
      },
      {
        logo: oauth,
        name: "Oauth",
      },
      {
        logo: jwt,
        name: "JWT",
      },
      {
        logo: git,
        name: "Git",
      },
    ],
    link: "https://github.com/KaushalPrajapat/notes-full-stack-app",
  },
  {
    id: "2",
    name: "Shopping App Backend",
    coverImage: shopapp,
    description: [
      "Developed a microservice-based shopping app backend using Spring Boot to ensure modularity and scalability.",
      "Designed and implemented RESTful APIs for product catalog management, user authentication, and order processing.",
      "Integrated Spring Cloud components for inter-service communication, configuration management, and service discovery.",
      "Implemented robust custom exception handling to provide meaningful error responses and improve debugging efficiency.",
      "Adopted role-based authentication and authorization using Spring Security and JWT tokens to secure the microservices.",
      "Utilized Hibernate and JPA for seamless ORM integration and optimized database interactions.",
      "Ensured high performance with asynchronous communication and efficient query execution for handling large-scale data.",
      "Incorporated API Gateway for routing requests and centralized access management in the microservices architecture.",
      "Performed extensive unit and integration testing using JUnit and Mockito to ensure functionality and reliability.",
      "Documented API endpoints using Swagger for clear and developer-friendly API references.",
    ],
    workedOn: ["Website"],
    technologies: [
      {
        logo: spring,
        name: "Spring Boot",
      },
      {
        logo: java,
        name: "Java ",
      },
      {
        logo: microservice,
        name: "Microservice ",
      },
      {
        logo: docker,
        name: "Docker ",
      },
      {
        logo: mysql,
        name: "Mysql",
      },
      {
        logo: jwt,
        name: "JWT",
      },
      {
        logo: git,
        name: "Git",
      },
    ],
    link: "https://github.com/KaushalPrajapat/shoping-app",
  },
  {
    id: "3",
    name: "CricInfo app",
    coverImage: cricinfo,
    description: [
      "Developed a comprehensive cricket information app providing real-time match updates, player statistics, and team rankings.",
      "Integrated external APIs to fetch live cricket scores, schedules, and detailed match commentary.",
      "Designed an intuitive and mobile-friendly user interface using React and Tailwind CSS for a seamless user experience.",
      "Implemented robust backend services with Spring Boot to manage user data, API requests, and match details.",
      "Enhanced app functionality with features like team and player search, match filtering, and favorite team tracking.",
      "Ensured high performance and scalability by leveraging optimized API calls and modular design practices.",
    ],
    workedOn: ["Website"],
    technologies: [
      {
        logo: spring,
        name: "Spring Boot",
      },
      {
        logo: java,
        name: "Java ",
      },
      {
        logo: thymeleaf,
        name: "Thymleaf",
      },
      {
        logo: jsoup,
        name: "Jsoup",
      },
      {
        logo: mysql,
        name: "Mysql",
      },
      {
        logo: mongodb,
        name: "MongoDB",
      },
      {
        logo: git,
        name: "Git",
      },
    ],
    link: "https://github.com/KaushalPrajapat/cricinfo-app",
  },
];

export const frontend = [
  {
    logo: html,
    name: "HTML",
  },
  {
    logo: css,
    name: "CSS",
  },
  {
    logo: javascript,
    name: "Javascript",
  },
  {
    logo: typescript,
    name: "Typescript",
  },
  {
    logo: angular,
    name: "Angular",
  },
  {
    logo: react,
    name: "React.js",
  },
  {
    logo: tailwind,
    name: "Tailwind CSS",
  },
];
export const backend = [
  {
    logo: mongodb,
    name: "MongoDB",
  },
  {
    logo: postgres,
    name: "PostgreSQL",
  },
  {
    logo: mysql,
    name: "My Sql",
  },
  {
    logo: docker,
    name: "Docker",
  },
  {
    logo: spring,
    name: "Spring Boot",
  },
];
export const other = [
  {
    logo: java,
    name: "Java",
  },
  {
    logo: python,
    name: "Python",
  },
  {
    logo: abap,
    name: "ABAP",
  },
  {
    logo: git,
    name: "Git",
  },
  {
    logo: github,
    name: "Github",
  },
  {
    logo: postman,
    name: "Postman",
  },
  {
    logo: vscode,
    name: "VS Code",
  },
  {
    logo: intellij,
    name: "Intellij",
  },
];
