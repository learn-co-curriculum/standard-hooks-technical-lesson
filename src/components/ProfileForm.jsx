import { useState, useRef, useEffect, useId } from "react";

function ProfileForm() {
  // Local state for the user's name input value.
  const [userName, setUserName] = useState("");

  // useRef holds a reference to the DOM input element without triggering
  // re-renders when it changes. We use it to programmatically focus the input.
  const inputRef = useRef(null);

  // useId generates a stable, unique ID for accessibility. It links the
  // <label> to the <input> via htmlFor/id so screen readers can associate them.
  const inputId = useId();

  // useEffect runs once on mount (empty dependency array). We use it to focus
  // the input field immediately when the component mounts, without causing a
  // re-render (useRef does not trigger re-renders).
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Profile Form</h2>
      {/* Label references the generated ID so it is bound to the input. */}
      <label htmlFor={inputId}>Name:</label>
      <input
        id={inputId}
        ref={inputRef}
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <p>Current Name: {userName || "Guest"}</p>
    </div>
  );
}

export default ProfileForm;
