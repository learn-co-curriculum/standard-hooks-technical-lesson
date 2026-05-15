import React, { useState, useRef, useEffect, useId } from "react";

function ProfileForm() {
  // Step 1: Create state for user input (before adding useRef and useId)
  const [userName, setUserName] = useState("");

  // TODO: Add useRef to focus the input field when the component mounts
  const inputRef = useRef(null);

  // ✅ Step 1 for userId: Generate a unique ID for the input field
  const inputId = useId();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  // TODO: Add useId to generate a unique ID for the input field

  return (
    <div>
      <h2>Profile Form</h2>
      {/* TODO: Update this label-input pair to use the dynamically generated ID */}
      	{/* ✅ Step 2 for userId: Use the generated ID in the label and input ....this part -> <label htmlFor={inputId}>Name:</label>*/}
      <label htmlFor={inputId}>Name:</label>
      {/* ✅ Step 3: Attach the ref to the input */}
      <input
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
