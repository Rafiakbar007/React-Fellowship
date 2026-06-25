# React Day 6 - Props & Reusable Components

## 📌 What I Learned Today

Today I learned one of the most important concepts in React:

* Props (Properties)
* Passing data between components
* Creating reusable components
* Default Props
* Dynamic UI rendering
* Using Tailwind CSS with reusable components

---

# What are Props?

Props (short for Properties) are used to pass data from a parent component to a child component.

Think of props as function arguments.

### Example

Parent Component:

```jsx
<Cardcomp cardname="Flower Class" />
```

Child Component:

```jsx
function Cardcomp({ cardname }) {
  return <h1>{cardname}</h1>;
}
```

Output:

```text
Flower Class
```

---

# Why Do We Need Props?

Without props, every component would contain hardcoded data.

Example:

```jsx
function Cardcomp() {
  return <h1>Flower Class</h1>;
}
```

Problem:

If I want 10 different cards, I would have to create 10 separate components.

Props solve this problem.

```jsx
<Cardcomp cardname="Flower Class" />
<Cardcomp cardname="Garden Class" />
<Cardcomp cardname="Nature Class" />
```

One component can now create multiple cards with different data.

---

# Reusable Components

A reusable component is a component that can be used multiple times with different data.

### My Card Component

```jsx
<Cardcomp
  cardname="Flower Class"
  btnText="Click Me"
  cardimg="./flower.png"
/>

<Cardcomp
  cardname="Garden Class"
  cardimg="./pinkflower.png"
/>
```

Instead of creating separate card files, I reused the same component.

Benefits:

* Less code
* Easier maintenance
* Better scalability
* Cleaner project structure

---

# Destructuring Props

Instead of writing:

```jsx
function Cardcomp(props) {
  return <h1>{props.cardname}</h1>;
}
```

I learned to destructure props directly:

```jsx
function Cardcomp({ cardname, btnText, cardimg }) {
  return <h1>{cardname}</h1>;
}
```

This makes the code cleaner and easier to read.

---

# Default Props Value

I learned that I can provide default values.

Example:

```jsx
function Cardcomp({
  cardname,
  btnText = "button default value",
  cardimg
}) {
```

Now if I don't pass `btnText`, React automatically uses:

```text
button default value
```

Example:

```jsx
<Cardcomp cardname="Garden Class" />
```

Output:

```text
button default value
```

---

# Passing Images Through Props

I learned that images can also be passed as props.

Parent:

```jsx
<Cardcomp
  cardimg="./flower.png"
/>
```

Child:

```jsx
<img src={cardimg} alt="Cover" />
```

This allows the same component to display different images.

---

# Strings vs JavaScript Expressions

### String

```jsx
cardname="Flower Class"
```

Passed as a string.

### JavaScript Expression

```jsx
cardimg={flowerImage}
```

Passed as a variable.

Important Rule:

```jsx
""
```

Used for strings.

```jsx
{}
```

Used for JavaScript variables and expressions.

---

# Component Tree in My Project

```text
Cardapp
│
├── Cardcomp
│     ├── Flower Class Card
│
└── Cardcomp
      ├── Garden Class Card
```

One component creates multiple UI cards.

---

# Tailwind CSS Learning

I also learned that Tailwind CSS becomes globally available once the CSS file containing:

```css
@import "tailwindcss";
```

is imported somewhere in the application.

Example:

```text
App.css
    ↓
Imported in Chai.jsx
    ↓
Chai.jsx imported in App.jsx
    ↓
Tailwind available throughout the application
```

This happens because CSS is global by default.

---

# Questions

## What are Props?

Props are read-only data passed from a parent component to a child component.

---

## Why use Props?

Props make components reusable and dynamic.

---

## Can a Child Component Modify Props?

No.

Props are read-only.

A child component can receive props but should not modify them.

---

## What is a Reusable Component?

A component that can be used multiple times with different data.

Example:

```jsx
<Cardcomp cardname="Flower Class" />

<Cardcomp cardname="Garden Class" />
```

---

## What is Destructuring in React?

Extracting values directly from the props object.

Example:

```jsx
function Cardcomp({ cardname }) {
}
```

instead of

```jsx
function Cardcomp(props) {
}
```

---

## Difference Between Props and State?

### Props

* Passed from parent to child
* Read-only
* Used for communication

### State

* Managed inside a component
* Can change over time
* Causes re-rendering

---

# Key Takeaways

✅ Props allow data transfer from parent to child.

✅ Props make components reusable.

✅ One component can create many UI elements.

✅ Destructuring makes code cleaner.

✅ Default values prevent missing prop issues.

✅ Images can be passed through props.

✅ Strings use `""`, variables use `{}`.

✅ Tailwind CSS becomes available globally once loaded into the application.

✅ Reusable components are a core concept of React and are commonly asked in interviews.
