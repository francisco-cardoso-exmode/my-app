
import { Geolocation } from '@capacitor/geolocation';
import React, {useState, useCallback} from 'react';


export default function GeolocationPage() {

   //const coordinates = Geolocation.getCurrentPosition();
  
   const [loc, setLoc] = useState(null);

   const getCurrentPosition = useCallback(async () => {
     const coordinates = await Geolocation.getCurrentPosition();
     setLoc(coordinates);
   }, [coordinates]);


    const printCurrentPosition2 = async () => {
        const coordinates2 = await Geolocation.getCurrentPosition();
        
        console.log('Current position:', coordinates2);
      };

      printCurrentPosition2 ();

      return (
        <div>
        <h1>Geolocation</h1>
        <p>Your location is:</p>
        <p>Latitude: {loc?.coords.latitude}</p>
        <p>Longitude: {loc?.coords.longitude}</p>
  
        <button onClick={getCurrentPosition}>
          Get Current Location
        </button>
      </div>
      );

      


}
