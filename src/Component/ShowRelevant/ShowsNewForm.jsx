import React, { useState } from "react";

const ShowsNewForm = ({ allShows, setAllShows }) => {
  const [newShowTitle, setNewShowTitle] = useState("");
  const [newShowType, setNewShowType] = useState("")
  // catch this eror if not a tv show 
  const [newShowCountry, setNewShowCountry] = useState("");
  const [newShowReleaseYear, setNewShowReleaseYear] = useState(2023);
  const [newShowRating, setNewShowRating] = useState("");
  const [newShowDateAdded, setNewShowDateAdded] = useState("");
  const [newShowDuration, setNewShowDuration] = useState("");
  const [newShowListedIn, setNewShowListedIn] = useState("");
  const [newShowDescription, setNewShowDescription] = useState("");

  const handleSubmitNewShow = async (e) => {
    e.preventDefault();

    // Create a new show object using the form data
    const newShowAdded = {
      id: "",
      title: newShowTitle,
      type: newShowType,
      country: newShowCountry,
      dateAdded: newShowDateAdded, // TODO: add function to set current date -
      releaseYear: newShowReleaseYear,
      rating: newShowRating,
      duration: newShowDuration,
      listedIn: newShowListedIn,
      description: newShowDescription,
    };

    try {
      const response = await fetch("http://localhost:5001/api/shows", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newShowAdded),
      });

      if (response.ok) {
        setAllShows([...allShows, newShowAdded]);
        console.log("New show added successfully!");
        // Clear form fields after successful submission
        setNewShowTitle("");
        setNewShowCountry("")
        setNewShowListedIn("")
        setNewShowRating("")
        setNewShowReleaseYear("")
        setNewShowDescription("");
      } else {
        console.log("Failed to add new show");
      }
    } catch (error) {
      console.error("Error adding new show:", error);
    }
  };

  return (
    <div className="newShow-form">
      <h2>Add a new Show</h2>
      <form onSubmit={handleSubmitNewShow}>
        <label>
          Title:
          <input
            type="text"
            id="title"
            value={newShowTitle}
            onChange={(event) => setNewShowTitle(event.target.value)}
          />
        </label>
        <br />
        <label>Type:  <input
        type="text"
            value={newShowType}
            onChange={(event) => setNewShowType(event.target.value)}
          /></label>
           <br />
        <label>Country:  <input
        type="text"
            value={newShowCountry}
            onChange={(event) => setNewShowCountry(event.target.value)}
          /></label>
           <br />
        <label>Date Added: <input
        type="date"
            value={newShowDateAdded}
            onChange={(event) => setNewShowDateAdded(event.target.value)}
          /> </label>  <br />
        <label>Release Year:  <input
        type="number"
            value={newShowReleaseYear}
            onChange={(event) => setNewShowReleaseYear(event.target.value)}
          /></label>  <br />
        <label>Rating:  <input
            value={newShowRating}
            onChange={(event) => setNewShowRating(event.target.value)}
          /> </label>  <br />
        <label>Duration:  <input 
        type="text"
            value={newShowDuration}
            onChange={(event) => setNewShowDuration(event.target.value)}
          /></label>  <br />
        <label>Listed In:  <textarea
            value={newShowListedIn}
            onChange={(event) => setNewShowListedIn(event.target.value)}
          /></label> <br />
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

export default ShowsNewForm;
