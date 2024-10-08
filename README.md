# Anonymous Chat Application

A real-time chat application that allows multiple users to communicate anonymously. The project is built using **Node.js** with **Socket.IO** for real-time communication, and **MySQL** for user authentication. The front-end is styled with **CSS** for a clean, modern look.

## Features

- **Real-Time Chat:** Users can send and receive messages in real-time. Messages are visible to all connected users.
- **User Authentication:** Users must sign up and log in with a username and password. The username is displayed alongside each message.
- **Logout Functionality:** Users can log out from the chat at any time, and they will be redirected to the login page.
- **Responsive Design:** The application is responsive and adapts well to different screen sizes.

## Technologies Used

- **Back-end:** Node.js, Express.js
- **Real-Time Communication:** Socket.IO
- **Database:** MySQL for storing user data (username, password)
- **Front-end:** HTML, CSS, JavaScript
- **Version Control:** Git and GitHub

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- [MySQL](https://www.mysql.com/) installed and running
- A MySQL database created with a `users` table containing `id`, `username`, and `password` fields.

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/potthuri-charan/Anonymous-Chat.git

Navigate to the project directory:

bash
Copy code
cd Anonymous-Chat
Install the dependencies:

bash
Copy code
npm install
Set up the MySQL database:

Create a .env file in the root of your project and add the following details:

bash
Copy code
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
Replace your_mysql_username, your_mysql_password, and your_database_name with your actual MySQL credentials.

Run the server:

bash
Copy code
node server.js
The server should now be running on http://localhost:3000.

Usage
Sign up:

Open the application in your browser at http://localhost:3000/signup.
Create a new user account by providing a username and password.
Log in:

After signing up, log in with your credentials at http://localhost:3000/login.
Start Chatting:

Once logged in, you will be redirected to the chat room. Start sending messages, and they will be visible to all users in real-time.
To log out, click the Logout button, and you will be redirected to the login page.
Project Structure
bash
Copy code
.
├── public
│   ├── chat.html         # The main chat interface
│   ├── login.html        # Login page
│   ├── signup.html       # Signup page
│   ├── styles.css        # CSS for styling the pages
├── routes
│   ├── auth.js           # Handles user authentication (login, signup)
├── views
│   ├── index.html        # Main entry page
├── server.js             # The main server file
├── package.json          # NPM dependencies and scripts
└── README.md             # Project documentation
Future Improvements
Private Chat Rooms: Adding support for private chat rooms between users.
User Profiles: Enhance user profiles with avatars and status updates.
Message Persistence: Store chat history in a database for future retrieval.
Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Developed with ❤️ by Potthuri Charan
