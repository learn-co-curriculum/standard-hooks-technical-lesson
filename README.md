### Technical Lesson: Implementing Standard Hooks in React

Introduction
------------

React's standard hooks help simplify state management and user interactions within applications. In this lesson, we explore three essential hooks:

-   **useRef** -- Allows us to interact with DOM elements directly without triggering re-renders.
-   **useId** -- Generates unique and stable IDs to improve accessibility.
-   **useContext** -- Manages global state, eliminating unnecessary prop drilling.

### Scenario: Why Use These Hooks?

Imagine we are building a user profile page that includes:

✅ An input field that is automatically focused when the page loads.\
✅ A form with labels and inputs, where each label requires a unique ID for accessibility.\
✅ A theme switcher, allowing users to toggle between light and dark themes globally.

This lesson progressively introduces each hook to refactor the code, making it cleaner, reusable, and more efficient.

## Getting Started

### Prerequisites

-   Node.js and npm installed.

### Installation

1.  Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/standard-hooks-technical-lesson.git
cd standard-hooks-technical-lesson
```

2.  Install dependencies:

```bash
npm install
```

### Running the Development Server

Start the Vite dev server:

```bash
npm run dev
```

The app will be available at **http://localhost:5173/**.

> Note: This project uses `npm run dev` (Vite). There is no `npm start` script defined in `package.json`.

### Available Scripts

| Script        | Description                  |
| ------------- | ---------------------------- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production        |
| `npm run lint` | Run ESLint                  |
| `npm run preview` | Preview the production build |

## Implemented Features

### 1. Auto-focus the input field (useRef)

**File:** `src/components/ProfileForm.jsx`

A `useRef` hook stores a reference to the input DOM element. On component mount, a `useEffect` calls `inputRef.current.focus()` so the cursor appears in the input automatically without triggering re-renders.

### 2. Unique IDs for form labels (useId)

**File:** `src/components/ProfileForm.jsx`

The `useId` hook generates a stable, unique ID. It is applied to both the `<input id>` and the `<label htmlFor>` so screen readers can correctly associate the label with its input, preventing duplicate-ID conflicts.

### 3. Global theme switching (useContext)

**Files:**
- `src/context/ThemeContext.jsx` — Creates the `ThemeContext` and `ThemeProvider` that manage theme state (`"light"` or `"dark"`) and expose a `setTheme` function.
- `src/main.jsx` — Wraps `<App />` in `<ThemeProvider>` so the context is available app-wide.
- `src/components/ThemeToggle.jsx` — Reads theme state via `useContext(ThemeContext)` and toggles it with a button.
- `src/App.jsx` — Reads the theme and conditionally applies a `"dark"` CSS class to the container.

## Project Structure

```
src/
├── App.jsx                 # Root component; applies theme class
├── main.jsx                # Entry point; wraps App in ThemeProvider
├── components/
│   ├── ProfileForm.jsx     # Named input with auto-focus + unique ID
│   └── ThemeToggle.jsx     # Theme toggle button using useContext
├── context/
│   └── ThemeContext.jsx    # Theme context + provider
└── App.css                 # Global styles (light/dark classes)
```

## Testing Checklist

1️⃣ Refresh the page — the cursor should auto-focus in the Name input (**useRef**).\
2️⃣ Open DevTools → Elements — verify the input's `id` matches the label's `htmlFor` (**useId**).\
3️⃣ Click "Toggle Theme" — the displayed theme should switch between light and dark (**useContext**).

## Best Practices Applied

-   **Comments** added throughout to explain purpose and logic.
-   **No commented-out or TODO code** remains.
-   **ESLint passes** with 0 errors.
-   **Production build succeeds**.

## Next Steps

-   Persist theme preference in `localStorage` so it survives page reloads.
-   Commit changes and push to a feature branch:

```bash
git checkout -b feature-standard-hooks
git add .
git commit -m "Implemented useRef, useId, and useContext"
git push origin feature-standard-hooks
```

Then open a Pull Request and merge into `main`.

## Considerations

### Performance
- `useRef` does not trigger re-renders, making it ideal for DOM focus manipulation.
- `useContext` can cause re-renders if the context value changes frequently.

### Accessibility
- `useId` ensures unique, stable IDs for labels and inputs, improving screen-reader support.

### Scalability
- `useContext` simplifies global state but may need advanced state management (e.g., Redux) for larger apps.

## Final Thoughts

✅ `useRef` ensures inputs are automatically focused.\
✅ `useId` improves accessibility and prevents duplicate IDs.\
✅ `useContext` provides scalable global state management.

## Next Steps

Extend the app with `localStorage` to persist theme preferences across page reloads!
