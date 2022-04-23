import React, { useState } from 'react'

const AuthorForm = (props) => {
    const {initialAuthorName, onSubmitProp} = props;
    const [authorName, setAuthorName] = useState(initialAuthorName);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({authorName});
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Author Name</label><br/>
                <input name="authorName" type="text" value={authorName} onChange = {(e)=>setAuthorName(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default AuthorForm;



