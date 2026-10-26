import { useLocation } from "react-router";
import { getWeather } from "../services/get-weather";
import { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import RecommandationCard from "../components/RecommendationCard";
import WeatherType from "../components/WeatherType";
import { getRecommandations } from "../utils/getRecommandations";

export default function Weather() {
  const value = useLocation();
  const place = value.state?.location;
  const [weather, setWeather] = useState(null);
  // console.log(place);

  useEffect(() => {
    if (!place) return;
    const fetchWeather = async () => {
      try {
        const result = await getWeather(place);
        setWeather(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeather();
  }, [place]);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-3">

          {/* Weather Card */}
          <WeatherCard place={place} weather={weather} />

          {/* Weather Recommendation Card */}
          <RecommandationCard recommendation = {getRecommandations(weather)} />

        </div>

        {/* Weather Type Card */}
        <WeatherType place={place} weather={weather} />

      </div>
    </div>
  );
}
