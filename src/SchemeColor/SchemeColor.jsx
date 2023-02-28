import React from "react"
import "./SchemeColor.css"

let SchemeColor = ({ color }) => {
    return (
        <div className="scheme-color" style={{ backgroundColor: color }}>{color}</div>
    )
}

export default SchemeColor