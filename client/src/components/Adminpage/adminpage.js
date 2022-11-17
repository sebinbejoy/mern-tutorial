import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, approvePost } from '../../actions/posts';
import { getBugs } from '../../actions/bugs';
import Navbar from "../Navbar/navbar";
import './adminpage.css'

const AdminPage = () => {
    const posts = useSelector((state) => state.posts);
    //const bugs = useSelector((state) => state.bugs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts(),getBugs());
        //dispatch(getBugs());
    }, [dispatch]);

    return (
        <div className="page_admin">
            <Navbar />
            <div className="posts">
                <h1>Post Requests</h1>
                {
                    posts.filter(allposts => allposts.approved === false).map(post => {
                        return (
                            <div className='box_admin'>
                                <h4>{post.creator}</h4>
                                <br />
                                <img src={post.selectedFile} width="90%" />
                                <h3>{post.title}</h3>
                                <p>{post.message}</p>
                                <button onClick={() => dispatch(approvePost(post._id))}>Approve</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AdminPage;
/*
<br/>
            <br/>
            <div>
                <h1>Bugs</h1>
                {
                    bugs.map(bug => {
                        return (
                            <div className='box_admin'>
                                <h4>{bug.name}</h4>
                                <br />
                                <img src={bug.selectedFile} width="90%" />
                                <h3>{bug.app}</h3>
                                <p>{bug.description}</p>
                            </div>
                        )
                    })
                }
            </div>
*/