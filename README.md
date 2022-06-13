# Cheat-Chat App

A Full Stack Chatting App with OTP based(passwordless) authentication and uses Socket.io for real time communication.

An application uses 3 modules:
1. Authentication Module
2. Main(Chatroom) Module
3. Frontend Module

Nginx is used to integrate all these modules together.

Link for authentication Module: 
https://github.com/Gopi1422/SMS-based-Passwordless-Authentication.git

## Tech Stack

**Client:** React JS

**Server:** Node JS, Express JS

**Database:** Mongo DB
  
## Run Locally

### 1. Start Authentication Module:

Clone the Passwordless Authentication Project

```bash
  git clone https://github.com/Gopi1422/SMS-based-Passwordless-Authentication.git
```

Go to the project directory

```bash
  cd SMS-based-Passwordless-Authentication
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

### 2. Start Main(Chatroom) Module:

Clone Main Project

```bash
  git clone https://github.com/Gopi1422/Chat-room.git
```

Go to the project directory

```bash
  cd Chat-room
```

Install dependencies

```bash
  npm install
```

```bash
  cd frontend/
  npm install
```

Start the server

```bash
  npm run start
```
Start the Client

```bash
  //open new terminal
  cd frontend
  npm start
```

### 3. Configure and Start Nginx:

Download latest stable version of Nginx from http://nginx.org/en/download.html. Here I have downloaded nginx-1.22.0.

Unzip the folder and go to the nginx-1.22.0 directory and start the cmd in the same location.

Go to the /conf directory and replace nginx.conf file with file: [nginx.conf](https://github.com/Gopi1422/Chat-room/blob/98a297a2af2cfcd2c0b56b4db970c384e4925ea6/nginx.conf).

To Start Nginx, run below command in cmd

```bash
start nginx
```

### 4. Run Project in Browser:

Open any browser and run project on http://localhost
  
# Features

Authenticaton

Real Time Chatting with Typing indicators

One to One chat

Search Users

Create Group Chats

Add or Remove users from group

View Other user Profile


  
