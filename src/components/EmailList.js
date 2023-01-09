import React, { useEffect, useState } from "react"
import "./EmailList.css"
import { IconButton, Checkbox } from "@mui/material"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import RefreshIcon from "@mui/icons-material/Refresh"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import KeyboardIcon from "@mui/icons-material/Keyboard"
import InboxIcon from "@mui/icons-material/Inbox"
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined"
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined"

import Section from "./Section"
import EmailRow from "./EmailRow"
import { db } from "../services/firebase"
import { collection, query, getDocs, orderBy } from "firebase/firestore"

function EmailList() {
    const [emails, setEmails] = useState([])

    useEffect(() => {
        ;(async () => {
            setEmails(await getMails())
        })()
    }, [emails])

    async function getMails() {
        const mailsCol = collection(db, "emails")
        const q = query(mailsCol, orderBy("timestamp", "desc"))
        const mailSnapshot = await getDocs(q)
        const mailList = mailSnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }))
        return mailList
    }

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardIcon />
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                </div>
            </div>

            <div className="emailList__sections">
                <Section Icon={InboxIcon} title="Primary" color="blue" selected={true} />
                <Section Icon={LocalOfferOutlinedIcon} title="Promotions" color="blue" />
                <Section Icon={PeopleAltOutlinedIcon} title="Social" color="blue" />
            </div>

            {emails.map(({ id, data: { to, subject, message, timestamp } }) => {
                return (
                    <EmailRow
                        key={id}
                        id={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                )
            })}
        </div>
    )
}

export default EmailList
