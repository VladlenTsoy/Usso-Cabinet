import React, {useState} from "react";
import {useLoadScript} from "@react-google-maps/api";
import {Spin} from "antd";
// import SidebarBlock from "../sidebar/Sidebar";
import GoogleMapBlockV2 from "./Map";

const GoogleMapBlock = ({mapPosition, constructions}): React.FC => {
    const [visible, setVisible] = useState(false);
    const [construction, setConstruction] = useState(null);
    const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyCwxZJP81_TD9IUlWLe_z56c2OVquaE3Q8"});

    const onMarkerClick = (e, construction) => {
        setVisible(true);
        setConstruction(construction);
    };

    const renderMap = (): any => <div style={{height: "100%"}}>
        <GoogleMapBlockV2 mapPosition={mapPosition}
                          constructions={constructions}
                          onMarkerClick={onMarkerClick}/>
        {/*<SidebarBlock visible={visible}*/}
        {/*              setVisible={setVisible}*/}
        {/*              construction={construction}*/}
        {/*              setConstruction={setConstruction}*/}
        {/*              constructions={constructions}*/}
        {/*              onMarkerClick={onMarkerClick}/>*/}
    </div>;

    return isLoaded ? renderMap() : <div className="loader-map-block"><Spin/></div>;
};

export default GoogleMapBlock;