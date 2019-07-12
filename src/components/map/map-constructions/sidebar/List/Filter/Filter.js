// @flow
import React from "react";
import "./Filter.less";
import {withRouter} from "react-router-dom";
import {Form, Select} from "antd";
import type {Region} from "../../../../../../store/region/reducer";
import {useSelector} from "react-redux";
import SelectFilterBlock from "./select-filter/Select";

const {Option} = Select;

const FilterBlock = ({history}): React.FC => {
    const {region} = useSelector((state): void => state);
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
        <SelectFilterBlock title="Зона" name="zone" parent="all"/>
        <SelectFilterBlock title="Район" name="district_id" value="district" parent="zone"/>
        <SelectFilterBlock title="Тип" name="type_id" value="type" parent="district_id"/>
        <SelectFilterBlock title="Формат" name="format_id" value="format" parent="type_id"/>
        <SelectFilterBlock title="Статус" name="status" parent="format_id"/>
    </div>;
};

export default withRouter(FilterBlock);