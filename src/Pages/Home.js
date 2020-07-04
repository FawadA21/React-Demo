import React from 'react';

import './Home.css';


import { Link } from 'react-router-dom';



function Home() {
    return (

       <div className="Container">

       <div className="Container-text">
           
           
            
            <h1>Hi,<br></br> I'm Fawad, <br></br> A Web Designer.<br></br> 
            <Link to="/contact"> <a>Contact Me</a></Link> </h1>
            


        </div>

        </div>
      
    

        

    );



}


export default Home;



