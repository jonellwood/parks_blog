import React from 'react'
import { FaFacebook as Facebook, FaTwitter as Twitter, FaGithub as Github } from 'react-icons/fa';
import { MdLanguage as Website } from "react-icons/md";

function SocialLinks({socialLinks}) {
    return (
        <div>
            <a className="icon" href={socialLinks.facebook}><Facebook /></a>
            <a className="icon" href={socialLinks.twitter}><Twitter /></a>
            <a className="icon" href={socialLinks.website}><Website /></a>
        </div>
    )
}

export default SocialLinks


