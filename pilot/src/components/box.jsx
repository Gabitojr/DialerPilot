import React from 'react';
import './box.css';
import Content from './content/Content';
const Box = (props) => {


    
    return (
        <>
        <div className="rectangle2" style={props.size}>
        <h3>{props.title}</h3>
        <div>
        <Content type={props.type} title={props.title}/>
        </div>
        </div>
    
        </>
    );
    }

export default Box;