import React from 'react';

const Tour = (props) => {
  const { image, date, title, info, location, duration, cost } = props;
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={image} className='tour-img' alt={title} />
        <p className='tour-date'>{date}</p>
      </div>
      <div className='tour-info'>
        <h4>{title}</h4>
        <p>{info}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fas fa-map'></i>
            </span>
            {location}
          </p>
          <p>{duration}days</p>
          <p>from ${cost}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
