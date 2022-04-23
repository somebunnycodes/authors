import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import AuthorForm from '../components/AuthorForm';

const Update = (props) => {
    const {id} = useParams(); 
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, []);

    const updateAuthor = (authorParams) => {
        axios.put('http://localhost:8000/api/authors/' + id, authorParams)
            .then(res => {
                console.log(res);
                navigate("/authors"); 
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update an Author Name</h1>
            {
                loaded && <AuthorForm onSubmitProp={updateAuthor} initialAuthorName={author.authorName}/>
            }
        </div>
    )
}
export default Update;

