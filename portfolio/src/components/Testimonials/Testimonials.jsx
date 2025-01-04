import React from 'react'
import './Testimonials.css'
const Testimonials = () => {
  return (
    <div className="testimonials">
        <div className="test-container">
           <div className="top">
             <div><h4>What people are saying</h4></div>
             <div id="heading"><h1>TESTIMONIALS</h1></div>
           </div>
           <div className="center">
            <div className="container">
            <div className="icon">
                <svg  fill="#fff" xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 79 48"><path opacity="0.7" d="M60.4643 0.5H60.2338L60.0841 0.675212L43.5841 19.9876L43.4643 20.1279V20.3124V47V47.5H43.9643H76H76.5V47V20.3124V19.8124H76H61.303L76.3875 1.316L77.053 0.5H76H60.4643ZM17.3929 0.5H17.1614L17.0117 0.676436L0.61881 19.9888L0.5 20.1288V20.3124V47V47.5H1H33.0357H33.5357V47V20.3124V19.8124H33.0357H18.2361L33.4221 1.31729L34.0932 0.5H33.0357H17.3929Z" stroke="#000"></path></svg>
                
                  <p>When taking our product to market, a frictionaless user experience was critical. the teamat few does <strong>excellent work</strong> and the flexible pricing  model is perfect for orgs in our stage. Now we have over a  hundred clients on the platform  and are looking  forward to partnering with Few as we continue to grow. </p>
                
                 
            </div>
          </div>
          
           </div>
           <div className="bottom">
               <div className="profile">
                <div id="circle"><img src="/profile.jpg" alt="" width="100%" height="100%" style={{borderRadius: "50%"}}/></div>
                  <div className="id">
                <div className="Name">Dominic Kalms</div>
                <div className="designation">CEO at B Generous</div>
            </div>
               </div>
               <div className="icons">
               <a href="#"> <i className="fa-solid fa-arrow-left"></i></a>
                <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
               </div>
           </div>
        </div>
        
    </div>
  )
}

export default Testimonials