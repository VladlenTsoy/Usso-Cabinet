import React from "react";
import "./Sidebar.less";
import {Drawer, Icon, Button, List, Select} from "antd";
import ConstructionBlock from "./Construction/Construction";
import ListBlock from "./List/List";


const SidebarBlock = ({visible, setVisible, construction, setConstruction, constructions, onMarkerClick}): React.FC => {
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
        {construction ? <ConstructionBlock construction={construction} close={close} back={back}/> :
            <ListBlock close={close} constructions={constructions} onMarkerClick={onMarkerClick}/>}
        {/*<div className="filter-side-block side-block"></div>*/}
        {/*<div className="construction-side-block side-block"></div>*/}

    </Drawer>;
};

export default SidebarBlock;