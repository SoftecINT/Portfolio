import React from 'react'
import '../ZoominZoomout/ZoominZoomout.css'

const OurService = () => {
  return (
    <div>
    <section id="zoom-out">
        <div className="Home">
          <div className="HomeSection">
            <div className="Circles">
              <div className="C1"></div>
              <div className="C2"></div>
              <div className="C3"></div>
              <div className="C4"></div>
            </div>
            <div className="DF">
              <div className="BookT">
                <h1>Web & Mobile Applications That People Love to Use.</h1>
                <div className="Vec">
                  <svg width="15vw" height="19" viewBox="0 0 334 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.65557 8.97363C12.3843 9.16878 23.059 9.21381 33.7878 8.98864C44.3619 8.77098 54.9284 8.48577 65.5026 8.31314C86.8055 7.96788 108.101 7.95287 129.404 8.17053C171.863 8.60586 214.329 10.0319 256.688 12.9291C280.596 14.5653 304.473 16.5843 328.311 18.9786C331.372 19.2863 334 16.2165 334 13.4545C334 10.2571 331.38 8.18554 328.311 7.93035C285.883 4.43274 243.347 2.106 200.787 0.890093C158.343 -0.325815 115.877 -0.303298 73.4332 1.00268C61.5372 1.36295 49.6336 1.73823 37.7531 2.40623C25.6484 3.08924 13.6829 4.14002 1.65557 5.64114C-0.477815 5.90384 -0.624679 8.9361 1.65557 8.97363Z" fill="#DF3821"/>
                  </svg>
                </div>
                <button className='btn'>
                    {/* <svg width="1vw" height="15" viewBox="0 0 21 21">
                      <path d="M14.6484 11.2812L19.0234 13.1562C19.7266 13.4297 20.1172 14.1719 19.9609 14.9141L19.0234 19.2891C18.8672 19.9922 18.2031 20.5391 17.5 20.5391C17.2266 20.5391 16.9922 20.5 16.7578 20.5C16.3672 20.5 15.9766 20.4609 15.625 20.4219C6.83594 19.4844 0 12.0625 0 3C0 2.29688 0.507812 1.63281 1.21094 1.47656L5.58594 0.539062C6.32812 0.382812 7.07031 0.773438 7.34375 1.47656L9.21875 5.85156C9.49219 6.47656 9.33594 7.21875 8.78906 7.64844L7.1875 8.97656C8.24219 10.7734 9.72656 12.2578 11.5234 13.3125L12.8516 11.7109C13.2812 11.1641 14.0234 11.0078 14.6484 11.2812ZM17.2266 18.625L18.0469 14.7578L14.1406 13.0781L13.0078 14.4844C12.4219 15.1875 11.4062 15.3828 10.5859 14.9141C8.51562 13.7031 6.79688 11.9844 5.58594 9.91406C5.11719 9.09375 5.3125 8.07812 6.01562 7.49219L7.42188 6.35938L5.74219 2.45312L1.875 3.27344C1.99219 11.7109 8.78906 18.5078 17.2266 18.625Z" fill="white"/>
                    </svg> */}
                  <span>BOOK A CALL</span>
                  
                </button>
              </div>
              <div className="OurS">
                <h2>Our Services</h2>
                <ul>
                  <div className="LD"><li className="S1">Strategy / UX</li></div>
                  <div className="LD"><li className="S1">Product Design</li></div>
                  <div className="LD"><li className="S1">Websites</li></div>
                  <div className="LD"><li className="S1">Mobile Apps</li></div>
                  <div className="LD"><li className="S1">Software Dev</li></div>
                  <li className="S1">AI / ML</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
    )
}

export default OurService