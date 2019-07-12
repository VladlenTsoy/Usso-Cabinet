import React from "react";
import './List.less';
import {Icon, List} from "antd";
import FilterBlock from "./Filter/Filter";
import {useSelector} from "react-redux";

const ListBlock = ({close, onMarkerClick}): React.FC => {
    const {construction} = useSelector((state): void => state);
    return <div className="constructions-side-block side-block">
        <div className="header">
            <div className="title-block">Конструкции</div>
            <Icon type="close" onClick={close}/>
        </div>
        <FilterBlock/>
        <List
            className="list-block"
            itemLayout="horizontal"
            dataSource={construction.filters.all}
            renderItem={(item): any => (
                <List.Item>
                    <List.Item.Meta
                        onClick={(e): void => onMarkerClick(e, item)}
                        title={<span>{item.title}</span>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
            )}
        />
    </div>
};

export default ListBlock;