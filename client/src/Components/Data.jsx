import React from 'react'

const Data = ({stonks}) => {
    // console.log('stonks', stonks)
    if (!stonks) return <div/>
    const dates = Object.keys(stonks["Weekly Time Series"])
    console.log(dates)
    
    return (
        <div>
           {dates.map(d => <div>{d} - {stonks["Weekly Time Series"][dates[0]]['4. close']}</div>)}
        </div>
    )
}

export default Data
