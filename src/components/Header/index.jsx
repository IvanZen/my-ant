import React, { useState } from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import logo from '../../assets/image/logo-text.svg'
import NavList from './NavList'
import ButtonConnect from './ButtonConnect'

const StyledDiv_Header = styled.div`
    height: 100px;
    width: 100%;
    min-width: 600px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    .wrapper {
        width: 1380px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 20px;
        

        >div {
            display: flex;
            align-items: center;

            &.header_left {  /* 不加&则编译为">div .header_left"，表示从">div"的子元素中选择".header_left" */
                
            }

            &.header_right {
                .link_guide {
                    margin-right: 59px;

                    h5 {
                        font-size: 14px;
                        font-family: HelveticaNeue-Bold, HelveticaNeue;
                        font-weight: bold;
                        color: #22292F;
                    }
                }
            }
        }
    }
`

function Header() {

    return (
        <StyledDiv_Header>
            <div className="wrapper">
                <div className="header_left">
                    <img src={logo} alt="" />
                    <NavList />
                </div>
                <div className="header_right">
                    <Link className="link_guide" to="/Guide">
                        <h5>
                            Guide
                        </h5>
                    </Link>
                    <ButtonConnect/>
                </div>
            </div>
        </StyledDiv_Header>
    )
}

export default Header
