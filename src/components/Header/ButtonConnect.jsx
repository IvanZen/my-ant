import React from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from "@web3-react/injected-connector";
import { SWRConfig } from "swr";
import { fetcher, Networks, shorter } from "../../utils";
import Title from '../Title';

import doubleLine from '../../assets/icon/check-double-line.png'

const StyledButton = styled.button`
    {
        height: 38px;
        width: 106px;
        background: #D4E9E2;
        border-radius: 5px;
        outline: none;
        border: none;
        font-size: 14px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #0F8C20;
        cursor: pointer;
        padding: 16px;

        top: 9px;
        right: 100px;

        display: flex;
        align-items: center;

        span {
            font-weight: 600;
        }

        img {
            width: 16px;
            height: 16px;
            margin-left: 2px;
        }
    }
    
`
const StyledAccountBox = styled.div`
    {
        display: flex;
        align-items: center;

        height: 38px;
        padding: 0 16px;

        background: #D4E9E2;
        border-radius: 5px;

        img {
            width: 24px;
            margin-left: 4px;
        }
    }
`

export const injectedConnector = new InjectedConnector({
    supportedChainIds: [
        Networks.MainNet, // Mainet
        Networks.Ropsten, // Ropsten
        Networks.Rinkeby, // Rinkeby
        Networks.Goerli, // Goerli
        Networks.Kovan, // Kovan
    ],
})

export const formatAddress = (address)=>{
    return  address.slice(0, 6) + '...' + address.slice(-3)
}

function ConnectButton() {

    const { chainId, account, library, activate, active } = useWeb3React()

    const handleClick_connect = () => {
        activate(injectedConnector)
    }

    return (
        <>
            {
                active ? (
                        <StyledAccountBox
                            className="address"
                            onClick={() => {
                                alert("show wallet")
                            }}
                        >
                            {formatAddress(account)}
                            <img src={doubleLine} />
                        </StyledAccountBox>
                ) : (
                    (
                        <StyledButton className="ConnectButton" onClick={handleClick_connect}>
                            <span>链接钱包</span>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABqUlEQVRIS71WTS8DURS957XT1kdqBBUVqiY2oxYWtn6DlbWtxMaeiLAiYiOxtbbyG2wt0V1VNQgqKVH6+a5MZZpqZ5oRnllNcs+c8+499907oA6PeWwGnjMlXTL3VYEgi6pmwSH9FT9zSQAvA7FgPrmYLLvRwClgbpiBu6GPES7WBjsdwI4h5MtFn7ruk5vtQm0C+v6ETpLjzCy8kDdEAEkC6fzqdb75u28Cw4dGpFiojP2EuBUb6tGyD8upx4aw/WKdnGvS+A15g9QnUnYm9QzqNQ8Xpn9aFldjARl97bm0PKkL6AfxWCdDmbAAEgsAT1p4ZlwxyRMQn7iKhHy5/Eo6A6sVb2/eZpyATGIQRFtENOdCdMZE6yCZc4qPjveeY3jXiBThZqw47EBuc54RyWUngRBrWQztTE6VRTXcCvgqC9a8mM7E207lCkj/K/p3jYREJdhO5Dsi4oQXASJcENWWWrGCtRL0vdisU/cA4pSZur0IAPTOLOdbsQCkegHlJVJusvI2VX7RlI+Kfxl29SxUjmv7gihdOM2LR9nKtEWULv3mefIXvy2fCLQXYndQ7jMAAAAASUVORK5CYII=" alt="" />
                        </StyledButton>
                    )
                )
            }
        </>
    )
}

export default ConnectButton
