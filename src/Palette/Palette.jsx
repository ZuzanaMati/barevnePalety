import React from "react"
import SchemeColor from '../SchemeColor/SchemeColor.jsx';
import "./Palette.css"

let Palette = ({ paletteData }) => {

    let orientation =
        paletteData.direction === "vertical"
            ? "palette-scheme palette-scheme--vertical"
            : "palette-scheme palette-scheme--horizontal"

    return (
        <div className="palette">
            <div className={orientation}>
                <img className="scheme-image" src={paletteData.image} alt={paletteData.name} />
                <div className="scheme-colors">
                    {paletteData.colors.map((item) => (
                        <SchemeColor
                            key={item}
                            color={item} />))}
                </div>
            </div>
            <div className="palette-info">
                <h2>{paletteData.name}</h2>
                <p>{paletteData.description}</p>

                <p>Photo by <a href={paletteData.attribution.url} target="_blank">{paletteData.attribution.name}</a>.</p>
            </div>
        </div>
    )
}

export default Palette