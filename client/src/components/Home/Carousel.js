import React from 'react';
import Hero from '../../images/hero_placeholder.png'
import HeroOne from '../../images/Main_Hero_1.jpg';
import HeroTwo from '../../images/Main_Hero_2.jpg';
import HeroThree from '../../images/Main_Hero_3.jpg';
import HeroFour from '../../images/Main_Hero_4.jpg';

const Carousel = () => {
    return (
        <div className="container-fluid full-carousel">
            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="6000">
                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                <div className="item active">
                    <img src={HeroOne} alt="hero-one" />
                </div>
                <div className="item">
                    <img src={HeroTwo} alt="hero-one" />
                </div>                
                <div className="item">
                    <img src={HeroThree} alt="hero-one" />
                </div>
                <div className="item">
                    <img src={HeroFour} alt="hero-one" />
                </div>
                </div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel;