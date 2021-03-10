import React, { useState } from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

/* import Pool1 from '../../pages/Pool1'
import Pool2 from '../../pages/Pool2'
import Guide from '../../pages/Guide'
import Test from '../../pages/Test' */

const Styledul = styled.ul`
        display: flex;
        align-items: center;
        margin-left: 50px;

        li {
            margin-right: 48px; 
            h5 {
                font-size: 15px;
                font-weight: 500;
            }
        }
`
const Nav_list = [
    {
        name: 'Pool1',
        route: '/Pool1',
    },
    {
        name: 'Pool2',
        route: '/Pool2',
    },
]

function NavList() {
    const [curNav, setCurNav] = useState('Pool1')

    return (
        <Styledul>
            {Nav_list.map(item => {
                return (

                    <li
                        key={item.name}
                        className={item.name === curNav ? 'active' : ''}
                        onClick={() => { setCurNav(item.name) }}
                    >
                        <Link to={item.route}>
                            <h5>
                                {item.name}
                            </h5>
                        </Link>
                    </li>
                )
            })}
        </Styledul>
    )
}

export default NavList
