import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import ClusterIcon from "../../../assets/cluster.svg";
import React from "react";
const {MarkerClusterer} = require("react-google-maps/lib/components/addons/MarkerClusterer");

/** @namespace google.maps.ControlPosition.LEFT_CENTER */
/** @namespace google.maps.Point */

const GoogleMapBlock = withScriptjs(withGoogleMap(({mapPosition, constructions, onMarkerClick}) => {
    const google = window.google;
    return <GoogleMap
        defaultZoom={12}
        options={{
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
        }}
        defaultCenter={{lat: 41.29242, lng: 69.27517}}
        center={mapPosition}
    >
        <MarkerClusterer
            averageCenter
            enableRetinaIcons
            gridSize={60}
            styles={[{
                textColor: 'white',
                url: ClusterIcon,
                height: 70,
                width: 70
            }]}
        >
            {constructions.map((construction, key):void =>
                <Marker position={construction.position}
                        onClick={onMarkerClick}
                        key={key}
                        icon={{
                            path: "M14.7,0.4c-0.5-0.1-1.1-0.3-1.6-0.4c-0.9,0-1.7,0-2.6,0c-0.1,0-0.3,0.1-0.4,0.1C7.3,0.6,5,1.8,3.2,3.8\n" +
                                "\tc-2.5,2.7-3.6,5.9-3,9.6c0.4,2.4,1.7,4.4,3.1,6.3c4.5,6,7.1,12.7,7.9,20.2c0,0.4,0.1,0.6,0.6,0.6c0.4,0,0.4-0.3,0.5-0.6\n" +
                                "\tc0.7-6.7,3-12.7,6.6-18.3c0.9-1.4,2.1-2.7,2.9-4.2c0.9-1.7,1.7-3.4,1.7-5.3C23.6,6.6,20,1.8,14.7,0.4z M11.7,17.5l-6-6l6-6l6,6\n" +
                                "\tL11.7,17.5z",
                            fillColor: '#76B828',
                            fillOpacity: 1,
                            scale: 1.0,
                            strokeWeight: 0,
                            anchor: new google.maps.Point(11.6, 40)
                        }}
                />
            )}
        </MarkerClusterer>
    </GoogleMap>
}));

export default GoogleMapBlock;