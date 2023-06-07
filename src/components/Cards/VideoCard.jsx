import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components';

const videoUrl = 'https://www.youtube.com/watch?v='

const VideoCard = ({ playlist }) => {


  return (
    <div >
      <div className='embeded'>
        <div className='imageBox'>
          <Image width={640} height={480} src={`${playlist?.snippet.thumbnails.medium?.url}`} alt={'texto'} />
        </div>
      </div>
      <div className='videoTitle'>
        <Link target='blank' href={`${videoUrl}${playlist.snippet.resourceId.videoId}`}>
          <h3>{`${playlist.snippet.title}`}</h3></Link><p>{`${new Date(playlist.snippet.publishedAt).toLocaleDateString('pt-BR')}`}</p>
      </div>
    </div>
  )
}
export default VideoCard