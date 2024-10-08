# Anonymous Chat Application

A real-time chat application that enables users to communicate anonymously. This project is built using Node.js and Socket.IO for real-time messaging, with MySQL for user authentication. The front end is styled with CSS for a clean and modern design.

## Features

- **Real-Time Messaging**: Users can send and receive messages instantly, with all participants seeing the messages in real-time.
- **User Authentication**: Secure user sign-up and login with MySQL to store user credentials.
- **Logout Functionality**: Users can log out of the chat room, returning to the login page.
- **Responsive Design**: Works well across different screen sizes and devices.

## Technologies Used

- **Back-end**: Node.js, Express.js
- **Real-Time Communication**: Socket.IO
- **Database**: MySQL for user authentication
- **Front-end**: HTML, CSS, JavaScript
- **Version Control**: Git and GitHub

## Installation

### Prerequisites

- Node.js installed on your machine
- MySQL installed and running
- A MySQL database created with a `users` table containing `id`, `username`, and `password` fields.

### Steps to Install

1. Clone the repository:

    ```bash
    git clone https://github.com/potthuri-charan/Anonymous-Chat.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Anonymous-Chat
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Configure the MySQL database:

    Create a `.env` file in the root of your project and add the following details:

    ```bash
    DB_HOST=localhost
    DB_USER=your_mysql_username
    DB_PASSWORD=your_mysql_password
    DB_NAME=your_database_name
    ```

    Replace `your_mysql_username`, `your_mysql_password`, and `your_database_name` with your actual MySQL credentials.

5. Run the server:

    ```bash
    node server.js
    ```

    The server will be running at `http://localhost:3000`.

## Usage

### Sign Up:

- Open `http://localhost:3000/signup` in your browser.
- Create a new user account by providing a username and password.

### Log In:

- Log in at `http://localhost:3000/login` using the credentials created during sign-up.

### Start Chatting:

- After logging in, you'll be redirected to the chat room where you can start sending messages visible to all users in real-time.
- To log out, click the Logout button, and you will be redirected to the login page.

## Project Structure

```bash
.  
├── public  
│   ├── chat.html       # Main chat interface  
│   ├── login.html      # Login page  
│   ├── signup.html     # Sign-up page  
│   ├── styles.css      # CSS for styling the pages  
├── routes  
│   ├── auth.js         # Handles user authentication (login, signup)  
├── views  
│   ├── index.html      # Main entry page  
├── server.js           # Main server file  
├── package.json        # Dependencies and scripts  
└── README.md           # Project documentation  
```
## Future Improvements

- **Private Chat Rooms**: Add support for private, one-on-one chats between users.
- **User Profiles**: Enhance profiles with features like avatars and user statuses.
- **Message Persistence**: Store chat history in a database for future retrieval and review.

## Contributing

Contributions are welcome! If you'd like to improve this project, feel free to fork the repository, make changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Developed with ❤️ by Potthuri Charan
