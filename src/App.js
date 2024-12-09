import "./App.css";
import { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id){    
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours);
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2 className="font-bold text-3xl text-red-600">No Tours Left 😕.</h2>
        <h3 className="mt-5 text-2xl text-violet-700 ">Hit the Refresh Button for a Vibe check!</h3>
        <button className="btn-white text-violet-700" onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
