import React from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import AuthorForm from '../components/AuthorForm';

const Create = (props) => { 
    const navigate = useNavigate();

    const createAuthor = (authorParams) => {
        axios.post('http://localhost:8000/api/authors', authorParams)
            .then(res=>{
                console.log(res); 
                navigate("/authors"); 
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>Add an Author</h1>
            <AuthorForm onSubmitProp={createAuthor} initialAuthor=""/>
        </div>
    )
}
export default Create;

