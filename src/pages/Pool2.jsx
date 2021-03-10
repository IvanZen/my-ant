import React from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import StatisticsList from '../components/StatisticsList'

function Page2() {
    return (
        <div>
            <Title poolNumber={2}/>
                <StatisticsList/>
        </div>
    )
}

export default Page2
