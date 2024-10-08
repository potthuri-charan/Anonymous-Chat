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
