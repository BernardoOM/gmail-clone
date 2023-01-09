import React from "react"
import "./Header.css"
import MenuIcon from "@mui/icons-material/Menu"
import { Avatar, IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import AppsIcon from "@mui/icons-material/Apps"
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import { useDispatch, useSelector } from "react-redux"
import { logout, selectUser } from "../features/userSlice"
import { auth } from "../services/firebase"

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    }

    return (
        <div className="header">
            <div className="header__left">
                {/*for the ripple effect en el boton*/}
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img
                    src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png"
                    alt="gmailLogo"
                />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>
            <div className="header__right">
                <IconButton>
                    <HelpOutlineOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <Avatar className="header__avatar" onClick={signOut} src={user?.photoUrl} />
            </div>
        </div>
    )
}

export default Header
