import React from "react";

export default function HeaderProfile() {
    return (
        <button className="material-btn">
            <img className="rounded-full w-12 transition duration-150 cursor-pointer border-2 border-transparent hover:border-gray-400 hover:shadow-lg" title="profil" src={process.env.PUBLIC_URL + '/logo512.png'} alt="profile-avatar"/>
        </button>
    );
}