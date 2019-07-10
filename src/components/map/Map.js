// @flow
import React, {useEffect, useState} from "react";
import "./Map.less";
import {useStore} from "../../store/useStore";
import HeaderMapBlock from "./header/Header";
import GoogleMapBlock from "./google-map/GoogleMap";

interface Construction {
    id: number,
    region_id: number,
    district_id: number,
    district: string
}

const Map = ({match}): React.FC => {
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