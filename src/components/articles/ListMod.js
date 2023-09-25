import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiFillAlipayCircle } from "react-icons/ai";
import axios from 'axios';

function ListMod({articles, updateArticleList }) {

    const navigate=useNavigate();

    const Remove = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/articles/${id}`);
            // Update the list of articles in the parent component
            const updatedArticles = articles.filter((article) => article.id !== id);
            updateArticleList(updatedArticles);
        } catch (error) {
            console.error(error);
        }
    }
    

    return (
        <div>
        <table class="table">
        {/* <thead>
        <tr>
            <th scope="col">Quote</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit quote</th>
        </tr>
        </thead> */}
        <tbody>
            {
                articles.map((article)=>(
                    <tr>
                        <th scope="row"><img src={article.image} style={{width:"100px"}}/></th>
                        <td>{article.title}</td>
                        <td>{article.description}</td>
                        <td>
                        <Link to={`/blog/edit/${article.id}`} className='btn btn-primary'>
                            <AiFillAlipayCircle/> Edit blog
                        </Link>&nbsp;&nbsp;
                        <button onClick={() =>Remove(article.id)}>Delete</button>

                        </td>
                    </tr>
                ))
            }
        </tbody>
        </table>

    
        </div>

    );
}

export default ListMod;
