import React, {useEffect, useState} from "react";
import {useLoadScript} from "@react-google-maps/api";
import SidebarBlock from "./sidebar/Sidebar";
import GoogleMapBlock from "./google-map/GoogleMap";
import {
    fetchConstructionsByRegionId,
    setConstructionsForFiltersAction,
    setCurrentConstructionAction
} from "../../../store/construction/actions";
import {useDispatch, useSelector} from "react-redux";
import LoadingWithText from "../../user/layouts/loading-with-text/LoadingWithText";

const MapV2 = ({mapPosition, regionConstructions}): React.FC => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState(mapPosition);
    const dispatch = useDispatch();

    useEffect(() => {
        setPosition(mapPosition);
    }, [mapPosition.lat, mapPosition.lng]);

    useEffect(() => {
        dispatch(setConstructionsForFiltersAction(regionConstructions, 'all'));
    }, [regionConstructions]);

    const onMarkerClick = (e, construction) => {
        setVisible(true);
        dispatch(setCurrentConstructionAction(construction));
    };

    const close = (): void => setVisible(false);

    return <div className="mapConstructionBlock">
        <GoogleMapBlock
            mapPosition={position}
            onMarkerClick={onMarkerClick}/>
        <SidebarBlock visible={visible}
                      close={close}
                      onMarkerClick={onMarkerClick}/>
    </div>;
};

const MapConstructions = ({mapPosition}): React.FC => {
    const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyCwxZJP81_TD9IUlWLe_z56c2OVquaE3Q8"});
    const {region, construction} = useSelector((state): void => state);
    const dispatch = useDispatch();
    const fetchConstructions = (): void => dispatch(fetchConstructionsByRegionId(region.current.id));

    useEffect(() => {
        if (!construction.region[region.current.id])
            fetchConstructions();
    }, [region.current.id]);


    const renderMap = construction.region[region.current.id] ?
        <MapV2 mapPosition={mapPosition} regionConstructions={construction.region[region.current.id]}/> :
        <LoadingWithText text="Загрузка конструкций..."/>;

    return isLoaded ? renderMap : <LoadingWithText text="Загрузка карты..."/>;
};

export default MapConstructions;