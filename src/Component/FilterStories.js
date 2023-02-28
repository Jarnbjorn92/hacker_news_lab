import React, {useState, useEffect} from "react"

const FilterStories = ({filterData}) => {
    
    const [inputText, setInputText] = useState("");

    const handleTextChange = (event) => (
        setInputText(event.target.value)
    )

    useEffect(() => {
        filterData(inputText)
    }, [inputText])

    return(
        <div>
            <input id='input' value={inputText} type='text' onChange={handleTextChange} placeholder='Filter Stories'/>
        </div>
    )
}

export default FilterStories;