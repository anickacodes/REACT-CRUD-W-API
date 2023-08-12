import React, { useState } from "react";

const AddNewShow = ({ allShows }) => {
  const [newShowTitle, setNewShowTitle] = useState("");
  const [newShowDescription, setNewShowDescription] = useState("");

  const handleSubmitNewShow = (e) => {
    e.preventDefault();

    // Create a new show object using the form data
    const newShowAdded = {
      title: newShowTitle,
      description: newShowDescription,
    };

    // TODO: Send newShowAdded to the server or update state in the parent component

    // Clear form fields after submission
    setNewShowTitle("");
    setNewShowDescription("");
  };

  return (
    <div className="newShow-form">
      <form onSubmit={handleSubmitNewShow}>
        <label>
          Title:
          <input
            type="text"
            value={newShowTitle}
            onChange={(event) => setNewShowTitle(event.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={newShowDescription}
            onChange={(event) => setNewShowDescription(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add New Show</button>
      </form>
    </div>
  );
};


export default AddNewShow