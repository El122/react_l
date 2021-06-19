import React from 'react';
import * as axios from "axios";
import s from "./usersPage.module.css";

const UserCard = (props) => {
    let switchFollow = () => {
        props.followUser(props.id);
    }

    return (
        <div key={props.id} className={s.userCard}>
            <img src="./img/postImg.jpg" alt="" className={s.userPhoto} />
            <div className="info">
                <h3>{props.name}</h3>
                <p className={s.address}>{props.address}</p>
                <p className="status">{props.status}</p>
                <button className="btn btn-dark" onClick={switchFollow}>{props.isFriend ? "Удалить из друзей" : "Добавить в друзья"}</button>
            </div>
        </div>
    );
}

const UsersPage = (props) => {
    if (props.usersPage.usersList.length == 0) {
        axios.get("http://localhost:3001/users")
            .then(res => props.setUsers(res.data.usersList));
    }

    let users = props.usersPage.usersList.map((user) => <UserCard id={user.id} name={user.name} address={user.address} status={user.status} isFriend={user.isFriend} followUser={props.followUser} />);
    return (
        <div className={s.usersPage}>
            <h1>Пользователи</h1>
            {users}
            <button className="btn btn-dark">Показать больше</button>
        </div>
    );
};

export { UsersPage };