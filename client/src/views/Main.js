import React from 'react'
import AuthorList from '../components/AuthorList';
import { Link } from 'react-router-dom';

const Main = (props) => {

    return (
        <div>
            <h1>Favourite Authors</h1>
            <Link to={"/authors/new"}>
                Add an Author</Link>
            <h2>We have quotes by:</h2>
            <AuthorList/>
        </div>
    )
}
export default Main;
