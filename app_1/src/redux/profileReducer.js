const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
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
    profile: null,
};
const profileReducer = (data = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...data,
                newPostText: action.value
            };
        }
        case ADD_POST: {
            let newPost = {
                id: data.postsData.length,
                name: "Some",
                message: data.newPostText,
                likeCount: 0,
                commentsCount: 0,
                ava: "./img/postImg.jpg"
            };
            return {
                ...data,
                postsData: [newPost, ...data.postsData],
                newPostText: ""
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...data,
                profile: action.profile
            };
        }
        default:
    }
    return data;
}

export { profileReducer };