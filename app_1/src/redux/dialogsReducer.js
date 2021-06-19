const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

// const [initialState, setState] = React.useState(null);
// React.useEffect(() => {
//     fetch("/dialogs")
//         .then((res) => res.json())
//         .then((data) => setState(data.message));
// }, []);

let initialState = {
    newMessageText: "",
    messageData: [
        {
            id: 0,
            text: "Сообщение 1",
            by: "me"
        }, {
            id: 1,
            text: "Еще одно сообщение",
            by: "me"
        }, {
            id: 2,
            text: "Нет сообщения",
            by: "friend"
        }, {
            id: 3,
            text: "А тут есть сообщение",
            by: "me"
        }, {
            id: 4,
            text: "Это не сообщение",
            by: "friend"
        }, {
            id: 5,
            text: "Это тоже",
            by: "friend"
        }, {
            id: 6,
            text: "Hello World",
            by: "me"
        }, {
            id: 7,
            text: "Сообщение",
            by: "friend"
        }
    ],
    friendsList: [
        {
            id: 1,
            name: "Elis",
            ava: "./img/postImg.jpg",
            lastMsg: "Спасибо"
        }, {
            id: 2,
            name: "Arya",
            ava: "./img/postImg.jpg",
            lastMsg: "Хаха"
        }, {
            id: 3,
            name: "Mika",
            ava: "./img/postImg.jpg",
            lastMsg: "..."
        }
    ],
};
const dialogsReducer = (data = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: data.messageData.length,
                text: data.newMessageText,
                by: "me"
            };
            return {
                ...data,
                messageData: [...data.messageData, newMessage],
                newMessageText: ""
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...data,
                newMessageText: action.value
            };
        }
        default:
    }
    return data;
}

export { dialogsReducer };