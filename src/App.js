import "./App.css";
import Testimonials from "./components/Testimonials";
import reviews from './data'


function App() {
  return (
    <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-zinc-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-36 mt-3 mx-auto rounded-lg"></div> 
        <Testimonials reviews={reviews}/>
      </div>
    </div>
  );
}

export default App;
