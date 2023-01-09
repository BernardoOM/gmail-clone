import { Button, IconButton } from "@mui/material"
import React from "react"
import "./SideBar.css"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import SideBarOption from "./SideBarOption"
import InboxIcon from "@mui/icons-material/Inbox"
import StarOutlineIcon from "@mui/icons-material/StarOutline"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import LabelImportantOutlined from "@mui/icons-material/LabelImportantOutlined"
import SendOutlinedIcon from "@mui/icons-material/SendOutlined"
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined"
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import AddIcon from "@mui/icons-material/Add"
import LabelIcon from "@mui/icons-material/Label"
import { useDispatch } from "react-redux"
import { openSendMessage } from "../features/mailSlice"

function SideBar() {
    const dispatch = useDispatch()

    return (
        <div className="sidebar">
            <Button
                startIcon={<EditOutlinedIcon fontSize="large" />}
                className="sidebar__compose"
                onClick={() => dispatch(openSendMessage())}
            >
                Compose
            </Button>

            <SideBarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
            <SideBarOption Icon={StarOutlineIcon} title="Starred" number={54} />
            <SideBarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
            <SideBarOption Icon={LabelImportantOutlined} title="Important" number={54} />
            <SideBarOption Icon={SendOutlinedIcon} title="Sent" number={54} />
            <SideBarOption Icon={NoteOutlinedIcon} title="Drafts" number={54} />
            <SideBarOption Icon={LabelOutlinedIcon} title="Categories" categories={true} />
            <SideBarOption Icon={ExpandMoreIcon} title="More" />

            <div className="sidebar__footer">
                <div className="sidebar__labels">
                    <h3>Labels</h3>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                </div>
                <div className="sidebar__footerIcons">
                    <SideBarOption Icon={LabelIcon} title="Personal" />
                    <SideBarOption Icon={ExpandMoreIcon} title="More" />
                </div>
            </div>
        </div>
    )
}

export default SideBar
