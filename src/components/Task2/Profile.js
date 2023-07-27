import React from "react";
import style from "./profile.module.css";

const Profile = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.heading}>Your Profile</h1>
          <p className={style.para}>
            {" "}
            See how your different profiles appear in Google services.
          </p>

          <div className={style.images}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEPBCdPKFMjQ8pV0YVP7uB9xCm7TVxS1zZg&usqp=CAU"
              className={style.avatar}
              alt="avatar"
              width={100}
              height={100}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJVp7Tm5SqzYSQCI4c12l07pzdQe5rHd1hA&usqp=CAU"
              className={style.avatar}
              alt="avatar"
              width={100}
              height={100}
            />
          </div>


          
        </div>
        <hr className={style["custom-hr"]}/>
        <button className={style.btn}>See profiles</button>
      </div>
    </>
  );
};

export default Profile;
