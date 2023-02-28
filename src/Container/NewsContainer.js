import React, {useState, useEffect} from "react";
import StoriesList from "../Component/StoriesList";
import FilterStories from "../Component/FilterStories";


const NewsContainer = () => {

    const [stories, setStories] = useState([])
    const [filteredStories, setFilteredStories] = useState([])

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then(data => {
            const storyPromises = data.slice(0,10).map((storyId) => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                .then(res => res.json())
            })
            Promise.all(storyPromises)
            .then((data) => {
                setStories(data)
            })
        })
    })

    const filterData = (inputText) => {
        const filter = stories.filter((story) => {
            return story.title.toLowerCase().includes(inputText.toLowerCase())
        })
        setFilteredStories(filter)
    }



    
    return(
        <div>
            <h1>Hacker News</h1>
            <FilterStories filterData={filterData}/>
            <StoriesList stories={filteredStories}/>
        </div>
    )

}

export default NewsContainer;