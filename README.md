# User API Project

Hi, I am Rahul and this is a simple NestJS project.

## Overview

This project is a basic User API built with NestJS. It includes CRUD operations for managing users.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd user-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the necessary environment variables.

4. Run the application:
   ```bash
   npm run start
   ```

## API Documentation

### Create User

- **URL**: 

users


- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "username": "string",
    "age": "number"
  }
  ```
- **Response**:
  ```json
  {
    "id": "string",
    "username": "string",
    "age": "number"
  }
  ```

### Get All Users

- **URL**: 

users


- **Method**: `GET`
- **Response**:
  ```json
  [
    {
      "id": "string",
      "username": "string",
      "age": "number"
    }
  ]
  ```

### Get User by ID

- **URL**: `/users/:id`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "id": "string",
    "username": "string",
    "age": "number"
  }
  ```

### Update User

- **URL**: `/users/:id`
- **Method**: `PATCH`
- **Request Body**:
  ```json
  {
    "username": "string",
    "age": "number"
  }
  ```
- **Response**:
  ```json
  {
    "id": "string",
    "username": "string",
    "age": "number"
  }
  ```

### Delete User

- **URL**: `/users/:id`
- **Method**: `DELETE`
- **Response**:
  ```json
  {
    "id": "string",
    "username": "string",
    "age": "number"
  }
  ```