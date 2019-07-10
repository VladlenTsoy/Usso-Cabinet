import React, {useEffect, useState} from 'react';
import './Home.less';
import {Button, Card, Col, Row, Select, Typography, Icon} from "antd";
import logo from "../../assets/logo.svg";
import {Link, withRouter} from "react-router-dom";
import {useStore} from "../../store/useStore";

const {Option} = Select;
const {Text} = Typography;

interface Region {
    id: number,
    name: string,
}

const Home = ({history}) => {
    const [state] = useStore();
    const [currentRegionId, setCurrent] = useState(14);
    const [loader, setLoader] = useState(true);
    const [regions, setRegions]: Map<Region> = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const response = await state.api.guest.get('regions');
            setRegions(response.data);
            setLoader(false);
        };

        fetch().catch();
    }, [state.api]);

    const selectCurrentRegion = (id: number) => setCurrent(id);

    const toMap = () => {
        history.push(`/map/${currentRegionId}`);
    };

    return <Row type="flex" justify="center" align="middle" className="home">
        <Col lg={6}>
            <Card>
                <img src={logo} alt="Usso Logo" className="logo"/>
                <Text type="secondary" className="sub-title">Система подбора конструкций наружной рекламы по
                    Узбекистану.</Text>
                {loader ?
                    <div className="loader" key="loader">
                        <Icon type="loading"/>
                        <Text>Загрузка регионов...</Text>
                    </div> :
                    <div key="content">
                        <Select defaultValue={currentRegionId} className="select" onChange={selectCurrentRegion}>
                            {regions.map((country) =>
                                <Option value={country.id} key={country.id}>{country.title}</Option>
                            )}
                        </Select>
                        <Button type="primary" block onClick={toMap}>Далее</Button>
                    </div>
                }
                <Link to="/auth">Персональный кабинет</Link>
            </Card>
        </Col>
    </Row>;
};

export default withRouter(Home);