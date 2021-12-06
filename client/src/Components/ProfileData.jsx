import React, {useState, useEffect} from 'react';

const ProfileData = (userData) => {
    const [ news, setNews ] = useState("")

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=${userData} Stock&from=2021-11-11&to=2021-12-06&sortBy=popularity&apiKey=b58620b0fadd46c3a1249c063789a726`)
        .then(r => r.json())
        .then(data => setNews(data.articles))
    }, [])
    console.log(userData)
    console.log(news)

    return (
        <>
            <p>{userData.author}</p>
            <p>{userData.title}</p>
            <a href={userData.url} />
        </>
    )
}

export default ProfileData
