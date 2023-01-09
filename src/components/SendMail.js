import CloseIcon from "@mui/icons-material/Close"
import { Button } from "@mui/material"
import { useForm } from "react-hook-form"
import React from "react"
import "./SendMail.css"
import { useDispatch } from "react-redux"
import { closeSendMessage } from "../features/mailSlice"
import { db, getServerTimestamp } from "./firebase"
import { collection, addDoc } from "firebase/firestore"

function SendMail() {
    const dispatch = useDispatch()
    //  watch,formState: { errors }
    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (formData) => {
        // console.log(formData)
        const mailsCol = collection(db, "emails")
        addDoc(mailsCol, {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: getServerTimestamp(),
        })
        dispatch(closeSendMessage())
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon
                    onClick={() => dispatch(closeSendMessage())}
                    className="sendMail__close"
                />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="to"
                    placeholder="To"
                    type="email"
                    {...register("to", { required: "Required" })}
                />
                {errors.to && <p className="sendMail__error">To is Required!</p>}
                <input
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    {...register("subject", { required: "Required" })}
                />
                {errors.subject && <p className="sendMail__error">Subject is Required!</p>}
                <input
                    name="message"
                    placeholder="Message..."
                    type="text"
                    className="sendMail__message"
                    {...register("message", { required: "Required" })}
                />
                {errors.message && <p className="sendMail__error">Message is Required!</p>}
                <div className="sendMail__options">
                    <Button
                        className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
