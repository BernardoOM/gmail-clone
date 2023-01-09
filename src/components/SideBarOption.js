import React from "react"
import "./SideBarOption.css"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"

function SideBarOption({ Icon, title, number = 0, selected, categories = false }) {
    return (
        <div className={`sidebaroption ${selected && "sidebaroption-active"}`}>
            {categories ? (
                <div className="sidebaroption___categories">
                    <ArrowRightIcon /> <Icon />
                </div>
            ) : (
                <Icon />
            )}
            <h3>{title}</h3>
            {!categories && <p>{number}</p>}
        </div>
    )
}

export default SideBarOption
