import React, { useState } from "react";

function ProfileForm() {
  // Step 1: Create state for user input (before adding useRef and useId)
  const [userName, setUserName] = useState("");

  // TODO: Add useRef to focus the input field when the component mounts
  // TODO: Add useId to generate a unique ID for the input field

  return (
    <div>
      <h2>Profile Form</h2>
      {/* TODO: Update this label-input pair to use the dynamically generated ID */}
      <label>Name:</label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <p>Current Name: {userName || "Guest"}</p>
    </div>
  );
}

export default ProfileForm;
