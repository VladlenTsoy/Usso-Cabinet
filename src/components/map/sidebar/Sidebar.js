import React from "react";
import "./Sidebar.less";
import {Drawer, Icon, Button, List, Select} from "antd";

const { Option } = Select;
const ButtonGroup = Button.Group;

const SidebarBlock = ({visible, setVisible, construction, setConstruction, constructions, onMarkerClick}): React.FC => {
    console.log(construction);

    const back = (): void => setConstruction(null);

    const close = (): any => {
        setVisible(false);
        setConstruction(null);
    };

    return <Drawer
        width={500}
        mask={false}
        closable={false}
        onClose={(): void => setVisible(false)}
        visible={visible}
    >
        {construction ? <div className="construction-side-block side-block">
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
                </table>
            </div>
        </div> : <div className="constructions-side-block side-block">
            <div className="header">
                <div className="title-block">Конструкции</div>
                <Icon type="close" onClick={close}/>
            </div>
            <div className="filter-block">
                <Select defaultValue="lucy">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                </Select>
                <Select defaultValue="lucy">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                </Select>
                <Select defaultValue="lucy">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                </Select>
                <Select defaultValue="lucy">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                </Select>
                <Select defaultValue="lucy">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                </Select>
                <Select defaultValue="lucy">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                </Select>
            </div>
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
        </div>}
        {/*<div className="filter-side-block side-block"></div>*/}
        {/*<div className="construction-side-block side-block"></div>*/}

    </Drawer>;
};

export default SidebarBlock;