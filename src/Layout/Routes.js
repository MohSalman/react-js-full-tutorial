import React from 'react'
import { Switch,Route} from 'react-router-dom'
import { RouterConstant } from '../constants/RouteConstant'
import AboutUs from '../Pages/AboutUs/AboutUs'
import HomePage from '../Pages/HomePage/HomePage'

const Routes = () => {
    return (
        <Switch>
            <Route exact path={RouterConstant.Home} component={HomePage}/>
            <Route exact path={RouterConstant.AboutUs} component={AboutUs}/>
            <Route path="*" render={()=>(<p>page not found</p>)}/>
        </Switch>
    )
}

export default Routes
