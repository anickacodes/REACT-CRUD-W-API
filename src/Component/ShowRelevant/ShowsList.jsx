import { useEffect, useState } from "react";

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
    <div>
  <h1>ALL SHOWS ALL SHOWS</h1>
  {showsToRender}
  </div>
  )
};

export default ShowsList;
