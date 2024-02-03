import React, { useState, useEffect } from 'react'


const Test = () => {

    const [value, setValue] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [pageData, setPageData] = useState([])

    const increament = () => {
        setValue(value + 1)
    }

    const onChange = (event) => {
        setInputValue(event.target.value);
    }

    useEffect(() => {
        // Calling the API route
        const data = []
        const fetchData = async () => {
            try {
                const response = await fetch('/api/getData');
                const data = await response.json();
                console.log('Fetched data:', data);
               
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        setPageData(data)
        fetchData();
    }, []);
    
    const filteredItems = pageData.filter(item => item.id <= 1);


    return (
        <div style={{
            display: "grid",
            gap: 100,
            justifyContent: 'flex-start'
        }}>
            <h1>
                Hello World
            </h1>
            <h2>
                Count Value : {value}
            </h2>

            <input style={{ padding: '10px', backgroundColor: 'balck', color: 'black' }} type='button' onClick={increament} value={value} />


            <input placeholder="enter somehting ..." onChange={onChange} />

            {inputValue}
            {
                pageData.length > 0 && (
                    <p>First Name: {pageData[0].name}</p>
                )
            }
            {
                filteredItems ? filteredItems.map((item) => item.name) : `I m here don't worry`            }
        </div>
    )
}

export default Test;