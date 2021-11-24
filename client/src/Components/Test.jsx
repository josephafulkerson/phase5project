import React from 'react'

const Test = ({stonks, findStocks}) => {


    // function handleSubmit(e) {
    //     e.preventDefault();
    //     findStocks(e.target.value)
    // }
    console.log(stonks)
    return (
        <div>
            <p>{stonks.close}</p>
        </div>
    )
}

export default Test
