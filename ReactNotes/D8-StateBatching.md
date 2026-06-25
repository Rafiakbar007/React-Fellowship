

# The Code

Suppose your count is initially:

```jsx
const [count, setCount] = useState(0);
```

Now you write:

```jsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

You might expect:

```text
0 → 1 → 2 → 3 → 4
```

and think the final value should be:

```text
4
```

But React will make it:

```text
1
```

Why?

---

# What React Actually Sees

Current count:

```text
count = 0
```

Now React reads your code:

```jsx
setCount(count + 1);
```

becomes

```jsx
setCount(0 + 1);
```

which is

```jsx
setCount(1);
```

Second line:

```jsx
setCount(count + 1);
```

React still sees:

```jsx
setCount(0 + 1);
```

which is

```jsx
setCount(1);
```

Third line:

```jsx
setCount(1);
```

Fourth line:

```jsx
setCount(1);
```

So React receives:

```jsx
setCount(1);
setCount(1);
setCount(1);
setCount(1);
```

---

# Result

React says:

> "Okay, you want count to become 1."

Final value:

```text
1
```

not

```text
4
```

---

# Why Doesn't Count Change Immediately?

Because **state updates are asynchronous**.

When you call:

```jsx
setCount(...)
```

React does **not immediately change the state**.

Instead it says:

```text
"I'll update it later."
```

and puts the update in a queue.

This behavior is called:

# Batching

React groups multiple state updates together and processes them later.

Example:

```jsx
setCount(1);
setCount(1);
setCount(1);
setCount(1);
```

React batches them and performs a single re-render.

---

# How To Actually Increment 4 Times

Use the functional form:

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

Now React processes them one by one.

---

### Step 1

```text
prev = 0
```

```jsx
prev + 1
```

Result:

```text
1
```

---

### Step 2

```text
prev = 1
```

```jsx
prev + 1
```

Result:

```text
2
```

---

### Step 3

```text
prev = 2
```

Result:

```text
3
```

---

### Step 4

```text
prev = 3
```

Result:

```text
4
```

Final value:

```text
4
```

---

# Simple Real-Life Example

Imagine you're a teacher.

Current attendance:

```text
0 students
```

Four people come and say:

```text
Attendance = 1
Attendance = 1
Attendance = 1
Attendance = 1
```

Final attendance?

```text
1
```

because everyone used the old value.

---

Now imagine they say:

```text
Add 1 to current attendance
Add 1 to current attendance
Add 1 to current attendance
Add 1 to current attendance
```

Teacher calculates one after another:

```text
0 → 1
1 → 2
2 → 3
3 → 4
```

Final attendance:

```text
4
```

---

# Interview Answer

**Q: Why does this only increment once?**

```jsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

**Answer:**

React batches state updates. All four calls use the same snapshot of `count`, so they all become `setCount(1)`. As a result, the state only updates to `1`.

To perform multiple dependent updates, use the functional updater:

```jsx
setCount(prev => prev + 1);
```

which receives the latest state value for each update.

---

This topic is commonly referred to as:

* **State Batching**
* **Asynchronous State Updates**
* **Functional State Updates** (`prev => prev + 1`)
* **State Update Queue**

These are foundational concepts behind React's rendering and Fiber architecture.

---
# What you absolutely need to know right now

### 1. State updates are not immediate

```jsx
setCount(count + 1);

console.log(count);
```

You might expect:

```text
1
```

But you'll often see:

```text
0
```

because React hasn't updated the state yet.

---

### 2. React batches updates

```jsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

React groups them together instead of re-rendering three times.

This improves performance.

---

### 3. Use functional updates when the next state depends on the previous state

```jsx
setCount(prev => prev + 1);
```

This is the safest approach whenever you're updating based on the current value.

---

# Where is this used in real projects?

A lot more often than beginners realize.

## Example 1: Shopping Cart

```jsx
setCartCount(prev => prev + 1);
```

User clicks:

```text
Add to Cart
```

Each click increases the cart count.

Without functional updates, rapid clicks can sometimes produce unexpected results.

---

## Example 2: Likes on a Post

```jsx
setLikes(prev => prev + 1);
```

Instagram, Facebook, LinkedIn, etc.

Every click updates based on the latest value.

---

## Example 3: Game Score

```jsx
setScore(prev => prev + 10);
```

Player earns points.

The new score depends on the previous score.

---

## Example 4: Notifications

```jsx
setUnread(prev => prev + 1);
```

New notification arrives.

Unread count increases.

---

## Example 5: Stepper Components

```jsx
setStep(prev => prev + 1);
```

Multi-step forms:

```text
Personal Info
↓
Education
↓
Experience
↓
Review
```

The current step depends on the previous step.

---

# When do I NOT need the functional form?

If you're setting a completely new value:

```jsx
setCount(0);
```

or

```jsx
setTheme("dark");
```

or

```jsx
setIsLoggedIn(true);
```

then you don't need:

```jsx
prev => ...
```

because you're not calculating from the previous state.

---

# A React Interview Question

Interviewers love asking:

```jsx
setCount(count + 1);
setCount(count + 1);
```

"What will be the final value?"

Many beginners answer:

```text
2
```

But the correct answer is usually:

```text
1
```

because both updates use the same snapshot of `count`.

Then they ask:

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

Now the answer is:

```text
2
```

---

# How this connects to React Fiber

You recently studied:

* Reconciliation
* Virtual DOM
* Fiber
* Batching

This concept is one of the reasons Fiber exists.

React doesn't immediately update the screen every time you call `setState`.

Instead it:

```text
1. Collects updates
2. Batches them
3. Prioritizes them
4. Re-renders efficiently
```

That's exactly the kind of work React Fiber was designed to handle.

So the bigger picture is:

```text
setState()
    ↓
Update Queue
    ↓
Batching
    ↓
Fiber Scheduler
    ↓
Reconciliation
    ↓
DOM Update
```
