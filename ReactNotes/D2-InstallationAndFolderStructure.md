# Day 2 – React Installation & Folder Structure

## 1. Installation Process

To start working with React, we first need to set up a development environment. The most common and modern way is using **Vite** (recommended over older CRA setup).

### Steps to install React using Vite:

1. Install Node.js (if not already installed)

   - Node.js comes with npm (Node Package Manager)
   - Check installation:
   ```bash
   node -v
   npm -v

2. Create a React project using Vite:

    - npm create vite@latest

    - Enter project name:

    - project-name

    - Select framework:

    - React

    - Select variant:

    - JavaScript (or TypeScript if needed)

    - Move into project folder:

    - cd project-name

    - Install dependencies:

    - npm install

    - Run development server:

    - npm run dev

    - Now React app will run on a local server (usually http://localhost:5173).

## 2. Folder Structure Explanation (Vite React)

After setup, React project contains important folders and files:

project-name
│
├── node_modules
├── public
├── src
│   ├── assets
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js

📁 node_modules
Contains all installed dependencies (React, Vite, etc.)
Automatically generated
Do NOT modify it manually

📁 public
Stores static files (images, icons, etc.)
Files here are directly accessible in browser

📁 src (Main working folder)
This is where we write most of our React code.

🔹 App.jsx
Main component of the application
Default starting UI logic is written here

🔹 main.jsx
Entry point of React app
Renders App.jsx into HTML

🔹 assets
Used for images, logos, and other resources

🔹 index.css
Global styling file

📄 index.html
Single HTML file of React app
Contains root div where React injects the app

📄 package.json
Contains project metadata
Lists dependencies and scripts like:
npm run dev
npm run build

⚙️ vite.config.js
Configuration file for Vite
Controls build and development settings


## Summary
React setup is now done using Vite (fast and modern)
src folder is the most important for development
main.jsx connects React with HTML
App.jsx is where UI starts building