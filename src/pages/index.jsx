import React from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";


import Pool1 from './Pool1'
import Pool2 from './Pool2'
import Guide from './Guide'
import Test from './Test'

import Header from '../components/Header'
import Footer from '../components/Footer'

const PagesStyle = styled.div`
`

function index() {


    return (
        <PagesStyle>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/Pool1" />
                    </Route>
                    <Route exact path="/Pool1">
                        <Pool1 />
                    </Route>
                    <Route exact path="/Pool2">
                        <Pool2 />
                    </Route>
                    <Route exact path="/Guide">
                        <Guide />
                    </Route>
                    <Route exact path="/test">
                        <Test />
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </PagesStyle>
    )
}

export default index
