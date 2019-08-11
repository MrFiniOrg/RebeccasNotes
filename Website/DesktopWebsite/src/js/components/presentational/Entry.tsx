import * as React from "react"
import "./../../../CSS/All.css"
import "./../../../CSS/Navigation.css"
import { Route, Switch } from "react-router-dom"
import { HomePage } from "../container/Pages/HomePage"
import { AboutPage } from "../container/Pages/AboutPage"

export const Entry: React.FC = () =>
{
    const AboutPageProps = {title: "About"}
    const HomePageProps = {title: "Home"}
    return (<Switch>
            <Route path={"/about"} render={() => <AboutPage {...AboutPageProps}/>} />
            <Route exact path={"/"} render={() => <HomePage {...HomePageProps}/>} />
        </Switch>)
}