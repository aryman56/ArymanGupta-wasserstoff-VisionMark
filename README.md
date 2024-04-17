
# Features
- User Registration: Allows new users to create an account.
- User Login: Enables users to log in with their credentials.
- JWT Authentication: Secures user sessions using JSON Web Tokens.
- Responsive Design: Ensures a great user experience across various devices.
- Yolo Model V8-In this we have to upload one image of car with number plate it fetches the number plate,
  and the second image we upload is a logo that is placed on number plate and then we get a base64 encoded 
  string and then we show the image response in frontend.
- DashBoard-Integrated Yolo Model V8 Api made in python. 
  

# Technologies Used

Frontend:
- React.js: For building the user interface.
- Toastify: To display notifications and alerts.
- React Router DOM: For managing navigation in the application.

Backend:
- Node.js: As the runtime environment.
- Express: Web application framework for Node.js.
- MongoDB: Database to store user credentials and session data.

# Installation
1. Clone the repository:

```
git clone https://github.com/Kuzma02/MERN-Login-And-Register-With-JSON-Web-Token.git
```

2. Install dependencies:
Navigate to the project directory:
```
cd folder-name
```

3. Install backend dependencies:
```
npm install
```

4. Install frontend dependencies:

```
cd client
npm install
```

5. Configure MongoDB and JWT:
Visit MongoDB website, create account, database and take connection string.
After that generate 256 bits random key and add it to .env file.
Create the .env file in the root directory with the following contents:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

6. Run the application:
Start the backend server:
```
node app.js
```

7. In a new terminal, start the frontend:
```
cd client
npm run dev
```

# Usage
After starting the application, visit http://localhost:5173 in your browser. Users can now register for a new account or log in using existing credentials.
