import React from 'react';
import './client.css';
import airbnb from '../../image/airbnb.png';
import google from '../../image/google.png';
import microsoft from '../../image/microsoft.png';
import fedex from '../../image/fedex.png';
const Client = () => {
  return (
    <section id="ClientPage">
      <div id="client">

       <span className= "clientText">Some of <span className='clientDesc'>the clients I have <br />designed for</span></span>
      
        <div className="clientImgs">
           <img src={airbnb} alt="" className="clientImg"/>
           <img src={google} alt="" className="clientImg"/>
           <img src={microsoft} alt="" className="clientImg"/>
           <img src={fedex} alt="" className="clientImg"/>
  
              

        </div>
      
      
      
      </div>






    </section>
  )
}

export default Client;