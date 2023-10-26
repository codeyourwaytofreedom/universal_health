import { GoogleMap, LoadScript } from "@react-google-maps/api";


const Map = () => {
      const center = {
        lat: -3.745,
        lng: -38.523
      };
  
    return (
      <div className="map">
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS!}>
                    <GoogleMap zoom={10} center={center} mapContainerClassName={"map"}/>
        </LoadScript>
      </div>
    );
  };
  
 
export default Map;