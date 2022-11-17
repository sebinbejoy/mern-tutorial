import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet} from "react-router-dom";
import { getPosts } from '../../actions/posts';
import Navbar from '../Navbar/navbar';
import "./home.css";

const Home=() => {
    const posts = useSelector( (state) => state.posts);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);

    return(
        <>
        <div className='page_home'>
            <Navbar/>
            <div>
                <img src='https://img.freepik.com/premium-vector/megaphone-with-important-announcement-flat_149152-517.jpg?w=2000' alt='announcement' width={'70%'}/>
                <br/><br/><br/><br/>
            </div>
            {
                posts.filter( allposts => allposts.approved===true).map(post => { 
                    return(
                        <div className='box_home'>
                            <h4>{ post.creator }</h4>
                            <br/>
                            <img src= { post.selectedFile } width="90%"/>
                            <h3>{ post.title }</h3>
                            <p>{ post.message }</p>
                        </div>
                    )
                })
            }
            <br/>
        </div>
        <Outlet/>
        </>
    )
}

export default Home;