import React, {useState, useCallback} from 'react';
import { Geolocation } from '@capacitor/geolocation';


export default function GeolocationPage() {

    
  const [loc, setLoc] = useState(null);
 

  const getCurrentPosition = useCallback(async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLoc(coordinates);
   
  }, []);


  getCurrentPosition();

  return (
    <div>
      <h1>Geolocation</h1>
      <p>Your location is:</p>
      <p>Latitude: {loc?.coords.latitude}</p>
      <p>Longitude: {loc?.coords.longitude}</p>
      <div></div>

    
     
      <button onClick={getCurrentPosition}>
        Get Current Location
      </button>
    
    </div>
  );
}



