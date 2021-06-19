import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { usersReducer } from "./usersReducer";

let store = {
    _data: {
        dialogsPage: {
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
        },
        profilePage: {
            newPostText: "",
            postsData: [
                {
                    id: 1,
                    name: "Luk",
                    message: "Завтра вторник",
                    likeCount: "5",
                    commentsCount: "12",
                    ava: "./img/postImg.jpg"
                }, {
                    id: 2,
                    name: "O",
                    message: "Сегодня вторник",
                    likeCount: "0",
                    commentsCount: "1",
                    ava: "./img/postImg.jpg"
                }, {
                    id: 3,
                    name: "Elis",
                    message: "Сегодня понедельник",
                    likeCount: "10",
                    commentsCount: "0",
                    ava: "./img/postImg.jpg"
                }, {
                    id: 4,
                    name: "Mikasa",
                    message: "Сегодня день",
                    likeCount: "12",
                    commentsCount: "14",
                    ava: "./img/postImg.jpg"
                }
            ],
        }
    },
    _callSubscriber() { },

    _sendMessage() {
        let newMessage = {
            id: this._data.dialogsPage.messageData.length,
            text: this._data.dialogsPage.newMessageText,
            by: "me"
        };
        this._data.dialogsPage.messageData.push(newMessage);
        this._callSubscriber(this);
    },
    _updateNewPostText(newText) {
        this._data.profilePage.newPostText = newText;
        this._callSubscriber(this);
    },
    _addPost() {
        let postText = this._data.profilePage.newPostText;
        let newPost = {
            id: this._data.profilePage.postsData.length,
            name: "Some",
            message: postText,
            likeCount: 0,
            commentsCount: 0,
            ava: "./img/postImg.jpg"
        };
        this._data.profilePage.postsData.unshift(newPost);
        this._data.profilePage.newPostText = "";
        this._callSubscriber(this);
    },
    _updateNewMessageText(newText) {
        this._data.dialogsPage.newMessageText = newText;
        this._callSubscriber(this);
    },

    getData() {
        return this._data;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._data.profilePage = profileReducer(action, this._data.profilePage);
        this._data.dialogsPage = dialogsReducer(action, this._data.dialogsPage);
        this._data.usersPage = dialogsReducer(action, this._data.usersReducer);
        this._callSubscriber(this);

        // switch (action.type) {
        //     case UPDATE_NEW_POST_TEXT:
        //         this._updateNewPostText(action.value);
        //         break;
        //     case ADD_POST:
        //         this._addPost();
        //         break;
        //     case SEND_MESSAGE:
        //         this._sendMessage();
        //         break;
        //     case UPDATE_NEW_MESSAGE_TEXT:
        //         this._updateNewMessageText(action.value);
        //         break;
        // }
    },
};

export { store };