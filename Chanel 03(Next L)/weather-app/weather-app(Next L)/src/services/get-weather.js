export const getWeather= async (place) =>{
  const {lat, lon } = place;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m`

  const result = await fetch(url);
  // console.log(await result.json());
  const data = await result.json();
  const now = data.current;
  if ( !now ){
    throw new Error("Weather details get failed");
  }
  // console.log( "siam",  data);

  return {
    temperature: Math.round(now.temperature_2m),
    humidity: now.relative_humidity_2m,
    windSpeed: Math.round(now.wind_speed_10m),
    feelsLike: Math.round(now.apparent_temperature),
  }
}