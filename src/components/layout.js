import React from 'react'
import Sidebar from './Sidebar'


function Layout({ children }) {
    const data = {
        'title': "Welcome to the City of Hanahan Park Central",
        'info': "The one place for all your 'Yes to Parks' information",
        'social': {
            "facebook": "https://www.facebook.com/cityofhanahan",
            "twitter": "https://www.twitter.com/cityofhanahan",
            "website": "https://www.cityofhanahan.com",
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Sidebar data={data} />
                    <div className = "vertical-line"></div>
                </div>
                <div className = "col-lg-8">
                    <div className = "articles my-5">
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Layout
