import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then((res)=>{
            console.log(res.data);
            setAuthors(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, []);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }
    
    return (
        <table>
            <thead>
                <tr>
                    <td>Author</td>
                    <td>Actions Available</td>
                </tr>
            </thead>
            <tbody>
                {
                    authors.map((author, index)=>
                        <tr key={index}>
                            <td>{author.authorName}</td>
                            <td>
                                <Link to={"/authors/edit/" + author._id}>
                                    Edit
                                </Link>
                                <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)} />
                            </td>
                        </tr> 
                    )
                }
            </tbody>
        </table>
    )
}
export default AuthorList;

