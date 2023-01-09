import { Button } from "@mui/material"
import React from "react"
import { auth, provider } from "./firebase"
import { signInWithPopup } from "firebase/auth"
import "./Login.css"
import { useDispatch } from "react-redux"
import { login } from "../features/userSlice"

function Login() {
    const dispatch = useDispatch()

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then(({ user }) => {
                dispatch(
                    login({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                    })
                )
            })
            .catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png"
                    alt="gmailLogo"
                />
                <Button variant="contained" color="primary" onClick={signIn}>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login
