import React from 'react'
import Header from './Header'
import './LivePage.css'
import RecommendedVideos from './RecommendedVideos'
import Sidebar from './Sidebar'
function LivePage() {
    return (
        <div>
            <Header/>
            <div className="livepage">
                <Sidebar/>
                <RecommendedVideos/>
            </div>
        </div>
    )
}

export default LivePage
