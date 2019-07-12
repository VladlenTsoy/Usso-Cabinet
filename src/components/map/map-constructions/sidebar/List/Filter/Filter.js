// @flow
import React, {useEffect, useState} from "react";
import "./Filter.less";
import {withRouter} from "react-router-dom";
import {Form, Select} from "antd";
import type {Region} from "../../../../../../store/region/reducer";
import {useSelector} from "react-redux";
import SelectFilterBlock from "./select-filter/Select";

const {Option} = Select;

const FilterBlock = ({history, setConstructions}): React.FC => {
    const {construction, region} = useSelector((state): void => state);
    const [constructions] = useState(construction.region[region.current.id]);
    const [zones, setZones] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [types, setTypes] = useState([]);
    const [formats, setFormats] = useState([]);
    const [statuses, setStatuses] = useState([]);

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
        <Form.Item label="Регион">
            <Select defaultValue={region.current.id} loading={!region.all.length} onChange={selectRegion}>
                {region.all.length ?
                    region.all.map((region: Region): any =>
                        <Option key={region.id} value={region.id}>{region.title}</Option>)
                    : null}
            </Select>
        </Form.Item>

        <SelectFilterBlock title="Зона" name="zone" values={zones} setConstructions={setConstructions}/>
        <SelectFilterBlock title="Район" name="district_id" values={districts} setConstructions={setConstructions}/>
        <SelectFilterBlock title="Тип" name="type_id" values={types} setConstructions={setConstructions}/>
        <SelectFilterBlock title="Формат" name="format_id" values={formats} setConstructions={setConstructions}/>
        <SelectFilterBlock title="Статус" name="status" values={statuses} setConstructions={setConstructions}/>
    </div>;
};

export default withRouter(FilterBlock);