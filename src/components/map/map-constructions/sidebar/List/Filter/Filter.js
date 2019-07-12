// @flow
import React, {useEffect, useState} from "react";
import "./Filter.less";
import {withRouter} from "react-router-dom";
import {Form, Select} from "antd";
import type {Region} from "../../../../../../store/region/reducer";
import {useSelector} from "react-redux";

const {Option} = Select;

const FilterBlock = ({history}): React.FC => {
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
        <Form.Item label="Зона">
            <Select defaultValue="all">
                <Option value="all">Все</Option>
                {zones.length ?
                    zones.map((zone, key): any =>
                        <Option key={key} value={key}>{zone}</Option>)
                    : null}
            </Select>
        </Form.Item>
        <Form.Item label="Район">
            <Select defaultValue="all">
                <Option value="all">Все</Option>
                {districts.length ?
                    districts.map((district, key): any =>
                        <Option key={key} value={key}>{district}</Option>)
                    : null}
            </Select>
        </Form.Item>
        <Form.Item label="Тип">
            <Select defaultValue="all">
                <Option value="all">Все</Option>
                {types.length ?
                    types.map((type, key): any =>
                        <Option key={key} value={key}>{type}</Option>)
                    : null}
            </Select>
        </Form.Item>
        <Form.Item label="Формат">
            <Select defaultValue="all">
                <Option value="all">Все</Option>
                {formats.length ?
                    formats.map((format, key): any =>
                        <Option key={key} value={key}>{format}</Option>)
                    : null}
            </Select>
        </Form.Item>
        <Form.Item label="Статус">
            <Select defaultValue="all">
                <Option value="all">Все</Option>
                {statuses.length ?
                    statuses.map((status, key): any =>
                        <Option key={key} value={key}>{status}</Option>)
                    : null}
            </Select>
        </Form.Item>
    </div>;
};

export default withRouter(FilterBlock);