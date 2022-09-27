import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const articleposts=posts.map(articlepost =>
        <Article key={articlepost.id}title={articlepost.title}
        date={articlepost.date}preview={articlepost.preview}
        minutes={articlepost.minute}/>)
    return(
<main>{articleposts}</main>
    );
}
export default ArticleList;