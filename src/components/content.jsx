import React from 'react';
import styles from "./content.module.css";
const Content = ({video, video:{snippet}, onVideoClick}) => {
    return (
        <article className={styles.content} onClick={() => {
            onVideoClick(video);
        }}>
            <div className={styles.contentThumbnail}>
                <img className={styles.contentImg} src={snippet.thumbnails.default.url} alt=""></img>
            </div>
            <div className={styles.contentDiscription}>
                <div className={styles.contentTitle}>{snippet.title}</div>
                <div className={styles.contentCreator}>{snippet.channelTitle}</div>
            </div>
        </article>
    );
};

export default Content;