import React from 'react'
import SocialLinks from './SocialLinks'
import Logo from '../images/CoH-Logo.png'

const Sidebar = ({ data }) => {
    const title = data.title;
    const info = data.info
    const socialLinks = data.social

    return (
        <div className="sidebar my-5">
            <img
                width="325"
                className="rounded-circle mb-5 profile-img"
                src={Logo} />
            <h2>{title}</h2>
            <p>{info}</p>
            <SocialLinks socialLinks = {socialLinks}/>
        </div>
    )
}

export default Sidebar
