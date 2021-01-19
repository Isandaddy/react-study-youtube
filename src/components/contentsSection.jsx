import React from "react";
import styles from "./contentsSection.module.css";
import Content from "./content";

const ContentsSection = ({videos, onVideoClick, display}) => {

  
  return (
    <section className={styles.youtubeContents}>
        {videos.map(video => <Content key={video.id} video={video} onVideoClick={onVideoClick} display={display}/>)}
    </section>
  );
};

export default ContentsSection;
