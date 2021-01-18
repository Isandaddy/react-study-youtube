import React from 'react';
import styles from './detail.module.css';

const Detail = ({video}) => {
    return (
        <h1>
            {video.snippet.title}
        </h1>
    );
};

export default Detail;