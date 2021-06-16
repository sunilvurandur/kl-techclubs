import React from 'react'
import dsc_logo from '../images/dsc_logo.jpg';
import kognitive from '../images/kognitive.jpg';
import mayav from '../images/mayavi.jpg';
import megha from '../images/megha.jpg';
import rpa from '../images/rpa.jpg';
import sea from '../images/sea.jpg';
import whc from '../images/WHC.jpg';






class Body extends React.Component{
    render(){
        return(
            <div>
                <div class="scroll">
        <div class="container one">
          <div class="grid-cards" >
            <div class="card" data-aos="fade-up">
                
              <a href="https://dscklef-e3a56.web.app/" target=" _blank"  class="weee">
                <div class ="imagecss">
              <img src={dsc_logo} alt="img-1" title="card image" />
            </div>
        </a>
              <div class="card-body">
                  <a href="https://dscklef-e3a56.web.app/" target=" _blank"  class="weee"  >
                <h3 class="title-card" href="https://dscklef-e3a56.web.app/">
                    Developer Student Club
                </h3>
            </a>
                <p>Do you want to explore App,Web and Cloud technologies then you can join Developer Student Club
                </p>
              </div>
               
            </div>
            <div class="card">
                <a href= "https://mayavi-tech.github.io/Mayavi_Website/landingpage.html" target=" _blank"  class="weee"  >
                <div class ="imagecss">
              <img src={mayav} alt="img-2" title="card image" />
             </div>
            </a>
              <div class="card-body">
                  <a href="https://mayavi-tech.github.io/Mayavi_Website/landingpage.html" target=" _blank"  class="weee"  >
                <h3 class="title-card">
                    Mayavi
                </h3>
                </a>
                <p>Do you want to explore AR & VR technologies  then you can join Mayavi Club
                </p>
              </div>
            </div>
            <div class="card">
                <a href="#" >
                <div class ="imagecss">
              <img src={whc} alt="img-3" title="card image" />
             </div> 
            </a>
             <div class="card-body">
                 <a href="#" >
                <h3 class="title-card">
                  Whitehat Hackers
                </h3>
            </a>
                <p>Do you want to be highly skilled in Ethical Hacking then you can join White Hat Club
                </p>
              </div>
               
            </div>
            <div class="card">
                <a href="https://klsea.in/" target=" _blank"  class="weee"  >
                <div class ="imagecss">
              <img src={sea} alt="img-3" title="card image" />
             </div> 
             </a>
             <div class="card-body">
                <a href="https://klsea.in/" target=" _blank"  class="weee"  >
                <h3 class="title-card">
                  SEA
                </h3>
                </a>
                <p>Do you want to explore web development then you can join Software Engineering Associates Club
                </p>
              </div>
               
            </div>
            <div class="card">
                <a href="https://kognitivclub.tech/" target=" _blank"  class="weee"   >
                <div class ="imagecss">
              <img src={kognitive} alt="img-3" title="card image" />
             </div> 
             </a>
             <div class="card-body">
                <a href="https://kognitivclub.tech/" target=" _blank"  class="weee"    >
                <h3 class="title-card">
                  Kognitive
                </h3>
                </a>
                <p>Do you want to interested in ML and AI then you can join Kognitiv Club
                </p>
              </div>
               
            </div>
            <div class="card">
                <a href="#" >
                <div class ="imagecss">
              <img src={megha} alt="img-3" title="card image" />
             </div></a> <div class="card-body">
               <a href="#" ><h3 class="title-card">
                  Megha
                </h3>
            </a> 
                <p>Do you want to explore cloud computing then you can join Megha Club
                </p>
              </div>
               
            </div>
            <div class="card">
                <a href = "https://rpaklu.herokuapp.com/" target=" _blank"  class="weee"   >
                <div class ="imagecss">
              <img src={rpa}alt="img-3" title="card image" />
             </div>
             </a>
                 <div class="card-body">
                     <a href = "https://rpaklu.herokuapp.com/" target=" _blank"  class="weee"    >
                <h3 class="title-card">
                    Robotic Process Automation
                </h3></a>
                <p>Do you want to be highly skilled in Automation technology then you can join Robotic Process Automation Club
                </p>
              </div>
               
            </div>
          </div>
        </div>
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <p className="copyright">DSC KLU © 2021</p>
                </div>
            </footer>
        </div>
        
        
        </div>
            </div>
        )
    }
}

export default Body;