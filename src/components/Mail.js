import {
    ArrowBack,
    DeleteOutline,
    EmailOutlined,
    MoveToInbox,
    ReportGmailerrorredOutlined,
    WatchLaterOutlined,
    AddTaskOutlined,
    DriveFileMoveOutlined,
    LabelOutlined,
    MoreVertOutlined,
    ChevronLeft,
    ChevronRight,
    Keyboard,
    LabelImportant,
} from "@mui/icons-material"
import { IconButton } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectOpenMail } from "../features/mailSlice"
import "./Mail.css"

function Mail() {
    const navigate = useNavigate()
    const selectedMail = useSelector(selectOpenMail)

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => navigate("/")}>
                        <ArrowBack />
                    </IconButton>
                    <div className="mail__toolsLeftGroup">
                        <IconButton>
                            <MoveToInbox />
                        </IconButton>
                        <IconButton>
                            <ReportGmailerrorredOutlined />
                        </IconButton>
                        <IconButton>
                            <DeleteOutline />
                        </IconButton>
                    </div>
                    <div className="mail__toolsLeftGroup">
                        <IconButton>
                            <EmailOutlined />
                        </IconButton>
                        <IconButton>
                            <WatchLaterOutlined />
                        </IconButton>
                        <IconButton>
                            <AddTaskOutlined />
                        </IconButton>
                    </div>

                    <div className="mail__toolsLeftGroup">
                        <IconButton>
                            <DriveFileMoveOutlined />
                        </IconButton>
                        <IconButton>
                            <LabelOutlined />
                        </IconButton>
                        <IconButton>
                            <MoreVertOutlined />
                        </IconButton>
                    </div>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <Keyboard />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportant className="mail__important" />
                    <p>{selectedMail?.title}</p>
                    <p className="mail__time">{selectedMail?.time}</p>
                </div>

                <div className="mail__message">
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
