import { useEffect, useState } from "react";

import "./ShowsList.css";
import ShowsNewForm from "./ShowsNewForm";

const ShowsList = () => {
  const [allShows, setAllShows] = useState([]);
  // console.log("state of showws", allShows);

  useEffect(() => {
    fetch("http://localhost:5001/api/shows")
      .then((response) => response.json())
      //   .then(console.log)
      .then((arr) => setAllShows(arr))
      .catch((err) => console.log("error!", err));
  }, []);

  function handleDeleteClick(showToDelete) {
    console.log("be gone wench", showToDelete);
    //front end logic
    //filter
    const filterResult = allShows.filter((eachShow) => {
      if (eachShow.id !== showToDelete.id) {
        return eachShow;
      }
    });
    console.log("filter:", filterResult);
    setAllShows([...filterResult]);

    //backend logic
    //delete fetch request
    //api/shows/id: -- can just use the ID
    fetch(`http://localhost:5001/api/shows/${showToDelete.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((emptyObj) => console.log(emptyObj));
    //pessimistic logic / rendering
    setAllShows([...filterResult]);
  }

  function handleEdit() {}
  const [toggleEdit, setToggleEdit] = useState(false);
  const [formObj, setFormObj] = useState( {title: "", type:"", duration:""} );
//individual card component 
//useEffect that fetches specific obj by id - and render






  const showsToRender = allShows.map((eachShow) => {
    return toggleEdit ? (
      <form>
        {" "}
        <label>
          {" "}
          <input />
        </label>{" "}
        <button
          onClick={(se) => {
            console.log();
          }}
        >
          Close Edit
        </button>
      </form>
    ) : (
      <div key={eachShow.id} className="show-card-styles">
        <h4>{eachShow.title}</h4>
        <h4>{eachShow.duration}</h4>
        <button
          onClick={(se) => {
            handleDeleteClick(eachShow);
          }}
        >
          X
        </button>
        <button onClick={(synthE) => setToggleEdit(!toggleEdit)}>
          Edit 🎬
        </button>
      </div>
    );
  });

  return (
    <>
      <div className="shows-list-styles">
      
        <h2>All Shows List</h2>
        <div className="rendered-shows">{showsToRender}</div>
      </div>
      <div className="">
        <ShowsNewForm allShows={allShows} setAllShows={setAllShows} />
      </div>
    </>
  );
};

export default ShowsList;
