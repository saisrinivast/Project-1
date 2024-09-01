import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <div className="time">
                <h2>9:41</h2>
            </div>
            <div className="settings">
                <div className="network">
                    <img src="./assets/signal.png" alt="" />
                </div>
                <div className="wifi">
                    <img src="./assets/wifi.png" alt="" />
                </div>
                <div className="battery">
                    <img src="./assets/battery.png" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
