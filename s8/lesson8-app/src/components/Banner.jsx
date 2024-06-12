import React from 'react'
import './banner.css'

const Banner = ({dataMovie}) => {
  return (
      <div className="banner">
        <div className="status">
          <h3 className='title_status'>Explore</h3>
          <p className='question'>What are you gonna watch today ?</p>
            {dataMovie && <div className="movie_card">
              <div className="img_card">
                <img src={dataMovie.src}/>
              </div>
              <div className="infomation_movie">
                <h3 className='name_movie'>{dataMovie.name}</h3>
                <p className='movie_epi'>{dataMovie.episode}</p>
                <p className='movie_des'>{dataMovie.des}</p>
              </div>
            </div>}
        </div>
        <div className='banner_box'>
            <img src="./img/spy_carousel 1.png" className='banner_img' />
            <div className="banner_des">
                <div className="title_des">Weather With You</div>
                <p className='description'>  Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis.  </p>
            </div>
        </div>
      </div>
  )
}

export default Banner
