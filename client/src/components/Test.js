import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Make a GET request to the API endpoint
        axios.get('http://localhost:5000/api/data')
            .then(response => {
                // Set the data in the state
                setData(response.data[0].name);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // The empty dependency array ensures the useEffect runs only once on component mount

    return (
        <div>
            <h1>API Response:</h1>
            {data ? (
                <p>{data}</p>
            ) : (
                <p>Loading...</p>
            )}
            <Mashu />
        </div>
    )
}

export default Test