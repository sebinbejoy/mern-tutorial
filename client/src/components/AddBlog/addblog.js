import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import Navbar from '../Navbar/navbar';
import "./addblog.css";


import { createPost } from '../../actions/posts.js';

const Addblog = () => {
    
    const [postData, setPostData] = useState({creator: '', title: '', message: '', selectedFile: ''});
    const dispatch = useDispatch();
    const navigate= useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const usrnm=localStorage.getItem('username');
        postData.creator=usrnm;
        dispatch(createPost(postData));
        navigate('/');
    }

    return (
        <div className='page_add'>
            <Navbar/>
            <div>
                <form className='cover_add' onSubmit={handleSubmit}>
                    <h2>Add a Blog/Post</h2>
                    <label>Title</label>
                    <input type="text" value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}/>
                    <label>Description/ Caption</label>
                    <textarea value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})}/>
                    <label>Image Upload </label>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}/>
                    <input type='submit' value='submit'/>
                </form>
            </div>
        </div>
    )
}

export default Addblog;