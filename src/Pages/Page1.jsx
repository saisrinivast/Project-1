import React from 'react'
import "./Pages.css"
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Page1 = () => {
  return (
    <>
      <Navbar/>
        <div className="p1-sec">
            <Link to='/'>
            <div className="event">
                <h3>{"< Event 8625"}</h3>
            </div>
            </Link>
            <div className="share">
                <img src="./assets/share.png" alt="" />
            </div>
        </div>
        <div className="p1-image">
          <img src="./assets/cricket.png" alt="" />
        </div>
        <div className="que">
          <h2>Kolkata to win the match vs Mumbai?</h2>
        </div>
        <div className="match">
          <h4>LAST 5 T20 : KOLKATA 4, MUMBAI 1, DRAW 0</h4>
        </div>
        <hr />
        <div className="market">
          <h3>THE MARKET PREDICT</h3>
        </div>
        <div className="win">
          <div className="win-image">
            <img src="./assets/win.png" alt="" />
          </div>
          <div className='yesandno'>
            <div className="y">
              <h3>Yes</h3>
            </div>
            <div className="n">
              <h3>No</h3>
            </div>
          </div>
          <div className="percent">
            <div className="yp">
              <h3>70%</h3>
            </div>
            <div className="np">
              <h3>30%</h3>
            </div>
          </div>
        </div>
        <div className="chart">
          <h3>THE MARKET TREND/CHART</h3>
        </div>
        <div className="graph">
          <img src="./assets/graph.png" alt="" />
        </div>
        <div className="activityandorder">
          <div className="activity">
          <h3>ACTIVITY</h3>
          </div>
          <div className="order">
          <h3>ORDER BOOK</h3>
          </div>
        </div>
        <div className="ob1">
          <div className="h1">
            <div className="h1-img">
              <img src="./assets/profile.png" alt="" />
            </div>
            <div className="h1-name">
              <h4>Hella</h4>
            </div>
          </div>
          <div className="ob">
            <div className="bar">
              <img src="./assets/bar.png" alt="" />
            </div>
            <div className="desc">
              <h5>a few second ago</h5>
            </div>
          </div>
          <div className="r1">
            <div className="r1-img">
              <img src="./assets/profile.png" alt="" />
            </div>
            <div className="r1-name">
              <h4>Robin</h4>
            </div>
          </div>
        </div>
        <div className="ob2">
          <div className="h1">
            <div className="h1-img">
              <img src="./assets/profile.png" alt="" />
            </div>
            <div className="h1-name">
              <h4>Hella</h4>
            </div>
          </div>
          <div className="ob">
            <div className="bar">
              <img src="./assets/bar.png" alt="" />
            </div>
            <div className="desc">
              <h5>a few second ago</h5>
            </div>
          </div>
          <div className="r1">
            <div className="r1-img">
              <img src="./assets/profile.png" alt="" />
            </div>
            <div className="r1-name">
              <h4>Robin</h4>
            </div>
          </div>
        </div>
        <div className="ob3">
          <div className="h1">
            <div className="h1-img">
              <img src="./assets/profile.png" alt="" />
            </div>
            <div className="h1-name">
              <h4>Hella</h4>
            </div>
          </div>
          <div className="ob">
            <div className="bar">
              <img src="./assets/bar.png" alt="" />
            </div>
            <div className="desc">
              <h5>a few second ago</h5>
            </div>
          </div>
          <div className="r1">
            <div className="r1-img">
              <img src="./assets/profile.png" alt="" />
            </div>
            <div className="r1-name">
              <h4>Robin</h4>
            </div>
          </div>
        </div>
        <div className="ob4">
          <div className="h1">
            <div className="h1-img">
              <img src="./assets/profile.png" alt="" />
            </div>
            <div className="h1-name">
              <h4>Hella</h4>
            </div>
          </div>
          <div className="ob">
            <div className="bar">
              <img src="./assets/bar.png" alt="" />
            </div>
            <div className="desc">
              <h5>a few second ago</h5>
            </div>
          </div>
          <div className="r1">
            <div className="r1-img">
              <img src="./assets/profile.png" alt="" />
            </div>
            <div className="r1-name">
              <h4>Robin</h4>
            </div>
          </div>
      </div>
      <div className="show-sector">
        <div className="show">
            <h3>Show all</h3>
        </div>
        <div className="show-img">
            <img className="arrow" src="./assets/arrow.png" alt="" />
        </div>
      </div>
      <hr />
      <div className="event">
        <h2>About the event</h2>
      </div>
      <div className="eventdetails">
        <div className="trading">
          <h3>Traders</h3>
          <h2>$47.12K</h2>
        </div>
        <div className="quantity">
          <h3>Volume</h3>
          <h2>$9.9L</h2>
        </div>
      </div>
      <div className="starting">
        <div className="start">
          <h3>Started at</h3>
          <h2>June 19,2024 3:40 PM</h2>
        </div>
        <div className="end">
          <h3>Ended at</h3>
          <h2>June 19,2024 9:00 PM</h2>
        </div>
      </div>
      <hr className='hr1' />
      <div className="overview">
        <div className="over">
          <div className="view">
            <h2>Overview</h2>
          </div>
          <div className="info">
            <h4>Information about event</h4>
          </div>
        </div>
        <div className="arrow1">
          <h3>{'>'}</h3>
        </div>
      </div>
      <hr className='hr2'/>
      <div className="source">
        <div className="truthsource">
          <div className="truth">
            <h2>Source of Truth</h2>
          </div>
          <div className="truthinfo">
            <h4>Information about source of Truth</h4>
          </div>
        </div>
        <div className="arrow2">
          <h3>{'>'}</h3>
        </div>
      </div>
      <hr className='hr3'/>
      <div className="rules">
        <div className="tandc">
          <div className="terms">
            <h2>Rules</h2>
          </div>
          <div className="condition">
            <h4>Terms and conditions</h4>
          </div>
        </div>
        <div className="arrow3">
          <h3>{'>'}</h3>
        </div>
      </div>
      <hr className='hr4'/>
      <div className="note">
        <div className="keep">
          <h1>Keep</h1>
        </div>
        <div className="tradingg">
          <h1>Trading !</h1>
        </div>
      </div>
      <hr className='hr5'/>
      <div className="yesorno">
        <div className="yess">
          <button className='button101'>Yes $5.3</button>
        </div>
        <div className="noo">
          <button className='button102'><h2 className='bh2'>No $ 4.7</h2></button>
        </div>
      </div>
    </>
  )
}
export default Page1