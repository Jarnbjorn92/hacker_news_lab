import React from "react";
import StoryListItem from "./StoryListItem";

const StoriesList = ({stories}) => {
    
    const storyItems = stories.map((story, index) => {
        return <StoryListItem key={index} story={story}/>
    })

    return(
        <div>
            <h3>Hacker News List for Hackers</h3>
            <ul>
                {storyItems}
            </ul>
        </div>
    )
}

export default StoriesList;