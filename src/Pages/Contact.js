import React from 'react';
import './Contact.css';



function Contact() {
    return (
        

       <div className="Picture">
           
           <div class="Contact-container" id="error">
     
     <div class="border"></div>
     <form id="form" class="contact-form" onsubmit="return checkforblank()">

     <input id="name" type="text" class="contact-form-text" placeholder="Name"></input>
         <input type="email" class="contact-form-text" placeholder="Email Address"></input>
         
         <textarea class="contact-form-text" placeholder="Message"></textarea>
          <input type="Submit" class="contact-form-btn" value="Send"></input>
         
     </form>
 
  </div>


        </div>
        
    

        
    );



}


export default Contact;