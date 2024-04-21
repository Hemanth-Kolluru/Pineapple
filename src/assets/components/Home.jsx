import React from 'react'
import '../css/card_1.css'
import '../css/category.css'
import '../css/review.css'
import ctr_img from '../images/cut_the_rope.png'
import gm2_img from '../images/gun_mayhem_2.png'
import pio_img from '../images/paper_io.png'
import hs_img from '../images/happy_snakes.png'
import faw_img from '../images/fire_and_water.png'
import hio_img from '../images/hole_io.png'
import mr_img from '../images/Mr_racer.png'

function Home() {
  return (
        <div>
            <center>
                <p>&nbsp;</p>
                <p className="title">Featured Games</p>
                <br />
                <div className="wrapper">
                    <i id="left" className="fa-solid  fas fa-angle-left">
                    </i>
                    <ul className="carousel"> 
                        <li className="card"> 
                            <div className="img"><img src={ctr_img} draggable="false" /></div> 
                            <p className="title">Cut the Rope</p>
                            <span>Puzzle</span><br />
                            <a className="play" href="/cut_the_rope">Play now</a>
                        </li> 
                        <li className="card"> 
                            <div className="img"><img src={gm2_img} draggable="false" /></div> 
                            <p className="title">Gun Mayhem 2</p>
                            <span>Shooting</span><br />
                            <a className="play" href="/gun_mayhem_2.html">Play now</a>
                        </li>
                        <li className="card"> 
                            <div className="img"><img src={pio_img} /></div> 
                            <p className="title">Paper.io</p>
                            <span>Arcade</span><br />
                            <a className="play" href="/paper.html">Play now</a>
                        </li> 
                        <li className="card"> 
                            <div className="img"><img src={hs_img} /></div> 
                            <p className="title">Happy Snakes</p> 
                            <span>Arcade</span><br />
                            <a className="play" href="/happy_snakes.html">Play now</a>
                        </li> 
                        <li className="card"> 
                            <div className="img"><img src={faw_img} /></div> 
                            <p className="title">Fireboy and Watergirl</p>
                            <span>Puzzle</span><br />
                            <a className="play" href="/fire_and_water.html">Play now</a>
                        </li> 
                        <li className="card">
                            <div className="img"><img src={hio_img} /></div> 
                            <p className="title">Hole.io</p> 
                            <span>Arcade</span><br />
                            <a className="play" href="/hole.html">Play now</a>
                        </li> 
                        <li className="card">
                            <div className="img"><img src={mr_img} /></div>
                            <p className="title">Mr Racer</p>
                            <span>Racing</span><br />
                            <a className="play" href="/Mr_Racer.html">Play now</a>
                        </li>
                    </ul> 
                <i id="right" className="fa-solid fas fa-angle-right"></i> 
            </div>
        </center>
        <section className="category">
            <span className="heading">Choose Category</span>
            <div className="category_box">
                <div className="dark_overlay"></div>
                <p className="category_text">Action</p>
            </div>
            <div className="category_box">
                <div className="dark_overlay"></div>
                <p className="category_text">Adventure</p>
            </div>
            <div className="category_box">
                <div className="dark_overlay"></div>
                <p className="category_text">Racing</p>
            </div>
            <div className="category_box">
                <div className="dark_overlay"></div>
                <p className="category_text">Shooting</p>
            </div>
        </section>
        <section className="review" id="reviews">
            <span className="review_heading">Here's what our users say</span>
            <div className="review_box">
                <p className="review_text">Action</p>
                <img src="" />
                <p>-Name</p>
            </div>
            <div className="review_box">
                <p className="review_text">Adventure</p>
            </div>
            <div className="review_box">
                <p className="review_text">Racing</p>
            </div>
        </section>
        </div>
  )
}

export default Home
