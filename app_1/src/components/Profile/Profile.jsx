import React from 'react';
import { PostsContainer } from "./Posts/PostsContainer";
import s from "./profile.module.css";
import { Preloader } from "../Preloader";

const ProfilePhoto = () => {
    return (
        <div className={s.profilePhoto}>
            <img className={s.backImg} src="./img/backImg.jpg" alt="profile background" />
            <div className={s.ava}><img src="./img/ava.jpg" alt="ava" /></div>
        </div>
    );
}

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <h2>{props.profile.name}</h2>
            <div><span>City</span><span>{props.profile.address}</span></div>
            <div><span>Birthday</span><span>{props.profile.birthday}</span></div>
            <div><span>Site</span><span>{props.profile.site}</span></div>
        </div>
    );
}

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    };

    return (
        <main>
            <ProfilePhoto />
            <ProfileInfo profile={props.profile.data} />
            <PostsContainer />
        </main>
    );
}

export { Profile };