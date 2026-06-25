# 🎨 React Background Changer - Notes

## Project Goal

Create a web page whose background color changes when the user clicks different color buttons.

---

# Concepts Used

## 1. useState()

### Purpose

`useState()` allows React to store and update data.

### Syntax

```jsx
const [background, setBackground] = useState("white");
```

### Breakdown

```jsx
background
```

* Stores the current background value.

```jsx
setBackground()
```

* Updates the background value.

```jsx
useState("white")
```

* Sets the initial background color.

---

# 2. Dynamic Styling

### Code

```jsx
style={{ background: background }}
```

### Explanation

React reads the current value of `background` and applies it as the page background.

Example:

```jsx
background = "red"
```

becomes:

```css
background: red;
```

For gradients:

```jsx
background = "linear-gradient(to right, red, blue)"
```

becomes:

```css
background: linear-gradient(to right, red, blue);
```

---

# 3. Event Handling

### Code

```jsx
onClick={() => setBackground("red")}
```

### Flow

```text
User Clicks Button
        ↓
onClick Fires
        ↓
setBackground("red")
        ↓
State Updates
        ↓
Component Re-renders
        ↓
UI Updates
```

---

# 4. React Re-rendering

Whenever state changes:

```jsx
setBackground(...)
```

React:

1. Updates the state.
2. Runs the component again.
3. Updates only the changed parts of the UI.

Example:

```jsx
background = "white"
```

↓

```jsx
setBackground("blue")
```

↓

```jsx
background = "blue"
```

↓

Background changes to blue.

---

# 5. Arrays

Instead of manually creating many buttons:

```jsx
<button></button>
<button></button>
<button></button>
```

Store data inside an array.

Example:

```jsx
const colors = [
  "#ef4444",
  "#22c55e",
  "#3b82f6",
];
```

---

# 6. map()

### Purpose

Used to create UI elements from array data.

### Syntax

```jsx
array.map((item) => ...)
```

### Example

```jsx
colors.map((color) => (
  <button />
))
```

React creates one button for every color inside the array.

### Mental Model

```text
Array Item
    ↓
Create UI
```

---

# 7. map() Parameters

### First Parameter

```jsx
color
```

Represents the current item.

Example:

```jsx
color = "#ef4444"
```

---

### Second Parameter

```jsx
index
```

Represents the position.

Example:

```text
0 → red
1 → green
2 → blue
```

---

# 8. key Prop

### Purpose

Helps React uniquely identify items in a list.

Example:

```jsx
key={index}
```

React uses keys during re-rendering to track which items changed.

### Beginner Rule

For static lists:

```jsx
key={index}
```

is acceptable.

For dynamic lists:

```jsx
key={item.id}
```

is preferred.

---

# 9. Solid Colors vs Gradients

## Solid Color

```jsx
setBackground("#ef4444")
```

Uses:

```jsx
style={{ background: background }}
```

---

## Gradient

```jsx
setBackground(
  "linear-gradient(to right, red, blue)"
)
```

Uses:

```jsx
style={{ background: background }}
```

### Important

```jsx
backgroundColor
```

cannot display gradients.

Use:

```jsx
background
```

instead.

---

# 10. Reset Button

### Code

```jsx
<button
  onClick={() => setBackground("white")}
>
  Reset
</button>
```

### Purpose

Returns the page to its default background.

---

# Concepts Learned from This Project

✅ Components

✅ JSX

✅ useState

✅ Event Handling

✅ State Updates

✅ Re-rendering

✅ Dynamic Styling

✅ Arrays

✅ map()

✅ Keys

✅ Gradients

✅ Tailwind CSS Styling

---

# Project Flow

```text
Page Loads
    ↓
useState("white")
    ↓
background = white
    ↓
Render UI
    ↓
User Clicks Color Button
    ↓
setBackground(...)
    ↓
State Changes
    ↓
React Re-renders
    ↓
Background Updates
```

This project demonstrates one of the most important React patterns:

State → Re-render → UI Update
