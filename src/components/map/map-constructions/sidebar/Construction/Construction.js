import React from "react";
import "./Construction.less";
import {Button, Icon} from "antd";

const ButtonGroup = Button.Group;

const ConstructionBlock = ({construction, close, back}): React.FC => {
    return <div className="construction-side-block side-block">
        <div className="header">
            <Icon type="arrow-left" onClick={back}/>
            <div className="title-block">Конструкция</div>
            <Icon type="close" onClick={close}/>
        </div>
        <div className="image-block">
            <img src={"http://api.ussodesign.uz" + construction.images[0]} alt=""/>
        </div>
        <div className="sides-block">

        </div>
        <div className="actions-block">
            <Button type="primary" icon="shopping-cart">Добавить в корзину</Button>
            <ButtonGroup>
                <Button disabled>Строна A</Button>
                <Button>Строна B</Button>
            </ButtonGroup>
        </div>
        <div className="body">
            <h1 className="title">{construction.title}</h1>
            <pre>
                    {construction.landmark}
                </pre>
            <table className="table-details">
                <tbody>
                <tr>
                    <td>Стоимость:</td>
                    <td>{construction.price_ip} сум</td>
                </tr>
                <tr>
                    <td>Монтаж/Демонтаж:</td>
                    <td>{construction.price_installation} сум</td>
                </tr>
                <tr>
                    <td>Статус:</td>
                    <td>Свободная</td>
                </tr>
                <tr>
                    <td>Тип конструкции:</td>
                    <td>{construction.type}</td>
                </tr>
                <tr>
                    <td>Формат:</td>
                    <td>{construction.format}</td>
                </tr>
                <tr>
                    <td>Подсветка:</td>
                    <td>{construction.lighting}</td>
                </tr>
                <tr>
                    <td>Расстояние до светофора:</td>
                    <td>{construction.distance_to_lights}</td>
                </tr>
                <tr>
                    <td>Паспорт:</td>
                    <td>{construction.passport}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>;
};

export default ConstructionBlock;