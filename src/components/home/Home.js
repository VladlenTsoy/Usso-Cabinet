// @flow
import React, {useEffect, useState} from "react";
import "./Home.less";
import {Button, Card, Col, Row, Select, Typography, Icon} from "antd";
import logo from "../../assets/logo.svg";
import {Link, withRouter} from "react-router-dom";
import {useStore} from "../../store/useStore";
import type {Region} from "../../store/region/reducer";
import {ADD_REGIONS} from "../../store/region/reducer";

const {Option} = Select;
const {Text} = Typography;


const Home = ({history}): React.FC => {
    const [state, dispatch] = useStore();
    const [currentRegionId, setCurrent] = useState(14);
    const [loader, setLoader] = useState(false);
    const [regions, setRegions] = useState<Array<Region>>(state.region.all);

    //
    useEffect(() => {
        console.log("FETCH_REGIONS_HOME.JS");
        const fetch = async () => {
            setLoader(true);
            const response = await state.api.guest.get("regions");
            setRegions(response.data);
            dispatch({type: ADD_REGIONS, payload: response.data});
            setLoader(false);
        };

        if (!regions.length)
            fetch().catch();
    }, [state.api, dispatch, regions.length]);

    //
    const selectCurrentRegion = (id: number): void => setCurrent(id);

    //
    const toMap = (): void => history.push(`/map/${currentRegionId}`);

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
                            {regions.map((country): any =>
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