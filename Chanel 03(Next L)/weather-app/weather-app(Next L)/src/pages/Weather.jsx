import { useLocation } from "react-router"
import { getWeather } from "../services/get-weather"

export default function Weather(){
  const value = useLocation()
  const place = value.state.location
  // console.log(place);

  const fetchWeather = async() =>{
    try{
      const result = await getWeather(place)
      console.log(result)
    }catch(error){
      console.log(error)
    }
  }
  fetchWeather()

  return(
    <h1>Hello this is from weather page</h1>
  )
}