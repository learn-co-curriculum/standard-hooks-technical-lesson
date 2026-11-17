import { useState, useRef, useEffect, useId } from "react";

function ProfileForm() {
  const [userName, setUserName] = useState("");
  const inputRef = useRef(null);

  // ✅ Step 1: Generate a unique ID for the input field
  const inputId = useId();

  useEffect(() => {
	inputRef.current.focus();
  }, []);

  return (
	<div>
  	<h2>Profile Form</h2>
  	{/* ✅ Step 2: Use the generated ID in the label and input */}
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