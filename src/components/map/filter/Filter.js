import React, {useEffect, useState} from 'react';
import {Col, Row, Select, Form} from "antd";
import './Filter.less';

const {Option} = Select;

const FilterBlock = ({region}) => {
    return <div className="filter-block">
        <Row gutter={15}>
            <Col lg={4}>
                <Form.Item label="Зона">
                    <Select defaultValue="all" className="select-form">
                        <Option value="all" key="all">Все</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col lg={4}>
                <Form.Item label="Район">
                    <Select defaultValue="all" className="select-form">
                        <Option value="all" key="all">Все</Option>
                        {region.district.map(val => <Option value={val.id} key={val.id}>{val.name}</Option>)}
                    </Select>
                </Form.Item>
            </Col>
            <Col lg={4}>
                <Form.Item label="Тип">
                    <Select defaultValue="all" className="select-form">
                        <Option value="all" key="all">Все</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col lg={4}>
                <Form.Item label="Формат">
                    <Select defaultValue="all" className="select-form">
                        <Option value="all" key="all">Все</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col lg={4}>
                <Form.Item label="Статус">
                    <Select defaultValue="all" className="select-form">
                        <Option value="all" key="all">Все</Option>
                        <Option value="free" key="all">Свободные</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col lg={4}>
            </Col>
        </Row>
    </div>
};

export default FilterBlock;