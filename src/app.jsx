import React, {useState, useEffect, useCallback} from "react";
import SearchBar from "./components/search_bar/searchBar";
import ContentsSection from "./components/contentsSection";
import Detail from './components/detail/detail';
import styles from './app.module.css';
//필요힌 네트워크 통신을 외부에서 받아온다.의존성 주입
function App({youtube}) {
  
  const [videos, setVideos] = useState([]);
  const [seletedVideo, setSeletedVideo] = useState(null);

  const selectVideo = (video) =>{
    setSeletedVideo(video);
  }

  const search = useCallback(query => {
    setSeletedVideo(null);
    youtube.search(query)//
    .then(videos => setVideos(videos));
  },[youtube]);

  const mostPopular = useCallback(() => {
    setSeletedVideo(null);
    youtube.mostPopular()//
    .then(videos => setVideos(videos));
  },[youtube]);

  useEffect(()=>{
    console.log('useEffect');
    mostPopular();
  },[]);

  return (
    <div className={styles.app}>
      <SearchBar onSearch={search} mostPopular={mostPopular}/>
      <section className={styles.content}>
        {
          seletedVideo && 
          <div className={styles.detail}>
            <Detail video={seletedVideo} />
          </div>
        }
        <div className={styles.list}>
          <ContentsSection videos={videos} onVideoClick={selectVideo} display={seletedVideo ? 'list' : 'grid'}/>
        </div>
      </section>
    </div>
  );
}

export default App;
