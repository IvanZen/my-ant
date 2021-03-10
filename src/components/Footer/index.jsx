import React from 'react'
import styled from 'styled-components'
import icon_medium from './icon/icon_medium.svg'
import icon_twitter from './icon/icon_twitter.svg'
import icon_telegram from './icon/icon_telegram.svg'

const StyledFooter = styled.div`
    {
        width: 100%;

        padding: 12px;

        bottom: 0;
        position: fixed;

        display: flex;
        justify-content: space-between;

        >div {
            ul {
                display: flex;

                li {
                    margin: 12px;

                    img {
                        &:hover path{ fill:red; }
                    }
                }
            }
        }
    }
`

function Footer() {
    return (
        <StyledFooter>
            <div className="footer_left">
                <ul>
                    <li>
                        <a href="https://medium.com/@gallery_finance/introducing-gallery-finance-nft-workshop-where-your-ideas-become-art-fabf8b4165a4" target="_blank" rel="noopener">
                            <img src={icon_medium} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/FinanceGallery" target="_blank" rel="noopener">
                            <img src={icon_twitter} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/galleryfinance" target="_blank" rel="noopener">
                            <img src={icon_telegram} alt="" />
                        </a>
                    </li>
                </ul>




            </div>

            <div className="footer_right"></div>
        </StyledFooter>
    )
}

export default Footer
