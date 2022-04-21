
import { Geolocation } from '@capacitor/geolocation';

export default function GeolocationPage() {

    const printCurrentPosition = async () => {
        const coordinates = await Geolocation.getCurrentPosition();
      
        console.log('Current position:', coordinates);
      };

      printCurrentPosition ();


}




