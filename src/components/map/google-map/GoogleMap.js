import React, {useEffect, useState} from "react";
import {useLoadScript} from "@react-google-maps/api";
import {Spin} from "antd";
import SidebarBlock from "../sidebar/Sidebar";
import GoogleMapBlockV2 from "./Map";
import {fetchConstructionsByRegionId} from "../../../store/construction/actions";
import {useDispatch, useSelector} from "react-redux";

const GoogleMapBlock = ({mapPosition}): React.FC => {
    const [visible, setVisible] = useState(false);
    const [currentConstruction, setConstruction] = useState(null);
    const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyCwxZJP81_TD9IUlWLe_z56c2OVquaE3Q8"});
    const {region, construction} = useSelector((state): void => state);
    const dispatch = useDispatch();
    const fetchConstructions = (): void => dispatch(fetchConstructionsByRegionId(region.current.id));

    useEffect(() => {
        fetchConstructions();
    }, []);

    const onMarkerClick = (e, construction) => {
        setVisible(true);
        setConstruction(construction);
    };

    const renderMap = (): any => <div style={{height: "100%"}}>
        {construction.region[region.current.id] ?
            <GoogleMapBlockV2
                mapPosition={mapPosition}
                constructions={construction.region[region.current.id]}
                onMarkerClick={onMarkerClick}/> : null}
        <SidebarBlock visible={visible}
                      setVisible={setVisible}
                      currentConstruction={currentConstruction}
                      setConstruction={setConstruction}
                      constructions={construction.region[region.current.id]}
                      onMarkerClick={onMarkerClick}/>
    </div>;

    return isLoaded ? renderMap() : <div className="loader-map-block"><Spin/></div>;
};

export default GoogleMapBlock;