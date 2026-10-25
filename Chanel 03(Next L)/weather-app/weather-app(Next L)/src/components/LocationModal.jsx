import { X } from "lucide-react";
import { useState } from "react";
import { getGeolocation } from "../services/get-geoLocation";
import { useNavigate } from "react-router";

const LocationModal = ({ onClose }) => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const goToPage = (location) => {
    navigate("/weather", { state: { location } });
    console.log(location);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cityValue = city.trim();
    // console.log(cityValue);

    if (!cityValue) {
      setError("Enter the city name first!!");
      return;
    }
    try {
      const location = await getGeolocation(cityValue);
      if (!location) {
        setError("Geocoding request failed!");
      }
      goToPage(location);
    } catch (error) {
      setError(error);
    }
  };

  const handleGeoLocations = () => {
    if (!navigator.geolocation) {
      setError("Geo locations not found!");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (positions) => {
        const { latitude, longitude } = positions.coords;
        // console.log({latitude, longitude});
        goToPage({ name: "Current Locations", lat: latitude, lon: longitude });
      },
      (error) => {
        setError(error.message);
      },
      {
        timeout: 10000,
      },
    );
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
      <div className="p-5 rounded-2xl w-[400px] bg-gray-100 shadow-2xl">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium">Where are you today?</h2>
          <button onClick={onClose} className="cursor-pointer">
            <X />
          </button>
        </div>

        <div className="pt-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Enter City name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border p-1 rounded-2xl"
            />

            <div>
              <button
                type="submit"
                className="text-lg w-full font-medium hover:scale-105 transition-all delay-500 bg-blue-500 px-5 cursor-pointer py-1 rounded-4xl text-gray-100"
              >
                Get Weather
              </button>
            </div>
            <div className="py-2 text-center">Or</div>
            <div className="">
              <button
                type="button"
                onClick={handleGeoLocations}
                className="text-lg w-full font-medium hover:scale-105 transition-all delay-500 bg-blue-500 px-5 cursor-pointer py-1 rounded-4xl text-gray-100"
              >
                Use My Locations
              </button>
            </div>
          </form>
        </div>
        <div className="text-center">
          {error && <p className="text-red-600 text-md font-medium">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
