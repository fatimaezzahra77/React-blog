import { Link, useParams} from 'react-router-dom';
import { AiFillAlipayCircle } from "react-icons/ai";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

function GridMod({articles, updateArticleList}) {

    const toggleActiveStatus = async (id, isActive) => {
      
           
            const articleToToggle = articles.find((article) => article.id === id);

            const updatedArticle = { ...articleToToggle, active: isActive };
            await axios.put(`http://localhost:3001/articles/${id}`, updatedArticle);

            const updatedArticles = articles.map((article) => {
                if (article.id === id) {
                    return updatedArticle;
                }
                return article;
            });
    
            updateArticleList(updatedArticles);
    }

    const Remove = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/articles/${id}`);
            const updatedArticles = articles.filter((article) => article.id !== id);
            updateArticleList(updatedArticles);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='container'>
                <div className="container">
                <div className="row">
                    {
                        articles.map((article)=>(    
                        <div className="col-sm" >
                        <div className={`card col mb-3 border-3 ${article.active ? "border-info" : ""}`} key={article.id}  style={{width:"18rem"}}>
                            <img className="card-img-top" src={article.image} alt="Card image cap"style={{height:"250px" }} />
                            <div className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text">{article.description}</p>
                            <Link to={`/blog/edit/${article.id}`} className='btn btn-dark'>
                            <AiFillAlipayCircle/> Edit blog
                            </Link>  &nbsp;&nbsp;
                            <button className='btn btn-dark mt-2' onClick={() =>Remove(article.id)}>Delete</button>&nbsp;&nbsp;   
                            <button className='btn btn-dark mt-2' onClick={() => toggleActiveStatus(article.id, !article.active)}>
                                {article.active ? "Deactivate" : "Activate"}
                            </button>                            
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
                </div>
        </div>
    );
}

export default GridMod;