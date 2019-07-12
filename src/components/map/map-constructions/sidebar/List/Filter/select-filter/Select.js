import React, {useEffect, useState} from "react";
import {Form, Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {setConstructionsForFiltersAction} from "../../../../../../../store/construction/actions";

const {Option} = Select;

const SelectFilterBlock = ({title, name, value, parent}): React.FC => {
    const {construction, region} = useSelector((state): void => state);
    const [constructions] = useState(construction.region[region.current.id]);
    const [filters, setFilters] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        let temp = [];
        (construction.filters[parent].length ? construction.filters[parent] : construction.filters["all"])
            .map((construction): any => {
                temp[construction[name]] = construction[value || name];
            });
        setFilters(temp);
    }, [construction.filters[parent]]);

    useEffect(() => {
        dispatch(setConstructionsForFiltersAction(construction.filters[parent].filter((construction) => {
            filters.includes(construction[value]);
        })));
    }, [filters]);

    const changeSelect = (val): void =>
        dispatch(setConstructionsForFiltersAction(val === "all" ? constructions : constructions.filter((construction): any => construction[name] === val), name));

    return <Form.Item label={title}>
        <Select defaultValue="all" onChange={changeSelect}>
            <Option key="all" value="all">Все</Option>
            {filters.length ?
                filters.map((value, key): any =>
                    <Option key={key} value={key}>{value}</Option>)
                : null}
        </Select>
    </Form.Item>;
};

export default SelectFilterBlock;