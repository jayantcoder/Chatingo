Chatingo: A Real-Time Chat Application
Chatingo is a modern real-time messaging application designed to provide seamless and instant communication. Inspired by popular chat platforms, it includes features like user authentication, real-time messaging, and responsive design, all powered by React and Firebase.

Features
User Authentication: Secure sign-up and log-in using Firebase Authentication.
Real-Time Messaging: Instant message synchronization using Firestore.
User Search: Easily find and connect with other users.
Responsive Design: Optimized for various devices using SCSS.
Media Support: Share and display images, with file storage powered by Firebase Storage.
Tech Stack
Frontend
React.js: Dynamic and interactive UI.
SCSS: For styling and responsive design.
Backend
Firebase Firestore: NoSQL database for real-time message synchronization.
Firebase Authentication: Secure user authentication.
Firebase Storage: For handling image uploads.
Getting Started
Follow these steps to set up and run the project on your local machine:

Prerequisites
Node.js installed on your system.
Firebase account with a Firestore database and Firebase Authentication configured.
Installation
Clone the repository: 
git clone https://github.com/jayantcoder/Chatingo.git 
Navigate to the project directory:
cd Chatingo 
Install the dependencies:

npm install  
Create a .env file in the root directory and add your Firebase configuration:

env
Copy code
REACT_APP_API_KEY=your-api-key  
REACT_APP_AUTH_DOMAIN=your-auth-domain  
REACT_APP_PROJECT_ID=your-project-id  
REACT_APP_STORAGE_BUCKET=your-storage-bucket  
REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id  
REACT_APP_APP_ID=your-app-id  
Start the development server:

npm start  
Open the app in your browser:

http://localhost:3000  
Usage
Sign Up/Login: Create an account or log in with your credentials.
Search Users: Use the search feature to find other registered users.
Chat in Real-Time: Send and receive messages instantly.
Media Sharing: Upload and share images during conversations.
