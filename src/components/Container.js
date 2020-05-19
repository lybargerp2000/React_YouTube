import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Container = (props) => {
    const [collections, setCollections] = useState({});

    useEffect(() => {
        axios.get('http://localhost.3000/collections')
        .then(response => setCollections(response.data[props.index])
        
        )}, [collections, props.index]);
        
        return (
            <div>
                <h1>{collections.title}</h1>
            </div>
        
    
    
    );
}