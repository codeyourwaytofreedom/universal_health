import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const Map = () => {
      const center = {
        lat: 39.945,
        lng: 32.813
      };
  
    return (
      <div className="map">
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS!}>
                    <GoogleMap zoom={10} center={center} mapContainerClassName={"map"}>
                    <Marker position={center} />
                    </GoogleMap>
        </LoadScript>
      </div>
    );
  };
  
 
export default Map;