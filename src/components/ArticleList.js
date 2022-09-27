import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const articles=posts.map(articlepost =>
        <Article key={articlepost.id}title={articlepost.title}
        date={articlepost.date}preview={articlepost.preview}/>)
    return(
<main>{articles}</main>
    );
}
export default ArticleList;