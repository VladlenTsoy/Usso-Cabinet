import React, {useState} from "react";
import {Form, Select} from "antd";
import {useSelector} from "react-redux";

const {Option} = Select;

const SelectFilterBlock = ({title, name, values, setConstructions}): React.FC => {
    const {construction, region} = useSelector((state): void => state);
    const [constructions] = useState(construction.region[region.current.id]);

    const changeSelect = (val): void => setConstructions(val === "all" ? constructions : constructions.filter((construction): any => construction[name] === val));

    return <Form.Item label={title}>
        <Select defaultValue="all" onChange={changeSelect}>
            <Option key="all" value="all">Все</Option>
            {values.length ?
                values.map((value, key): any =>
                    <Option key={key} value={key}>{value}</Option>)
                : null}
        </Select>
    </Form.Item>;
};

export default SelectFilterBlock;