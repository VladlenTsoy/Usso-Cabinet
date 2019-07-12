import React from "react";
import "./Sidebar.less";
import {Drawer} from "antd";
import ConstructionBlock from "./Construction/Construction";
import ListBlock from "./List/List";
import {setCurrentConstructionAction} from "../../../../store/construction/actions";
import {useDispatch, useSelector} from "react-redux";

const SidebarBlock = ({visible, close, constructions, setConstructions, onMarkerClick}): React.FC => {
    const {construction} = useSelector((state): void => state);
    const dispatch = useDispatch();

    const back = (): void => dispatch(setCurrentConstructionAction(null));

    return <Drawer
        width={500}
        mask={false}
        closable={false}
        onClose={close}
        afterVisibleChange={(vis): void => (!vis) ? back() : null}
        visible={visible}
    >
        {construction.current ?
            <ConstructionBlock construction={construction.current} close={close} back={back}/> :
            <ListBlock close={close} constructions={constructions} setConstructions={setConstructions} onMarkerClick={onMarkerClick}/>
        }
    </Drawer>;
};

export default SidebarBlock;