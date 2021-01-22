import React from 'react'
import SocialLinks from './SocialLinks'
import Logo from '../images/CoH-Logo.png'
import { Link } from 'gatsby'

const Sidebar = ({ data }) => {
    const title = data.title;
    const info = data.info
    const socialLinks = data.social

    return (
        <div className="sidebar my-5">
            <img
                width="325"
                className="rounded-circle mb-5 profile-img"
                alt=""
                src={Logo} />
            <h2>{title}</h2>
            <p>{info}</p>
            <SocialLinks socialLinks = {socialLinks}/>
            <Link to="/parks" className="parksLink">Parks</Link>
        </div>
    )
}

export default Sidebar
