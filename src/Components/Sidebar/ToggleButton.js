import React from 'react'

const ToggleButton = ({click}) => {
    return (
        <button className="toggle-button" onClick={click}>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
        </button>
    )
}

export default ToggleButton