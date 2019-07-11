// @flow
import React, {useEffect, useState} from "react";
import "./Map.less";
import {useStore} from "../../store/useStore";
import HeaderMapBlock from "./header/Header";
import GoogleMapBlock from "./google-map/GoogleMap";
import {SELECT_REGION} from "../../store/region/reducer";
import type {Construction} from "../../store/construction/reducer";
import {ADD_CONSTRUCTIONS_BY_REGION_ID} from "../../store/construction/reducer";


const Map = ({match}): React.FC => {
    const [state, dispatch] = useStore();
    const [region, setRegion] = useState(null);
    const [constructions, setConstructions] = useState<Array<Construction>>(state.construction.region[match.params.id] || []);

    useEffect(() => {
        const fetch = async () => {
            const response = await state.api.guest.get(`constructions/region/${match.params.id}`);
            dispatch({type: ADD_CONSTRUCTIONS_BY_REGION_ID, payload: {[match.params.id]: response.data}});
            setConstructions(response.data);
        };

        if (!state.construction.region[match.params.id])
            fetch().catch();
    }, [match.params.id, state.api]);

    useEffect(() => {
        const fetch = async () => {
            const response = await state.api.guest.get(`region/${match.params.id}`);
            dispatch({type: SELECT_REGION, payload: response.data});
            setRegion(response.data);
        };

        fetch().catch();
    }, [match.params.id, state.api]);

    return <div className="map">
        <HeaderMapBlock/>
        {
            region ? <GoogleMapBlock
                mapPosition={{lat: region.lat, lng: region.lng}}
                constructions={constructions}
            /> : null
        }
    </div>;
};

export default Map;