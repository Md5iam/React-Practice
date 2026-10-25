export const getGeolocation = async (city) => {
  // console.log("city" , city);

  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
  const result = await fetch(url);
  // console.log( 'checkValue',  result);
  if( !result){
    throw new Error("Geocoding result failed!");
  }
  const data = await result.json();
  // console.log( data);
  const place = data.results[0];
  // console.log(place);
  return{
    name : place.name,
    lat : place.latitude,
    lon : place.longitude,
  };

};