import React, {useState} from 'react'
import styled from 'styled-components'

import { fetcher, Networks, shorter, TOKENS_BY_NETWORK } from "../../utils";
import ERC20ABI from '../../abi/ERC20.abi.json'

import Button_ApproveStake from './Button_ApproveStake'
import Button_Claim from './Button_Claim'
import Button_UnstakeClaim from './Button_UnstakeClaim'

import icon_HUSD from './icon/icon_HUSD.svg'
import icon_WAR from './icon/icon_WAR.svg'

const StyledDiv = styled.div`
    {    
        margin: 72px auto;

        .wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            .box {
                width: 306px;
                
                margin: 18px;
                padding: 30px;

                display: flex;
                flex-direction: column;

                background: #F2F0EB;
                box-shadow: 0px 2px 4px 0px rgb(255 255 255 / 50%), 2px -2px 6px 2px rgb(122 127 130 / 40%);
                border-radius: 20px;

                .title {
                    display: flex;
                    align-items: center;

                    >img {
                        margin-right: 8px;
                    }

                    >p {
                        font-size: 16px;
                        font-family: HelveticaNeue-Bold, HelveticaNeue;
                        font-weight: bold;
                        color: #22292F;
                    }
                }

                .info {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;

                    .infoItem {
                        width: 138px;
                        height: 39px;
                        margin-top: 20px;

                        p {
                            font-size: 14px;
                            font-family: PingFangSC-Semibold, PingFang SC;
                            font-weight: 600;
                            color: #22292F;
                        }

                        .reward {
                            display: flex;
                            flex-direction: row;

                            >img {
                            width: 20px;
                            height: 20px;
                            margin-right: 3px;
                            }
                        }
                    }
                }

                .button_row1 {
                    display: flex;
                    justify-content: space-between;
                    grid-gap: 12px;
                    gap: 12px;
                }

                .button_row2 {
                    display: flex;
                }
            }
        }
    }
`

const StatisticsInfoList = [
    {
        currencyName: "EHT",
        staked: "--",
        balance: "--",
        reward: "--",
    },
    {
        currencyName: "DAI",
        staked: "--",
        balance: "--",
        reward: "--",
    },
    {
        currencyName: "WAR",
        staked: "--",
        balance: "--",
        reward: "--",
    },
]



function StatisticsList() {
    const [Statistics, setStatistics] = useState(StatisticsInfoList)
    return (
        <StyledDiv>
            <div className="wrapper">
                {
                    Statistics.map(
                        item => {
                            return (
                                <div key={item.name} className="box">
                                    <div className="title">
                                        <img src={icon_HUSD} alt="" />
                                        <p>{item.currencyName} POOL</p>
                                    </div>
                                    <div className="info">
                                        <div className="infoItem">
                                            <p>抵押总量</p>
                                            <p>{item.staked}</p>
                                        </div>
                                        <div className="infoItem">
                                            <p>余额</p>
                                            <p>{item.balance}</p>
                                        </div>
                                        <div className="infoItem">
                                            <p>收益</p>
                                            <div className="reward">
                                                <img src={icon_WAR} alt=""/>
                                                <p>{item.reward}</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="button_row1">
                                        <Button_ApproveStake/>
                                        <Button_Claim/>
                                    </div>
                                    <div className="button_row2">
                                        <Button_UnstakeClaim/>
                                    </div>
                                    
                                </div>
                            )
                        }
                    )
                }

            </div>
        </StyledDiv>
    )
}

export default StatisticsList
