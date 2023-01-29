function App() {
  return (
    <>
      <header id='home'>
        <nav className='navbar'>
          <div className='nav-center'>
            <div className='nav-header'>
              <img src='./images/logo.svg' alt='logo' className='nav-logo' />
              <button type='button' className='nav-toggle' id='nav-toggle'>
                <i className='fas fa-bars'></i>
              </button>
            </div>

            <ul className='nav-links' id='nav-links'>
              <li>
                <a href='#home' className='nav-link scroll-link'>
                  home
                </a>
              </li>

              <li>
                <a href='#about' className='nav-link scroll-link'>
                  about
                </a>
              </li>

              <li>
                <a href='#services' className='nav-link scroll-link'>
                  services
                </a>
              </li>

              <li>
                <a href='#featured' className='nav-link scroll-link'>
                  featured
                </a>
              </li>

              <li>
                <a href='#gallery' className='nav-link scroll-link'>
                  gallery
                </a>
              </li>
            </ul>

            <ul className='nav-icons'>
              <li>
                <a
                  href='https://facebook.com/'
                  target='_blank'
                  className='nav-icon'
                >
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/'
                  target='_blank'
                  className='nav-icon'
                >
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://squarespace.com/'
                  target='_blank'
                  className='nav-icon'
                >
                  <i className='fab fa-squarespace'></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='hero'>
          <div className='hero-banner'>
            <h1>continue exploring</h1>
            <p>
              The world is a book and those who do not travel read only one
              page.
            </p>
            <a href='#featured' className='btn hero-btn scroll-link'>
              explore tours
            </a>
          </div>
        </div>
      </header>
      <section className='section' id='about'>
        <div className='section-title'>
          <h2>
            about <span>us</span>
          </h2>
        </div>
        <div className='section-center about-center'>
          <article className='about-img'>
            <img
              src='./images/about.jpeg'
              className='about-photo'
              alt='awesome beach'
            />
          </article>
          <article className='about-info'>
            <h3>explore the difference</h3>
            <p>
              Responsible travel has always been at the core of what we do.
              Travelling with us means not just better trips for you, it's
              better for local communities, better for wildlife and better for
              the planet.
            </p>
            <p>
              International tour packages from Backrouds give you the freedom to
              fall in love with the world. Explore our trips and live the good
              life with Backrouds travel!
            </p>
            <a href='#' className='btn'>
              read more
            </a>
          </article>
        </div>
      </section>
      <section className='section services' id='services'>
        <div className='section-title'>
          <h2>
            our <span>services</span>
          </h2>
        </div>
        <div className='section-center services-center'>
          <article className='service'>
            <span className='service-icon'>
              <i className='fas fa-wallet fa-fw'></i>
            </span>
            <div className='service-info'>
              <h4 className='service-title'>saving money</h4>
              <p className='service-text'>
                Looking for budget-friendly trips? Get inspired by our selection
                of the best budget tours that will take you to exciting
                destinations!
              </p>
            </div>
          </article>
          <article className='service'>
            <span className='service-icon'>
              <i className='fas fa-tree fa-fw'></i>
            </span>
            <div className='service-info'>
              <h4 className='service-title'>endless hiking</h4>
              <p className='service-text'>
                Charge the batteries! Pick one of the tours we created based on
                the general interests of our customers, or create your own trip!
              </p>
            </div>
          </article>
          <article className='service'>
            <span className='service-icon'>
              <i className='fas fa-socks fa-fw'></i>
            </span>
            <div className='service-info'>
              <h4 className='service-title'>amazing comfort</h4>
              <p className='service-text'>
                Let's start planning your next vacation! Committed to providing
                the best value with exceptional service. Travel with comfort!
              </p>
            </div>
          </article>
        </div>
      </section>
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
                often called 'the roof of the world.' Today, seeing Tibet is
                about getting lost in an ancient culture that dates back to
                nearly 1.500 years, set within lake-filled valleys and rocky
                plateaus.
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
                gems. We take you on a tour of its trendiest neighbourhoods,
                cool cafes, classNameic Hong Kong street food and quirky
                boutiques, as well as exploring its hip bars and nightlife.
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
                magnificent wildlife destinations and the country where safari
                was born. Discover the dramatic Great Rift Valley, mountain
                highlands or the coastline of the Indian Ocean.
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
      <section className='section contact' id='contact'>
        <div className='section-center contact-center'>
          <article className='contact-title'>
            <h3>want latest tour info and updates?</h3>
            <p>Sign up for newsletter and stay up to date</p>
          </article>
          <form className='contact-form'>
            <input
              type='email'
              name='email'
              className='form-control'
              placeholder='your email'
            />
            <button type='submit' className='btn-submit'>
              submit
            </button>
          </form>
        </div>
      </section>
      <section id='gallery'>
        <div className='gallery-center'>
          <article className='gallery-img-container'>
            <img src='./images/tour-6.jpg' alt='' className='gallery-img' />
            <a href='#' className='gallery-icon'>
              <i className='fas fa-search'></i>
            </a>
          </article>
          <article className='gallery-img-container'>
            <img src='./images/tour-5.jpg' alt='' className='gallery-img' />
            <a href='#' className='gallery-icon'>
              <i className='fas fa-search'></i>
            </a>
          </article>
          <article className='gallery-img-container'>
            <img src='./images/tour-13.jpg' alt='' className='gallery-img' />
            <a href='#' className='gallery-icon'>
              <i className='fas fa-search'></i>
            </a>
          </article>
          <article className='gallery-img-container'>
            <img src='./images/tour-10.jpg' alt='' className='gallery-img' />
            <a href='#' className='gallery-icon'>
              <i className='fas fa-search'></i>
            </a>
          </article>
          <article className='gallery-img-container'>
            <img src='./images/tour-15.jpg' alt='' className='gallery-img' />
            <a href='#' className='gallery-icon'>
              <i className='fas fa-search'></i>
            </a>
          </article>
          <article className='gallery-img-container'>
            <img src='./images/tour-2.jpg' alt='' className='gallery-img' />
            <a href='#' className='gallery-icon'>
              <i className='fas fa-search'></i>
            </a>
          </article>
          <article className='gallery-img-container'>
            <img src='./images/tour-11.jpg' alt='' className='gallery-img' />
            <a href='#' className='gallery-icon'>
              <i className='fas fa-search'></i>
            </a>
          </article>
          <article className='gallery-img-container'>
            <img src='./images/tour-16.jpg' alt='' className='gallery-img' />
            <a href='#' className='gallery-icon'>
              <i className='fas fa-search'></i>
            </a>
          </article>
        </div>
      </section>
      <footer className='section footer'>
        <ul className='footer-links'>
          <li>
            <a href='#home' className='footer-link scroll-link'>
              home
            </a>
          </li>
          <li>
            <a href='#about' className='footer-link scroll-link'>
              about
            </a>
          </li>
          <li>
            <a href='#services' className='footer-link scroll-link'>
              services
            </a>
          </li>
          <li>
            <a href='#featured' className='footer-link scroll-link'>
              featured
            </a>
          </li>
          <li>
            <a href='#gallery' className='footer-link scroll-link'>
              gallery
            </a>
          </li>
        </ul>
        <ul className='footer-icons'>
          <li>
            <a
              href='https://facebook.com/'
              target='_blank'
              className='footer-icon'
            >
              <i className='fab fa-facebook'></i>
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/'
              target='_blank'
              className='footer-icon'
            >
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a
              href='https://squarespace.com/'
              target='_blank'
              className='footer-icon'
            >
              <i className='fab fa-squarespace'></i>
            </a>
          </li>
        </ul>
        <p className='copyright'>
          copyright &copy; backrouds travel tour company <span id='date'></span>
          . all rights reserved
        </p>
      </footer>
    </>
  );
}

export default App;
