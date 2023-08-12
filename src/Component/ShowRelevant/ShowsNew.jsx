import { useState } from "react";

const ShowsNew = (allShows) => {
  const [newShowTitle, setNewShowTitle] = useState("");
  const [newShowDescription, setNewShowDescription] = useState("");

  const handleSubmitNewShow = (e) => e.preventDefault();


  const newShowAdded = {
    title: newShowTitle,
    description: newShowDescription
  }
  return (
    <div className="newShow-form">
      <form onSubmit={handleSubmitNewShow}>
        <label> Title: 
        <input type="text" value={title} onChange={(synthEvent) => setTitle(synthEvent.target.value)}/>
        </label> <br />
        <label>Description: 
        <textarea
            value={description}
            onChange={(se) => setDescription(se.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default ShowsNew;
