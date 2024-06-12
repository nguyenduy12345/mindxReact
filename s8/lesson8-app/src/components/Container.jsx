import React from 'react'
import './container.css'

const Container = (props) => {
  return (
        <div className="item_card" onClick={props.getDataMovie}>
            <img src={props.src} className='img_card' />
            <div className="info_movie">
                <p className='movie_des'>{props.epi}</p>
                <h3 className='name_movie'>{props.name}</h3>
            </div>
        </div>
  )
}

export default Container
