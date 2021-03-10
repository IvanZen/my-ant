import React, {useState} from 'react'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from "@web3-react/injected-connector";
import { SWRConfig } from "swr";

import { fetcher, Networks, shorter, TOKENS_BY_NETWORK } from "../utils";
import ERC20ABI from '../abi/ERC20.abi.json'

export const injectedConnector = new InjectedConnector({
    supportedChainIds: [
        Networks.MainNet, // Mainet
        Networks.Ropsten, // Ropsten
        Networks.Rinkeby, // Rinkeby
        Networks.Goerli, // Goerli
        Networks.Kovan, // Kovan
    ],
})

function Test() {
    const { chainId, account, library, activate, active } = useWeb3React()
    const onClick = () => {
        activate(injectedConnector)
    }
    return (
        <div>
            
            {
            /* 如果active则显示'connected'，否则提供连接的按钮 */
            active ? (
                <div>connected ✅ </div>
            ) : 
            (
                (
                    <button type="button" onClick={onClick}>
                        Connect
                    </button>
                )
            )
            }
        </div>
    )
}

export default Test
