import React from 'react'

import Header from '../components/Header'
import Title from '../components/Title'
import StatisticsList from '../components/StatisticsList'

function Page1() {
    return (
        <div>
            <Title poolNumber={1}/>
            <StatisticsList/>
        </div>
    )
}

export default Page1
