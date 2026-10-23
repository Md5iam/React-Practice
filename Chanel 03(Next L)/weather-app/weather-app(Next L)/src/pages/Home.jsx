import { useState } from "react";
import LocationModal from "../components/LocationModal";

export default function Home(){
  const[click , setClick] = useState(false);
  console.log(click);
  return(
    <div>

        <div className="text-center">
          <h1 className="text-6xl text-blue-300 font-bold">
            NextLevel <span className="text-blue-400">Weather</span>
          </h1>
          <p className="py-4 text-md text-gray-300">Check your weater today in next level</p>
        </div>

        <div className="flex justify-center">
          <button type="button"
          onClick={()=> setClick(true)}
          className="text-lg font-medium hover:scale-105 transition-all delay-500 bg-blue-500 px-5 py-1 rounded-4xl text-gray-100">
            Check Weather
          </button>
        </div>

        {
          click && <LocationModal onClose={()=> setClick(false)} /> 
        }

    </div>
  );
}