import React from 'react'
import './work.css';
import r1 from '../../image/r1.png';
import r2 from '../../image/r2.png';
import r3 from '../../image/r3.png';
import r4 from '../../image/r4.png';
import r5 from '../../image/r5.png';
import { Link } from 'react-scroll';

const Work = () => {
  return (
    <section id ='skills'>
        <span className="skillTitle">Design Work </span>
        <div className="skillBars">
            <div className="skillBar">
             <img src= {r1} alt="r1" className="skillbarImg"/>
              <div className="skillBarText">
                 <h4>REAL ESTATE TEMPLATE</h4>
                  <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit. Ultrices <br/>lorem non feugiat egestas amet.</p>
                  <Link><button className="btn">VIEW WORK</button></Link>

              </div>
             
            </div>
            <div className="skillBar1">
             
              <div className="skillBarText1">
                 <h4>PLANT IDENTIFICATION APP</h4>
                 <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit. Ultrices <br/>lorem non feugiat egestas amet.</p>
                  <Link><button className="btn1">VIEW WORK</button></Link>

              </div>
              <img src={r2} alt="r2" className="skillbarImg1"/>
             
            </div>
            <div className="skillBar">
             <img src={r3} alt="r3" className="skillbarImg"/>
              <div className="skillBarText">
                 <h4>SMART HOME APP</h4>
                 <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit. Ultrices <br/>lorem non feugiat egestas amet.</p>
                  <Link><button className="btn">VIEW WORK</button></Link>

              </div>
             
            </div>
            <div className="skillBar1">
             
              <div className="skillBarText1">
                 <h4>LOGO ANIMATION</h4>
                 <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit. Ultrices <br/>lorem non feugiat egestas amet.</p>
                  <Link><button className="btn1">VIEW WORK</button></Link>

              </div>
              <img src={r4} alt="r4" className="skillbarImg1"/>
             
            </div>

            <div className="skillBar1">
             
              <div className="skillBarText2">
                 <h4>A BIT ABOUT ME</h4>
                 <p>I am a UI/UX designer who is <br/>passionate about creating beautiful <br/>and joyful digital experiences. <br/>Besides design, I love music, games and travelling</p>
                  

              </div>
              <img src={r5} alt="r5" className="skillbarImg2"/>
             
            </div>
         


        </div>

        <span className="footerTitle">GET IN TOUCH.</span>
        <p className="footerdesc">so that we can talk more about....</p>

        



    </section>

  )
}

export default Work