import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DataFetchingOne() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
                setLoading(false);
                setPost(response.data)
                setError('')
        })
        .catch(err => {
            setPost({});
            setError("Error to Fetch Data")
            setLoading(false)
        })
    },[])

    return (
        <div className={error ? 'text-danger' : ''}>
            {loading ? 'loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne
