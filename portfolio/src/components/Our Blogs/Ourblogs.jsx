import React from 'react'
import './Ourblogs.css'
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.png'

const Ourblogs = () => {
  return (
    <div className="our-blog">
    <div className="container">
        <div className="heading">
            <h1>From our blog</h1>
            <p>We create and launch entire digital ecosystems used by billions.</p>
            <div>
                <a href="" className='read-blog-link'>Read blog<i className="fas fa-arrow-right"></i></a>
            </div>
        </div>   
        <div className="cards">
        <div className="card">
            <div className="img-div">
            <img src={pic1} alt="card-pic"/>
            </div>
            <div className="content">
              <h2>46 ideas for Elon Musk and Tesla</h2>
              <h6>by Dani</h6>
              <h6><span>12/11/24</span></h6>
            </div>
        </div>
        <div className="card">
            <div className="img-div">
            <img src={pic2} alt="card-pic"/>
            </div>
            <div className="content">
              <h2>46 ideas for Elon Musk and Tesla</h2>
              <h6>by David Martin</h6>
              <h6><span>12/11/24</span></h6>

            </div>
        </div>
        <div className="card">
            <div className="img-div">
            <img src={pic3} alt="card-pic"/>
            </div>
            <div className="content">
              <h2>46 ideas for Elon Musk and Tesla</h2>
              <h6>by David Martin</h6>
              <h6><span>12/11/24</span></h6>

            </div>
        </div>
        </div>

    </div>

</div>
  )
}

export default Ourblogs