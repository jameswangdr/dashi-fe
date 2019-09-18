import React from 'react';
import './NewsBar.css';

const News = (props) => {
    return (
        <div className="article-container">
            <div>
                <a href={props.article.url} target="_blank">{props.article.title}</a>
                <hr />
            </div>
        </div>
    )
}

export default News;
