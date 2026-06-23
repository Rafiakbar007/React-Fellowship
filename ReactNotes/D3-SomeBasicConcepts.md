
# 🚀 React Day 3 : Some Basic Concepts

## 📦 1. Bundler (Very Important Concept)

A **bundler** is a tool that takes all your code files (JS, CSS, images, etc.) and combines them into a **single optimized output** for the browser.

### 🔧 Why bundler is needed?

* Browsers cannot efficiently handle many separate files
* Improves performance
* Handles modern JavaScript (ES6+) compatibility
* Optimizes and compresses code

### ⚙️ Common bundlers:

* Webpack (used in CRA)
* Vite (modern and fast)
* Parcel (zero config)

### 📌 Example:

Your React project:

```
src/
  App.js
  index.js
  styles.css
```

After bundling → single optimized output in `build/`

---

## ⚛️ 2. React DOM vs React Native

### 🌐 React DOM

* Used for **web applications**
* Works with browser DOM (HTML elements)
* Example: websites, dashboards

👉 Package: `react-dom`

---

### 📱 React Native

* Used for **mobile applications**
* Does NOT use HTML or DOM
* Uses native components like:

  * View (instead of div)
  * Text (instead of p)

👉 Used for Android + iOS apps

---

## 🧠 3. Library vs Framework vs Utility

### 📚 Library

* A tool that you **call when you need it**
* You control the flow
* Example: React

👉 React = UI library

---

### 🏗️ Framework

* Gives you a **full structure**
* Framework controls your code flow
* Example: Angular, Next.js

👉 Framework = “you follow its rules”

---

### 🔧 Utility

* Small helper functions/tools
* Used for specific tasks
* Example:

  * Lodash
  * date-fns

---

## 📦 4. package.json (Heart of React Project)

This file contains **all project configuration and dependencies**.

---

### 📌 Main sections:

## 🧪 Testing Libraries

Used to test your React components.

Example:

* Jest
* React Testing Library

---

## ⚛️ react-scripts

* Comes with Create React App
* Handles:

  * starting project
  * building project
  * testing
  * configuration (hidden Webpack)

👉 You don’t manually configure Webpack because of this

---

## 📊 Web Vitals

* Used for measuring **performance of your app**
* Example metrics:

  * loading speed
  * responsiveness
  * layout stability

---

## ▶️ Scripts Section

Controls commands you run:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

### 🟢 npm start

Runs development server

### 🏗 npm run build

* Creates optimized production folder
* Output folder: `build/`
* Contains:

  * HTML
  * CSS
  * JS (minified + optimized)

👉 This is what you deploy

### 🧪 npm test

Runs test cases

### ⚠️ npm run eject

* Exposes hidden configuration (Webpack, Babel)
* Irreversible step in CRA

---

## 🌍 Browserlist

Defines which browsers your app supports.

Example:

```json
"browserslist": [
  ">0.2%",
  "not dead",
  "not op_mini all"
]
```

👉 Ensures compatibility across browsers

---

## 🛠️ Development vs Production

### 🧑‍💻 Development

* Uses `npm start`
* Fast refresh
* Debugging enabled
* Not optimized

### 🚀 Production

* Uses `npm run build`
* Optimized & minified code
* Ready for deployment

---

## 📌 Key Summary

* Bundler = combines + optimizes code
* React DOM = web apps
* React Native = mobile apps
* React = library, not framework
* package.json = project brain
* build folder = final production output
* scripts = commands for project control

---

