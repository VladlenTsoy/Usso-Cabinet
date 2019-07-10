// @flow
import React, {useEffect, useState} from "react";
import "./Map.less";
import {useStore} from "../../store/useStore";
import FilterBlock from "./filter/Filter";
import ProfileBlock from "./profile/Profile";
import GoogleMapBlock from "./google-map/GoogleMap";

interface Construction {
    id: number,
    region_id: number,
    district_id: number,
    district: string
}

const Map = ({match}): void => {
    const [state] = useStore();
    const [region, setRegion] = useState(null);
    const [constructions, setConstructions] = useState<Array<Construction>>([]);

    useEffect(() => {
        const fetch = async () => {
            const response = await state.api.guest.get(`constructions/region/${match.params.id}`);
            setConstructions(response.data);
        };

        fetch().catch();
    }, [match.params.id, state.api]);

    useEffect(() => {
        const fetch = async () => {
            const response = await state.api.guest.get(`region/${match.params.id}`);
            setRegion(response.data);
        };

        fetch().catch();
    }, [match.params.id, state.api]);

    const onMarkerClick = (e) => {
        console.log(e);
    };

    return <div className="map">
        <ProfileBlock/>
        <GoogleMapBlock
            position={{lat: 41.29242, lng: 69.27517}}
            mapPosition={{lat: 41.29242, lng: 69.27517}}
            constructions={constructions}
            onMarkerClick={onMarkerClick}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwxZJP81_TD9IUlWLe_z56c2OVquaE3Q8"
            loadingElement={<div style={{height: `100%`}}/>}
            containerElement={<div className="googleMapBlock"/>}
            mapElement={<div style={{height: `100%`}}/>}
        />
        {region ? <FilterBlock region={region} constructions={constructions}/> : null}
    </div>;
};

export default Map;