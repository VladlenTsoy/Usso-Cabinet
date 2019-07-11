// @flow
import React, {useEffect, useState} from "react";
import "./Filter.less";
import {withRouter} from "react-router-dom";
import {Select} from "antd";
import {useStore} from "../../../../../store/useStore";
import {ADD_REGIONS} from "../../../../../store/region/reducer";
import type {Region} from "../../../../../store/region/reducer";

const {Option} = Select;

const FilterBlock = ({match, history}): React.FC => {
    const [state, dispatch] = useStore();
    const [constructions] = useState(state.construction.region[match.params.id] || []);
    const [regions, setRegions] = useState<Array<Region>>(state.region.all);
    const [zones, setZones] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [types, setTypes] = useState([]);
    const [formats, setFormats] = useState([]);
    const [statuses, setStatuses] = useState([]);

    useEffect((): any => {
        let cancel = false;
        const fetch = async () => {
            const response = await state.api.guest.get("regions");
            if (cancel) return;
            setRegions(response.data);
            dispatch({type: ADD_REGIONS, payload: response.data});
        };

        if (!regions.length)
            fetch().catch();

        return (): void => (cancel = true);
    }, [state.api, regions.length]);

    useEffect(() => {
        const tmp = {
            zones: [],
            districts: [],
            types: [],
            formats: [],
            statuses: [],
        };

        constructions.map((construction): any => {
            tmp.zones[construction.zone] = construction.zone;
            tmp.districts[construction.district_id] = construction.district;
            tmp.types[construction.type_id] = construction.type;
            tmp.formats[construction.format_id] = construction.format;
            tmp.statuses[construction.status] = construction.status;
        });

        setZones(tmp.zones);
        setDistricts(tmp.districts);
        setTypes(tmp.types);
        setFormats(tmp.formats);
        setStatuses(tmp.statuses);
    }, [constructions]);

    //
    const selectRegion = (id: number): void => history.push(`/map/${id}`);

    return <div className="filter-block">
        <Select defaultValue={state.region.current.id} loading={!regions.length} onChange={selectRegion}>
            {regions.length ?
                regions.map((region: Region): any =>
                    <Option key={region.id} value={region.id}>{region.title}</Option>)
                : null}
        </Select>
        <Select defaultValue="all">
            <Option value="all">Все</Option>
            {zones.length ?
                zones.map((zone, key): any =>
                    <Option key={key} value={key}>{zone}</Option>)
                : null}
        </Select>
        <Select defaultValue="all">
            <Option value="all">Все</Option>
            {districts.length ?
                districts.map((district, key): any =>
                    <Option key={key} value={key}>{district}</Option>)
                : null}
        </Select>
        <Select defaultValue="all">
            <Option value="all">Все</Option>
            {types.length ?
                types.map((type, key): any =>
                    <Option key={key} value={key}>{type}</Option>)
                : null}
        </Select>
        <Select defaultValue="all">
            <Option value="all">Все</Option>
            {formats.length ?
                formats.map((format, key): any =>
                    <Option key={key} value={key}>{format}</Option>)
                : null}
        </Select>
        <Select defaultValue="all">
            <Option value="all">Все</Option>
            {statuses.length ?
                statuses.map((status, key): any =>
                    <Option key={key} value={key}>{status}</Option>)
                : null}
        </Select>
    </div>;
};

export default withRouter(FilterBlock);