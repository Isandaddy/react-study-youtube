import React, {memo} from 'react';
import styles from "./content.module.css";
const Content = memo(
    ({video, video:{snippet}, onVideoClick, display}) => {
        const displayType = display === 'list' ? styles.list : styles.grid;
        return (
            <article className={`${styles.content} ${displayType}`} onClick={() => {
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
    }
);

export default Content;