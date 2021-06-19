import React from "react";
import s from "./posts.module.css";

const PostForm = (props) => {
    let newPostElem = React.createRef();
    let addPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let postText = newPostElem.current.value;
        props.onPostChange(postText);
    };

    return (
        <form>
            <textarea className="form-control" ref={newPostElem} onChange={onPostChange} rows="3" value={props.profilePage.newPostText} />
            <button type="button" className="btn btn-dark" onClick={addPost}>Отправить</button>
        </form>
    );
}

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={props.ava} alt="post img" />
            <div className="postText">
                <h4>{props.name}</h4>
                {props.message}
                <div className={s.postsBtn}>
                    <div className={s.like}>
                        <svg viewBox="0 0 512 512" width="15px" height="15px">
                            <path d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
			c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
			c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
			s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
			C512,93.417,453.532,30,376,30z"/>
                        </svg>
                        {props.likeCount}
                    </div>
                    <div className={s.comments}>
                        <svg viewBox="0 0 437.813 437.813" width="15px" height="15px">
                            <path d="M373.953,65.095c-42.496-43.008-100.864-66.56-161.28-65.024C92.353,3.655-1.855,103.495,1.729,223.815
			c0.512,25.088,5.632,49.664,14.848,72.704c7.68,19.456,17.92,37.376,30.72,53.76l-17.92,42.496
			c-7.168,16.384,0.512,35.328,16.896,42.496c5.632,2.56,12.288,3.072,18.432,2.048l82.944-14.336
			c29.696,10.24,60.928,13.824,92.16,10.752c107.008-10.752,190.464-98.304,196.096-205.824
			C438.977,166.983,416.449,108.103,373.953,65.095z M202.945,304.199h-56.832c-8.704,0-16.384-7.168-16.384-16.384
			c0-8.704,7.168-16.384,16.384-16.384h56.832c8.704,0,16.384,7.168,16.384,16.384C219.329,297.031,212.161,304.199,202.945,304.199
			z M291.521,237.639H146.113c-8.704,0-16.384-7.168-16.384-16.384s7.168-16.384,16.384-16.384h145.408
			c8.704,0,16.384,7.168,16.384,16.384S300.225,237.639,291.521,237.639z M291.521,170.567H146.113
			c-8.704,0-16.384-7.168-16.384-16.384c0-8.704,7.168-16.384,16.384-16.384h145.408c8.704,0,16.384,7.168,16.384,16.384
			C307.905,162.887,300.225,170.567,291.521,170.567z"/>
                        </svg>
                        {props.commentsCount}
                    </div>
                </div>
            </div>
        </div>
    );
}

const Posts = (props) => {
    let postsArr = props.profilePage.postsData.reverse()
        .map(post => <Post id={post.id} name={post.name} message={post.message} likeCount={post.likeCount} commentsCount={post.commentsCount} ava={post.ava} />);

    return (
        <div className={s.posts}>
            <h2>Записи на стене Some Cat</h2>
            <PostForm
                profilePage={props.profilePage}
                addPost={props.addPost}
                onPostChange={props.onPostChange}
            />
            {postsArr}
        </div>
    );
}

export { Posts };