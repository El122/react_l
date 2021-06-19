import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";

let data = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
}

let funct = (dispatch) => {
    return {
        onPostChange: (newPostText) => {
            dispatch({
                type: "UPDATE_NEW_MESSAGE_TEXT",
                value: newPostText
            });
        },

        sendMessage: () => {
            dispatch({
                type: "SEND_MESSAGE"
            });
        }
    };
}


let DialogsContainer = connect(data, funct)(Dialogs);

// const DialogsContainer = (props) => {
//     let onPostChange = (newPostText) => {
//         props.dispatch({
//             type: "UPDATE_NEW_MESSAGE_TEXT",
//             value: newPostText
//         });
//     }

//     let sendMessage = () => {
//         props.dispatch({
//             type: "SEND_MESSAGE"
//         });
//     }

//     return (<Dialogs
//         dialogsPage={props.dialogsPage}
//         onPostChange={onPostChange}
//         sendMessage={sendMessage}
//     />);
// }

export { DialogsContainer };