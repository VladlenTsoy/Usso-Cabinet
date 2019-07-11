import React from "react";
import "./LoadingWithText.less";
import {Icon} from "antd";

const LoadingWithText = ({text}): React.FC => {
    return <div className="loader-map-block">
        <div>
            <Icon type="loading"/>
            <p>Загрузка конструкций...</p>
        </div>
    </div>;
};

export default LoadingWithText;