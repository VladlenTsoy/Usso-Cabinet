import React from "react";
import "./Sidebar.less";
import {Drawer} from "antd";
import ConstructionBlock from "./Construction/Construction";
import ListBlock from "./List/List";


const SidebarBlock = ({visible, setVisible, currentConstruction, setConstruction, constructions, onMarkerClick}): React.FC => {
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
        {currentConstruction ?
            <ConstructionBlock construction={currentConstruction} close={close} back={back}/> :
            <ListBlock close={close} constructions={constructions} onMarkerClick={onMarkerClick}/>
        }
    </Drawer>;
};

export default SidebarBlock;