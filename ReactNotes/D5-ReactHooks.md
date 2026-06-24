# ⚛️ React Day 4 — Hooks, State & Counter App

## 🎯 Learning Objective

The main goal of this project was to understand **Hooks**, specifically the **`useState()` Hook**, and learn how React updates the UI dynamically when data changes.

---

# 🪝 Hooks in React

## What are Hooks?

Hooks are special functions provided by React that allow functional components to use React features such as:

* State Management
* Lifecycle Methods
* Context API
* Side Effects

Before Hooks, these features were only available in class components.

React Hooks were introduced in **React 16.8**.

---

## Why Do We Need Hooks?

Normally, variables do not cause the UI to update.

Example:

```javascript
let counter = 0;

counter++;
```

The value changes internally, but React does not know it needs to update the screen.

Hooks solve this problem.

---

# useState() Hook

## What is useState()?

`useState()` is a Hook that allows a component to store and update data.

When the state changes, React automatically re-renders the component.

---

## Importing useState

```javascript
import { useState } from "react";
```

---

## Syntax

```javascript
const [state, setState] = useState(initialValue);
```

---

## Example

```javascript
const [counter, setCounter] = useState(0);
```

### Breakdown

```javascript
counter
```

Current value of state.

```javascript
setCounter
```

Function used to update state.

```javascript
0
```

Initial value.

---

## Visual Representation

```text
useState(0)

      ↓

counter = 0

      ↓

setCounter(5)

      ↓

counter = 5

      ↓

React Re-renders UI
```

---

# State

## What is State?

State is data that belongs to a component and can change over time.

Example:

```javascript
const [counter, setCounter] = useState(0);
```

Here, `counter` is the state.

---

## Updating State

Instead of:

```javascript
counter = counter + 1;
```

Use:

```javascript
setCounter(counter + 1);
```

Because React only tracks updates made through the setter function.

---

# Event Handling

## What is Event Handling?

React allows functions to run when user interactions occur.

Examples:

* Click
* Hover
* Keyboard Input
* Form Submission

---

## onClick Event

```jsx
<button onClick={IncreaseFun}>
  +
</button>
```

When the button is clicked:

```javascript
IncreaseFun()
```

runs automatically.

---

# Counter Application Logic

## Increase Counter

```javascript
const IncreaseFun = () => {
  if (counter < 20) {
    setCounter(counter + 1);
  }
};
```

### Purpose

* Increases counter value.
* Stops at 20.

---

## Decrease Counter

```javascript
const DecreaseFun = () => {
  if (counter > 0) {
    setCounter(counter - 1);
  }
};
```

### Purpose

* Decreases counter value.
* Prevents negative values.

---

## Reset Counter

```javascript
const ResetFun = () => {
  setCounter(0);
};
```

### Purpose

Resets the counter back to zero.

---

# Conditional Rendering

## What is Conditional Rendering?

Showing or hiding UI elements based on a condition.

---

## Example

```jsx
{counter === 20 && (
  <div>
    Maximum count limit reached!
  </div>
)}
```

---

## How It Works

When:

```javascript
counter === 20
```

returns:

```javascript
true
```

React renders the div.

---

When:

```javascript
counter === 20
```

returns:

```javascript
false
```

React renders nothing.

---

## Concept

```jsx
condition && JSX
```

means:

```javascript
if(condition){
   render JSX
}
```

---

# JSX Comments

## JavaScript Comments

```javascript
// Single Line

/*
 Multi-line
 Comment
*/
```

---

## JSX Comments

Inside JSX:

```jsx
{/* This is a JSX Comment */}
```

Example:

```jsx
<div>
  {/* Counter Value */}
  <h2>{counter}</h2>
</div>
```

---

# Dynamic UI with State

One of the most important concepts learned:

```javascript
setCounter(counter + 1);
```

Whenever state changes:

1. React detects the update.
2. Component re-renders.
3. UI updates automatically.

No manual DOM manipulation is required.

---

# Styling React Components

A separate CSS file was created:

```javascript
import "./Counterapp.css";
```

This allows styling components independently.

---

# CSS Concepts Practiced

## Flexbox

```css
display: flex;
justify-content: center;
align-items: center;
```

Used to center content.

---

## Gradient Background

```css
background: linear-gradient(
  135deg,
  #667eea,
  #764ba2
);
```

Creates a modern background effect.

---

## Hover Effects

```css
button:hover {
  transform: scale(1.1);
}
```

Creates an animation when hovering.

---

## Border Radius

```css
border-radius: 10px;
```

Creates rounded corners.

---

# Dark Mode Concept

A new state can be introduced:

```javascript
const [darkMode, setDarkMode] = useState(false);
```

Purpose:

* Store theme information.
* Switch between Light Mode and Dark Mode.
* Apply different CSS classes dynamically.

This demonstrates how state can control not only data but also appearance.

---

# Key Concepts Learned

✅ React Hooks

✅ useState()

✅ State Management

✅ Event Handling

✅ onClick Events

✅ Conditional Rendering

✅ JSX Syntax

✅ JSX Comments

✅ React Re-rendering

✅ Component Styling

✅ Flexbox

✅ Hover Effects

✅ Dynamic UI Updates

---

# Project Summary

The Counter App was the first practical React project used to understand how React manages and updates UI through state.

The project demonstrated:

* Creating state using `useState()`
* Updating state with setter functions
* Handling user interactions
* Rendering UI conditionally
* Styling React components
* Building interactive interfaces without manually manipulating the DOM

This project forms the foundation for future React topics such as:

* Props
* Component Reusability
* Forms
* useEffect()
* API Integration
* Context API
* Routing
* State Management Libraries
