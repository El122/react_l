import React from 'react';
import { NavLink } from "react-router-dom";
import s from "./usersPage.module.css";

const UserCard = (props) => {
    let switchFollow = () => {
        props.followUser(props.id);
    }
    return (
        <NavLink key={props.key} to={"/profile/" + props.id}>
            <div className={s.userCard}>
                <img src="./img/postImg.jpg" alt="" className={s.userPhoto} />
                <div className="info">
                    <h3>{props.name}</h3>
                    <p className={s.address}>{props.address}</p>
                    <p className="status">{props.status}</p>
                    <button className="btn btn-dark" onClick={switchFollow}>{props.isFriend ? "Удалить из друзей" : "Добавить в друзья"}</button>
                </div>
            </div>
        </NavLink>
    );
}

const UsersPagination = (props) => {
    let pages = [];
    for (let i = 1; i <= props.buttonsCount; ++i) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(i => {
                let setPage = () => {
                    props.getData(i, props.pageSize)
                }

                return (
                    <button onClick={setPage} className={props.currentPage === i ? "btn btn-dark " + s.selectedBtn : "btn btn-dark"} >{i}</button>
                )
            })}
        </div >
    )
}

const UsersPage = (props) => {
    let buttonsCount = Math.ceil(props.data.totalUsersCount / props.data.pageSize);
    let users = props.data.usersPage.usersList.map((user) => <UserCard id={user.id} key={props.id} name={user.name} address={user.address} status={user.status} isFriend={user.isFriend} followUser={props.data.followUser} />);

    return (
        <div className={s.usersPage}>
            <h1>Пользователи</h1>
            {users}
            <UsersPagination getData={props.getAPIData} setUsersData={props.data.setUsersData} buttonsCount={buttonsCount} currentPage={props.data.currentPage} pageSize={props.data.pageSize} />
        </div>
    );
}

export { UsersPage };