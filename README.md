# Itinerary Planner -  for My Trip Mates
Itinerary Planner is a simple web application that allows users to manage a list of tasks needed for their travels. Users can add, view, update, and delete travel tasks using the application.

## **Project is Live :-** https://frontend-task-ecru.vercel.app/

## **Paras Raut** 
## **Ph No. +91 9356375273** 
## **Linkedin :- https://www.linkedin.com/in/paras-raut/** 
## **Github :- https://github.com/parasraut21** 

## Photos
### Home Page
- the home page of the application. It displays the list of tasks and provides options to add, edit, and delete tasks.
![image](https://github.com/parasraut21/mtm-frontend-Paras_Raut/assets/111653346/efe8ce48-10bb-4e1b-8bed-c5939900cea7)

### Input Validation
- Avoiding user to submit empty task .
![image](https://github.com/parasraut21/mtm-frontend-Paras_Raut/assets/111653346/b8d2c790-e8e2-4a4c-83c5-260809e630e5)

### Add Task
- Users can add a new task by entering the task details into the input field and clicking the "Add" button. This action sends a POST request to the backend API to create a new task.
![image](https://github.com/parasraut21/mtm-frontend-Paras_Raut/assets/111653346/2d8a0627-da4b-4693-9170-4478942f77a3)

### Add More Task
![image](https://github.com/parasraut21/mtm-frontend-Paras_Raut/assets/111653346/28937dd7-45d0-41d4-8f6a-d020009d4faf)

### ReadMore & ReadLess Button to veiw description
![image](https://github.com/parasraut21/mtm-frontend-Paras_Raut/assets/111653346/21a393f3-9188-4c87-a029-0584229175da)

### Delete Task
![image](https://github.com/parasraut21/mtm-frontend-Paras_Raut/assets/111653346/6e76bdbf-935f-4f47-98c3-573e88ccfd8d)

### Edit Task
![image](https://github.com/parasraut21/mtm-frontend-Paras_Raut/assets/111653346/36608f27-e735-4f3c-8855-326355396118)

## Updated Task
![image](https://github.com/parasraut21/mtm-frontend-Paras_Raut/assets/111653346/2db3bfb1-08b5-479a-a600-55302b9a7109)

## Features

- Add Tasks: Users can enter tasks into an input field and add them to their itinerary.
- View Tasks: Display all the tasks in a list.
- Update Tasks: Users can edit the text of tasks in their list.
- Delete Tasks: Users can remove tasks from their list.

## Technologies Used

### Backend

- Node.js: JavaScript runtime environment for server-side code.
- Express.js: Web application framework for Node.js used to create RESTful APIs.
- MongoDB: NoSQL database used to store task data.
- Mongoose: MongoDB object modeling tool for Node.js.
- dotenv: Used to load environment variables from a .env file.
- nodemon: Development dependency for automatic server restarts during development.

### Frontend

- React: JavaScript library for building user interfaces.
- React Hooks: Used for state management and side effects in functional components.
- Fetch API: Used for making HTTP requests to the backend APIs.
- CSS: Used for styling components.
- Bootstrap: CSS framework for responsive web design.

## Folder Structure
ItineraryPlanner/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.js
    │   ├── index.js
    │   └── package.json
    ├── package.json
    └── README.md




## Usage of .env file

1. **Backend**: The `.env` file is used in the backend to store sensitive information like database connection strings. It allows developers to keep their credentials secure and separate from the codebase.


2. **Frontend**: The `.env` file is typically not used in the frontend as it's meant for server-side configurations. However, you can use environment variables in your React application using `process.env`.

## Setup Instructions

1. **Backend Setup**:
- Navigate to the `backend` directory: `cd backend`
- Install dependencies: `npm install`
- Create a `.env` file in the `backend` directory and add your MongoDB connection string.
- Start the server: `npm start`
- The server will run on http://localhost:5000 by default.

2. **Frontend Setup**:
- Navigate to the `frontend` directory: `cd frontend`
- Install dependencies: `npm install`
- Start the development server: `npm start`
- The React app will run on http://localhost:3000 by default.



