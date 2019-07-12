import React, {useEffect, useState} from "react";
import {useLoadScript} from "@react-google-maps/api";
import SidebarBlock from "./sidebar/Sidebar";
import GoogleMapBlock from "./google-map/GoogleMap";
import {fetchConstructionsByRegionId} from "../../../store/construction/actions";
import {useDispatch, useSelector} from "react-redux";
import LoadingWithText from "../../user/layouts/loading-with-text/LoadingWithText";

const MapConstructions = ({mapPosition}): React.FC => {
    const [visible, setVisible] = useState(false);
    const [currentConstruction, setConstruction] = useState(null);
    const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyCwxZJP81_TD9IUlWLe_z56c2OVquaE3Q8"});
    const {region, construction} = useSelector((state): void => state);
    const dispatch = useDispatch();
    const fetchConstructions = (): void => dispatch(fetchConstructionsByRegionId(region.current.id));

    useEffect(() => {
        if (!construction.region[region.current.id])
            fetchConstructions();
    }, [region.current.id]);

    const onMarkerClick = (e, construction) => {
        setVisible(true);
        setConstruction(construction);
    };

    const renderMap = construction.region[region.current.id] ?
        <div className="mapConstructionBlock">
            <GoogleMapBlock
                mapPosition={mapPosition}
                constructions={construction.region[region.current.id]}
                onMarkerClick={onMarkerClick}/>
            <SidebarBlock visible={visible}
                          setVisible={setVisible}
                          currentConstruction={currentConstruction}
                          setConstruction={setConstruction}
                          constructions={construction.region[region.current.id]}
                          onMarkerClick={onMarkerClick}/>
        </div> :
        <LoadingWithText text="Загрузка конструкций..."/>;

    return isLoaded ? renderMap : <LoadingWithText text="Загрузка карты..."/>;
};

export default MapConstructions;