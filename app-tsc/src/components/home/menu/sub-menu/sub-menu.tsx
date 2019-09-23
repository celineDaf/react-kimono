import React from 'react';
import './sub-menu.scss';

interface Props {
    title: string
}

const SubMenu = (props: Props) => {
    return (
        <div className="sub-menu">
        <div className="title">{props.title}</div>
        </div>
    );
};

export default SubMenu;
