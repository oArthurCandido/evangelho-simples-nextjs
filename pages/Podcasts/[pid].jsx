import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../../src/components/Header';
import styled from 'styled-components';
import InstitutionalFooter from '../../src/components/Footer/institutionalFooter';
import VideoCard from '../../src/components/Cards/VideoCard';
import { useRouter } from 'next/router'

const PagButton = styled.button`
  background-color: rgba(240, 248, 255, 0.769);
  border: 0.001px solid rgba(24, 23, 23, 0.546);
  border-radius: 4px;
  box-shadow: 0px 0px 3px 2px #2726262a;
  margin: 1rem;
  padding: .2rem .7rem;
  cursor: pointer;
  font-size: 2rem;
  &:hover{
    background-color: #f0f8ff;
  }
`
const Main = styled.div`
 .institutional{
  width: '100%';
  background-color: #f0f8ffc4;
  max-width: 980px ;
  margin: 3em auto 3em auto;
  border-radius: 6px;

 }
 .contempt{
  width: fit-content;
  margin: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  color: black;
  font-size: 0.7rem;
 }
 .contempt h3{
  
  max-width: 300px;
  height: 3.5rem;
 }
 .embeded{
  max-width: 320px;
  max-height: 240px ;
  margin: auto;
  padding: 0.7rem;
 }
 .imageBox{
  border-radius: 20px ;
  /* border: 0.001px solid black; */
  /* box-shadow: 0px 0px 3px 2px #35323228; */
  overflow: hidden;
 }

 .videoTitle{
  padding-left: 0.5rem;
  cursor: pointer;
 }
 .buttons{
  display: flex;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
 }
`;

const importVideosURL = 'https://youtube.googleapis.com/youtube/v3/playlistItems'
const apiKey = 'key=AIzaSyDx49X5n8vh4iZsFSIZD9mJMZ1SJZXmybc'

const PlaylistOpen = () => {

  const [playlistList, setPlaylistList] = useState([]);
  const [playlistToImport, setPlaylistToImport] = useState([]);
  const [dataWork, setDataWork] = useState([]);

  const [nextPageButton, setNextPageButton] = useState(false)
  const [prevPageButton, setPrevPageButton] = useState(false)

  const router = useRouter()
  const params = router.query.pid
  const getPlaylist = async url => {
    const res = await fetch(url);
    const data = await res.json();
    setPlaylistList(data.items);
    setDataWork(data)
  };

  useEffect(() => {
    if (!dataWork.prevPageButton) {
      setPrevPageButton(true)
    }
    if (dataWork.prevPageToken) {
      setPrevPageButton(false)
    }
    if (!dataWork.nextPageButton) {
      setNextPageButton(true)
    }
    if (dataWork.nextPageToken) {
      setNextPageButton(false)
    }
  }, [dataWork])


  useEffect(() => {
    if (params) {
      const urlImport = `${importVideosURL}?part=snippet&maxResults=15&playlistId=${params}&${apiKey}`
      getPlaylist(urlImport)
    }
  }, [params, playlistToImport])

  const handlePaginationNext = () => {
    const nextPageUrl = `${importVideosURL}?part=snippet&maxResults=15&pageToken=${dataWork.nextPageToken}&playlistId=${params}&${apiKey}`
    getPlaylist(nextPageUrl)
  }

  const handlePaginationPrev = () => {
    const prevPageUrl = `${importVideosURL}?part=snippet&maxResults=15&pageToken=${dataWork.prevPageToken}&playlistId=${params}&${apiKey}`
    getPlaylist(prevPageUrl)
  }

  playlistList.sort((a, b) => b.snippet.publishedAt
    .localeCompare(a.snippet.publishedAt
    ))

  return (
    <>
      <Header />
      <Main>
        <section className="institutional">
          <div className="contempt">
            {!playlistList ? <p>Carregando...</p> : null}
            {playlistList && playlistList.length > 0 ?
              playlistList.map((playlist) =>
                <VideoCard key={playlist.snippet.resourceId.videoId} playlist={playlist} />
              ) : null
            }
          </div>
          <div className='buttons'>
            <PagButton disabled={prevPageButton} onClick={handlePaginationPrev} >{'<'}</PagButton>
            <PagButton disabled={nextPageButton} onClick={handlePaginationNext} >{'>'}</PagButton>
          </div>
        </section>
      </Main>
      <InstitutionalFooter />
    </>
  );
};

export default PlaylistOpen;
