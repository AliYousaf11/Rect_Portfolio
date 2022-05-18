import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className="home__content">

        <div className="subscript">
          <h5>Hello,</h5>
        </div>
        
        <div className="nameDeveloper">
          <h1>I`m M.Ali Yousaf</h1>
        </div>

          <div className="developertitle">
            <h2>Frontend/Backend Developer</h2>
            
            <div className='location'>
                <h5>From Lahore</h5>
            </div>
          </div>
          <button>Hire Me</button>

      </div>
    </div>
  )
}

export default Home
