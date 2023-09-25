import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillAlipayCircle } from "react-icons/ai";
import axios from 'axios';
import ListMod from './ListMod';
import GridMod from './GridMod';


function ListArticle() {

    const [articles, setArticles] = useState([]);
    const [islistMod, setIsListMod] = useState(false);
   
    
    const updateArticleList = (updatedArticles) => {
        setArticles(updatedArticles);
    };

    useEffect(() => {
        axios.get("http://localhost:3001/articles").then((res) => {
            setArticles(res.data);
        });
    }, []);


    return (
        <div>
            <div className="row my-3">
                <div className="col-md-6">
                <h1><i>Blogs</i></h1>
                </div>
            </div>
            
            <div className="col-md-6 " style={{display:"flex", justifyContent:"flex-start", marginLeft:"30rem"}} >
                <Link to="/blog/add" className='btn btn-primary ms-auto'>
                    <AiFillAlipayCircle/> Add blog
                </Link>
            </div>

          

            <div className='row my-3'>
                <div className='col-md-12 mb-7' >
                    <button className='btn btn-dark me-2' onClick={()=>{setIsListMod(true)}} >
                        Show list
                    </button>
                    <button className='btn btn-dark' onClick={()=>{setIsListMod(false)}} >
                       Show grid 
                    </button>
                </div>
            </div>

            {  islistMod ? <ListMod  articles = {articles}  updateArticleList={updateArticleList}/> : <GridMod articles = {articles} updateArticleList={updateArticleList} /> }
                
            
        </div>
    );
}

export default ListArticle;
