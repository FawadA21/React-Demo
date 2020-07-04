import React from 'react';
import './About.css';
import Image2 from '../Img/image2.jpg';



function About() {
    return (

        

        <div className="Parent">
            <h1 class="About">About</h1>
        <div class="Heading">
        
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id hendrerit tortor. Aliquam sed arcu ipsum. Etiam iaculis at diam mollis rhoncus. Etiam posuere in mi scelerisque elementum. Proin consectetur risus orci, nec faucibus lectus tristique a. Etiam varius arcu vel dolor viverra accumsan. Vivamus bibendum justo arcu, vel ornare nunc imperdiet non.</p>
         <br></br>
         <p>Aliquam vel ipsum ornare, eleifend elit non, aliquet justo. Nunc ut ornare eros. Phasellus id consectetur enim. Suspendisse ut vestibulum lacus. Fusce leo leo, consequat sit amet eros at, dictum venenatis eros. Ut eu faucibus metus. Ut et turpis pellentesque, elementum est at, vulputate magna. Suspendisse placerat sem ut arcu accumsan, in congue mauris ultricies. Ut placerat id felis ac congue. Phasellus laoreet velit eu consectetur porta.</p>
         </div>
        
         <div class="dark">
         <h1>What I do</h1>
         <p>Ut id massa rhoncus, porta orci at, pharetra urna. Nulla commodo maximus ante, quis ultrices dui consectetur ut. Vestibulum vitae finibus odio, ut pellentesque ex. Cras auctor blandit purus maximus porta. In a suscipit arcu, non varius ante. Nam rhoncus dapibus justo, non rhoncus arcu faucibus ut. Sed leo sapien, luctus eget eros ac, fringilla rutrum velit.</p>
         <br></br>
         <p>Ut tincidunt quis nulla eleifend convallis. Aenean ornare efficitur enim, vel scelerisque sem ornare sed. Praesent sit amet interdum velit. Ut et posuere sapien. Suspendisse a turpis id massa pulvinar rhoncus. Nam vestibulum venenatis metus, sed fermentum justo rutrum at. Suspendisse commodo nisi augue, a fermentum tellus scelerisque nec. Fusce malesuada sagittis erat, a pharetra mauris dignissim vel. Duis feugiat eros et mollis volutpat. Etiam pharetra fringilla augue, non lacinia metus consequat et. Nulla sollicitudin dolor vel congue condimentum. Donec eget mauris sapien. Proin rhoncus eros nec tortor gravida maximus</p>
        
         </div>

         <div className="Cat">
             <img src={Image2}></img>
         </div>

         

        </div>
         
      
    

        

    );



}


export default About;