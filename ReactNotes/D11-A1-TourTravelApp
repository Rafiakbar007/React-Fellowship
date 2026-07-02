# TravelPK - React Fellowship Project

## Project Goal

Build a responsive static Tour & Travel website using React.

Main Focus:
- Component Decomposition
- Props Drilling
- CSS in React
- useState
- Conditional Rendering

---

# Project Structure

App
│
├── Navbar
├── Hero
├── DestinationSection
│   └── DestinationCard
│       └── DestinationPopUp
│
├── PackageSection
│   └── PackageCard
│       └── PackagePopUp
│
├── Testimonials
│   └── TestimonialCard
│
└── Footer

---

# Components Created

Navbar
Hero
DestinationSection
DestinationCard
DestinationPopUp
PackageSection
PackageCard
PackagePopUp
Testimonials
TestimonialCard
Footer

Total Components: 11

---

# Props Drilling

Flow 1

App
↓
DestinationSection
↓
DestinationCard
↓
DestinationPopUp

---

Flow 2

App
↓
PackageSection
↓
PackageCard
↓
PackagePopUp

---

Flow 3

App
↓
Testimonials
↓
TestimonialCard

---

# useState Concepts

Hero Slider

const [currentImage, setCurrentImage] = useState(0)

Purpose:
Track current image being displayed.

---

Destination Popup

const [showDestinationPopUp, setShowDestinationPopUp] = useState(false)

Purpose:
Show / Hide destination modal.

---

Package Popup

const [showPackagePopUp, setShowPackagePopUp] = useState(false)

Purpose:
Show / Hide package modal.

---

# Conditional Rendering

Pattern Used:

{
  showDestinationPopUp &&
  (
    <DestinationPopUp />
  )
}

Meaning:

If value is true:
Render component

If value is false:
Render nothing

---

# Modal Popup Concept

Open Popup

onClick={() => setShowDestinationPopUp(true)}

Close Popup

onClick={() => setShowDestinationPopUp(false)}

---

# Props vs Destructuring

Method 1

function Card(props)

Access:

props.name
props.price

---

Method 2

function Card({ name, price })

Access:

name
price

This is called:

Object Destructuring

---

# Hero Section

Features:

- Image Slider
- Left Arrow
- Right Arrow
- Auto Slide
- Pause on Hover
- Navigation Dots
- Navbar Overlay
- Background Images

---

# Auto Image Slider

useEffect(() => {

  const interval = setInterval(() => {

    setCurrentImage(
      prev =>
      (prev + 1) % images.length
    )

  }, 3000)

  return () => clearInterval(interval)

}, [])

Purpose:

Automatically change images.

---

# Pause Slider On Hover

onMouseEnter={() => setIsPaused(true)}

onMouseLeave={() => setIsPaused(false)}

Purpose:

Pause automatic movement while user is interacting.

---

# Image Slider Logic

Next Image

(currentImage + 1) % images.length

Previous Image

(currentImage - 1 + images.length)
% images.length

Purpose:

Create infinite looping slider.

---

# Tailwind Concepts Used

Layout

flex
grid
justify-center
items-center

Spacing

p-4
p-6
m-4
gap-6

Typography

text-xl
text-2xl
font-bold

Sizing

w-full
h-full
h-48

Effects

shadow-lg
rounded-xl
hover:shadow-2xl

Transitions

transition
transition-all
transition-transform
duration-300

Backgrounds

bg-white
bg-blue-600
bg-black/60

Positioning

relative
absolute
fixed
inset-0

---

# Modal Background Image

Used:

style={{
  backgroundImage:
  `url(${destination.destImage})`
}}

Additional Styling:

backgroundSize: "cover"

backgroundPosition: "center"

---

# Fixed Positioning

Used:

fixed inset-0

Meaning:

Top: 0
Bottom: 0
Left: 0
Right: 0

Purpose:

Cover entire screen.

---

# Important Bug Solved

Issue:

Popup was sticking to card.

Reason:

Parent card had:

overflow-hidden

and transform effects.

Solution:

Use:

fixed inset-0

for modal.

Understand parent transforms can affect positioning.

---

# SVG Icons

Used custom SVG arrows.

Important Lesson:

SVG direction depends on path itself.

Positioning icon on left or right side
does NOT change arrow direction.

Sometimes:

rotate-180

is required.

---

# React Concepts Learned

Components
Props
Props Drilling
Destructuring
Conditional Rendering
useState
useEffect
Event Handling
Mapping Arrays
Reusable Components

---

# Data Driven UI

Destinations stored in array of objects.

Example:

{
  id: 1,
  name: "Hunza",
  description: "...",
  location: "...",
  bestTime: "...",
  attractions: "...",
  price: "$250"
}

Rendered using:

map()

Purpose:

One component.
Many cards.

---

# Package Data Structure

{
  title: "Hunza Tour",
  price: "$250",
  duration: "3 Days",
  accommodation: "...",
  transport: "...",
  meals: "...",
  guide: "...",
  highlights: "..."
}

Used inside PackagePopUp.

---

# Key Takeaways

1. Components should be small and reusable.

2. Data should flow from parent to child through props.

3. useState controls UI changes.

4. Conditional rendering is used for popups.

5. useEffect is useful for timers and side effects.

6. Modals create more professional UI than expanding cards.

7. Always store project notes after completing a feature.

8. Learning React is more about understanding flow than memorizing syntax.
