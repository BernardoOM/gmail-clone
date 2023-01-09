import React from "react"
import "./Section.css"

function Section({ Icon, title, color, selected = false }) {
    return (
        <div className={`section ${selected && "section__selected"}`}>
            <Icon />
            <h4>{title}</h4>
        </div>
    )
}

export default Section
