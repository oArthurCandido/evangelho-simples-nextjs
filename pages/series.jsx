import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../src/components/Header';
import PlaylistCard from '../src/components/Cards/PlaylistCard';
import styled from 'styled-components';
import InstitutionalFooter from '../src/components/Footer/institutionalFooter';

const Main = styled.div`
  .institutional {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contempt {
    max-height: fit-content;
    padding: 2em;
    text-align: justify;
    background-color: rgba(255, 255, 255, 0.85);
    color: black;
    max-width: 850px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
    font-family: 'Poppins', sans-serif;
    height: fit-content;
    margin-top: 3em;
    margin-bottom: 3em;
    position: relative;
  }
  h2 {
    padding-bottom: 1em;
  }
  .textWork {
    position: relative;
    text-indent: 1em;
    visibility: visible;
  }
  div.embeded {
    overflow: hidden;
    margin: 0px -20px 30px -20px;
    padding: 0;
    position: relative;
    padding-bottom: 50%;
    width: clamp(200px, 80vw, 600px);
    height: clamp(150px, 30vh, 500px);
  }
  div.embeded > iframe {
    position: absolute;

    width: 100%;
    height: 100%;

    border: 1px solid black;
    border-radius: 5px;
  }
  div.embeded > p {
    position: relative;
    bottom: 0;
  }
`;

const playlistUrl = 'https://www.googleapis.com/youtube/v3/playlists';
const apiKey = 'key=AIzaSyDx49X5n8vh4iZsFSIZD9mJMZ1SJZXmybc';

const Series = () => {
  const [playlistList, setPlaylistList] = useState([]);

  const getPlaylistList = async url => {
    const res = await fetch(url);
    const data = await res.json();
    var series = [];
    for (let i = 0; i < data.items.length; i++) {
      let splitted = data.items[i].snippet.title.split(' ');
      function isEqual(element, index, array) {
        return element == 'Série';
      }
      if (splitted.some(isEqual)) {
        series.push(data.items[i]);
      }
    }
    setPlaylistList(series);
  };
  useEffect(() => {
    const playlistListUrl = `${playlistUrl}?part=snippet&channelId=UC0lim5sJoP2UC4rZfd7-wJQ&maxResults=100&${apiKey}`;

    getPlaylistList(playlistListUrl);
  }, []);
  console.log(playlistList);

  return (
    <>
      <Header />
      <Main>
        <section className="institutional">

          <div className="contempt">
            {playlistList.length === 0 && <p>Carregando...</p>}
            {playlistList.length > 0 &&
              playlistList.map((playlist) =>
                <PlaylistCard key={playlist.id} playlist={playlist} />
              )}
          </div>
        </section>
      </Main>
      <InstitutionalFooter />
    </>
  );
};

export default Series;
