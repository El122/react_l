import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

document.addEventListener("DOMContentLoaded", () => {
    let cont = document.getElementsByClassName(s.messagesContainer)[0];
    if (cont !== undefined) {
        cont.scrollTop = cont.scrollHeight;
    }
})

const Dialog = (props) => {
    return (
        <NavLink to={"/messages/" + props.id}>
            <div className={s.message}>
                <img src={props.ava} alt="post img" />
                <div className="postText">
                    <h5>{props.name}</h5>
                    <p>{props.lastMsg}</p>
                </div>
            </div>
        </NavLink >
    );
}

const DialogsList = (props) => {
    let friendsArr = props.friendsList
        .map(friend => <Dialog id={friend.id} name={friend.name} ava={friend.ava} lastMsg={friend.lastMsg} />);

    return (
        <div className={s.dialogsList}>
            {friendsArr}
        </div>
    );
}

const MessageItem = (props) => {
    let classes = s.messageItem + " " + (props.user === "me" ? s.me : s.friend);
    return (
        <div className={classes}>
            <img src="./img/postImg.jpg" alt="" />
            <p className={s.messageext}>{props.text}</p>
        </div>
    );
}

const MessagesContainer = (props) => {
    let messageArr = props.messageData
        .map(message => <MessageItem user={message.by} text={message.text} />);

    return (
        <div className={s.messagesContainer}>
            {messageArr}
        </div>
    );
}

const MessageForm = (props) => {
    let messageElem = React.createRef();

    let onPostChange = () => {
        let newPostText = messageElem.current.value;
        props.onPostChange(newPostText);
    }

    let sendMessage = () => {
        props.sendMessage();
    }

    return (
        <div className={s.messageForm}>
            <textarea className="form-control" ref={messageElem} onChange={onPostChange} rows="3" value={props.newMessageText} />
            <button type="button" className="btn btn-dark" onClick={sendMessage}>Отправить</button>
        </div>
    );
}

const MessageBox = (props) => {
    return (
        <div className={s.messageBox}>
            <MessagesContainer messageData={props.dialogsPage.messageData} />
            <MessageForm
                newMessageText={props.dialogsPage.newMessageText}
                sendMessage={props.sendMessage}
                onPostChange={props.onPostChange}
            />
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogsPage}>
            <DialogsList friendsList={props.dialogsPage.friendsList} />
            <MessageBox
                dialogsPage={props.dialogsPage}
                sendMessage={props.sendMessage}
                onPostChange={props.onPostChange}
            />
        </div>
    );
}

export { Dialogs };