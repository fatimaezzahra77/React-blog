import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ListMod from "./ListMod";


function DeleteArticle(articles){

    const navigate = useNavigate();
    const {id} = useParams();

    const getArticleById = async (id)=>{
        const {data} = await axios.get(`http://localhost:3001/articles/${id}`)
    }



    return(
        <div>
        </div>
    )
}

export default DeleteArticle;