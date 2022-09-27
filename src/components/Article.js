import React from "react";

function minutess(minutes){
    const interval=minutes<30 ?5:10;
    const emoji=minutes< 30 ? "-" : " "

    let emojis="";
    for (let i=0; i< minutes; i += interval){
        emojis +=emoji;
    } 
  

return emojis;
}

function Article({title,date="January 1, 1970",preview,minutes}){
    const emojis = minutess(minutes);
    return(
<article>
    <h3>{title}</h3>
    <small>{date}</small>
    <p>{preview}</p>


</article>
        
    )
}
export default Article;