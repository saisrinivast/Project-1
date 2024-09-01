import React from 'react'
import { Link } from 'react-router-dom'


const Sec1 = () => {
  return (
    <>  
        <Link to="/page1">
        <div className="navbar5">
            <div className="m1">
                <h1>Kolkata to win the match vs Mumbai?</h1>
                <h2>H2H last 5 T20: Kolkata 4,Mumbai 1,DRAW 0</h2>
                <div className="b1">
                    <button  className='bb1'>Yes $5.3</button>
                    <button className='bb2'>No $4.7</button>
                </div>
            </div>
            <div className="m1-img">
                <img src="./assets/ipl.png" alt="" />
            </div>
        </div>
        </Link>
    </>
  )
}

export default Sec1