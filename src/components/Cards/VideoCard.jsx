import React from 'react'
import Image from 'next/image'

const videoUrl = 'https://www.youtube.com/embed/'

const VideoCard = ({ playlist }) => {
  return (
    <div className='videoCard'>
      <div className='embeded'>
        <Image className='thumb' src={`${playlist.snippet.thumbnails.high.url}`} alt='thumbnail' width='480px'
          height='360px'></Image>
      </div>
      <div className='videoTitle'>
        <h3>{`${playlist.snippet.title}`}</h3><p>{`${playlist.snippet.publishedAt}`}</p>

      </div>
    </div>

  )
}

export default VideoCard