import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Container = (props) => {
    const [collections, setCollections] = useState({});

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=APIKEY=snippet,contentDetails,statistics,status')
        .then(response => setCollections(response.data[props.index])
        
        )}, [collections, props.index]);
        
        return (
            <div>
                <h1>{collections.title}</h1>
            </div>
        
    
    
    );
}
export default Container; 