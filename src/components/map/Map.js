// @flow
import React, {useEffect, useState} from "react";
import "./Map.less";
import HeaderMapBlock from "./header/Header";
import GoogleMapBlock from "./google-map/GoogleMap";
import {useDispatch, useSelector} from "react-redux";
import {fetchRegionByIdAction} from "../../store/region/actions";

const Map = ({match}): React.FC => {
    const {region} = useSelector((state): void => state);
    const dispatch = useDispatch();
    const fetchRegions = (): void => dispatch(fetchRegionByIdAction(match.params.id));

    useEffect(() => {
        fetchRegions();
    }, [match.params.id]);

    return <div className="map">
        <HeaderMapBlock/>
        {
            region.current ? <GoogleMapBlock mapPosition={{lat: region.current.lat, lng: region.current.lng}}/> : null
        }
    </div>;
};

export default Map;