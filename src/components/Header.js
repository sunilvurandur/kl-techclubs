import React from 'react';

class Header extends React.Component{
  render(){
    return(
        <header>
            <div className = "header">
            <section className="header-content">
                <div className="flo" style={{float:"left"}}>
              <h1 className="header-title animate-pop-in">Technology clubs</h1>
              <h3 className="header-subtitle animate-pop-in">K L University</h3>
            </div>
             
            </section>
          </div>
        </header>
    )}  
}

export default Header;