// @flow
import React, {useEffect, useState} from "react";
import "./Map.less";
import HeaderMapBlock from "./header/Header";
import GoogleMapBlock from "./google-map/GoogleMap";
import {useDispatch, useSelector} from "react-redux";
import {fetchRegionByIdAction} from "../../store/region/actions";
import {fetchConstructionsByRegionId} from "../../store/construction/actions";

const Map = ({match}): React.FC => {
    const {region, construction} = useSelector((state): void => state);
    const dispatch = useDispatch();
    const fetchRegions = (): void => dispatch(fetchRegionByIdAction(match.params.id));
    const fetchConstructions = (): void => dispatch(fetchConstructionsByRegionId(match.params.id));

    console.log(region.current, construction.region[match.params.id]);
    useEffect(() => {
        fetchRegions();
        fetchConstructions();
    }, [match.params.id]);

    return <div className="map">
        <HeaderMapBlock/>
        {
            region.current ? <GoogleMapBlock
                mapPosition={{lat: region.current.lat, lng: region.current.lng}}
                constructions={construction.region[match.params.id]||[]}
            /> : null
        }
    </div>;
};

export default Map;