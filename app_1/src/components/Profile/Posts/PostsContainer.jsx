import { connect } from "react-redux";
import { Posts } from "./Posts";
// import { StoreContext } from "../../../StoreContext";

let f1 = (state) => {
    return {
        profilePage: state.profilePage
    };
}

let f2 = (dispatch) => {
    return {
        addPost: () => {
            dispatch({
                type: "ADD_POST"
            });
        },

        onPostChange: (postText) => {
            dispatch({
                type: "UPDATE_NEW_POST_TEXT",
                value: postText
            });
        }
    };
}

const PostsContainer = connect(f1, f2)(Posts);

// const PostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             { (store) => {
//                 function addPost() {
//                     store.dispatch({
//                         type: "ADD_POST"
//                     });
//                 }
//                 let onPostChange = (postText) => {
//                     store.dispatch({
//                         type: "UPDATE_NEW_POST_TEXT",
//                         value: postText
//                     });
//                 };

//                 return (
//                     <Posts
//                         profilePage={store.getState().profilePage}
//                         addPost={addPost}
//                         onPostChange={onPostChange}
//                     />
//                 );
//             }}
//         </StoreContext.Consumer>);
// }

export { PostsContainer };