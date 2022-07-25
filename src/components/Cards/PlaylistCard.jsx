import React from 'react'
import Link from 'next/link'

const playlistUrl = 'https://www.youtube.com/embed/videoseries?list='

const PlaylistCard = ({ playlist }) => {
  return (
    <div>
      <div>
        <Link href={`/Playlists/${playlist.id}`}>
          <a >
            <h2>{`${playlist.snippet.title}`}</h2>
          </a>
        </Link>
      </div>
      <div className='embeded'>
        <iframe src={`${playlistUrl}${playlist.id}`}></iframe>

      </div>
    </div>

  )
}

export default PlaylistCard