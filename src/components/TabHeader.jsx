import React from 'react';

const TabHeader = (props) => {
    const selectedStyle = {
        backgroundColor: "seagreen",
        display: "inline-block",
        width: "300px"
    }
    
    const notSelected = {
        backgroundColor: "grey",
        display: "inline-block",
        width: "300px"
    }

    return (
        <div style={props.selected ? selectedStyle : notSelected } onClick={() => props.handleClick(props.index)}>
            Tab {props.index}: {props.title}
        </div>
    )
}

export default TabHeader;