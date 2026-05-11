import { useState, useEffect, useRef, useId } from "react";

function ProfileForm() {
  // Step 1: Create state for user input (before adding useRef and useId)
  const [userName, setUserName] = useState("");

  // TODO: Add useRef to focus the input field when the component mounts
  const inputRef = useRef(null);
  // TODO: Add useId to generate a unique ID for the input field
  const inputId = useId();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Profile Form</h2>
      {/* TODO: Update this label-input pair to use the dynamically generated ID */}
      <label htmlFor={inputId}>Name:</label>
      <input id={inputId} ref={inputRef} type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <p>Current Name: {userName || "Guest"}</p>
    </div>
  );
}

export default ProfileForm;
