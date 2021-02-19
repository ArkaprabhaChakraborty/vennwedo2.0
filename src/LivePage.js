import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import './LivePage.css'
import RecommendedVideos from './RecommendedVideos'
import SearchPage from './SearchPage'
import Sidebar from './Sidebar'
function LivePage() {
    return (
        <div>
            <Router>
            <Header/>
            <div className="livepage">
                <Sidebar/>
            
            <Switch>
                <Route path="/live" exact>
                    <RecommendedVideos/>
                </Route>
                <Route path="/live/search/:searchTerm">
                    <SearchPage/>
                </Route>
            </Switch>
            </div>
            </Router>
        </div>
    )
}

export default LivePage
