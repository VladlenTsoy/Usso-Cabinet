import React, {useEffect} from "react";
import "./Map.less";
import HeaderMapBlock from "./header/Header";
import MapConstructions from "./map-constructions/MapConstructions";
import {useDispatch, useSelector} from "react-redux";
import {fetchRegionByIdAction, fetchRegionsAction} from "../../store/region/actions";
import LoadingWithText from "../user/layouts/loading-with-text/LoadingWithText";

const Map = ({match}): React.FC => {
    const {region} = useSelector((state): void => state);
    const dispatch = useDispatch();
    const fetchRegion = (): void => dispatch(fetchRegionByIdAction(match.params.id));
    const fetchRegions = (): void => dispatch(fetchRegionsAction());

    useEffect(() => {
        fetchRegion();
    }, [match.params.id]);

    //
    useEffect(() => {
        if (!region.all.length)
            fetchRegions();
    }, [region.all]);

    return <div className="map">
        <HeaderMapBlock/>
        {region.current && region.all.length ?
            <MapConstructions mapPosition={{lat: region.current.lat, lng: region.current.lng}}/> :
            <LoadingWithText text="Загрузка региона..."/>
        }
    </div>;
};

export default Map;