import React from "react";
import './List.less';
import {Icon, List} from "antd";
import FilterBlock from "./Filter/Filter";

const ListBlock = ({constructions, close, onMarkerClick, setConstructions}): React.FC => {
    return <div className="constructions-side-block side-block">
        <div className="header">
            <div className="title-block">Конструкции</div>
            <Icon type="close" onClick={close}/>
        </div>
        <FilterBlock setConstructions={setConstructions}/>
        <List
            className="list-block"
            itemLayout="horizontal"
            dataSource={constructions}
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