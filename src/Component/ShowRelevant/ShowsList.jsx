import { useEffect, useState } from "react";
import ShowsNew from "./ShowsNew";

const ShowsList = () => {
  const [allShows, setAllShows] = useState([]);
console.log("state of showws", allShows)

  useEffect(() => {
    fetch("http://localhost:5001/api/shows")
      .then(response => response.json())
    //   .then(console.log)
      .then(arr => setAllShows(arr))
      .catch((err) => console.log("error!", err));
  }, []);
  
const showsToRender = allShows.map((eachShow)=> 
<div>
    <h4>{eachShow.title}</h4>
</div>)

  return (
    <>
    <div>
  <h2>Shows List</h2>
  {showsToRender}
  </div>
  <div>
   <ShowsNew allShows={allShows} />
  </div>
  </>
  )
};

export default ShowsList;
