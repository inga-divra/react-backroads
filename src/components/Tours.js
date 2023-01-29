import React from 'react';

const Tours = () => {
  return (
    <section className='section' id='featured'>
      <div className='section-title'>
        <h2>
          featured <span>toures</span>
        </h2>
      </div>
      <div className='section-center featured-center'>
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-1.jpg' alt='' className='tour-img' />
            <p className='tour-date'>april 26th, 2022</p>
          </div>
          <div className='tour-info'>
            <div className='tour-title'>
              <h4>tibet adventure</h4>
              <p>6 days</p>
            </div>
            <p>
              Tibet, historic region and autonomous region of China that is
              often called 'the roof of the world.' Today, seeing Tibet is about
              getting lost in an ancient culture that dates back to nearly 1.500
              years, set within lake-filled valleys and rocky plateaus.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                  china
                </span>
              </p>
              <p>from $2100</p>
            </div>
          </div>
        </article>
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-2.jpg' alt='' className='tour-img' />
            <p className='tour-date'>october 21th, 2022</p>
          </div>
          <div className='tour-info'>
            <div className='tour-title'>
              <h4>best of java</h4>
              <p>11 days</p>
            </div>
            <p>
              Java is a volcano-dotted island that's at the geographic and
              economic center of Indonesia. Whether it's a guided tour of a
              historic landmark, private tasting of local delicacies, or an
              off-road adventure — explore the best experiences in Java.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                  indonesia
                </span>
              </p>
              <p>from $1400</p>
            </div>
          </div>
        </article>
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-3.jpg' alt='' className='tour-img' />
            <p className='tour-date'>september 5th, 2022</p>
          </div>
          <div className='tour-info'>
            <div className='tour-title'>
              <h4>explore hong kong</h4>
              <p>5 days</p>
            </div>
            <p>
              More than just a cosmopolitan city, Hong Kong is full of hidden
              gems. We take you on a tour of its trendiest neighbourhoods, cool
              cafes, classNameic Hong Kong street food and quirky boutiques, as
              well as exploring its hip bars and nightlife.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                  hong kong
                </span>
              </p>
              <p>from $3400</p>
            </div>
          </div>
        </article>
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-4.jpg' alt='' className='tour-img' />
            <p className='tour-date'>december 3th, 2022</p>
          </div>
          <div className='tour-info'>
            <div className='tour-title'>
              <h4>kenya highlights</h4>
              <p>20 days</p>
            </div>
            <p>
              Kenya is a country in East Africa. It is one of the world's
              magnificent wildlife destinations and the country where safari was
              born. Discover the dramatic Great Rift Valley, mountain highlands
              or the coastline of the Indian Ocean.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                  kenya
                </span>
              </p>
              <p>from $3200</p>
            </div>
          </div>
        </article>
      </div>
      <div className='tour-btn'>
        <a href='#' className='btn'>
          all tours
        </a>
      </div>
    </section>
  );
};

export default Tours;
