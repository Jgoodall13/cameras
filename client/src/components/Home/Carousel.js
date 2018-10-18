import React from 'react';
import Hero from '../../images/hero_placeholder.png'

const Carousel = () => {
    return (
        <div class="container-fluid">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                <div class="item active">
                    Hero one
                    <img src={Hero} alt="hero-one" />
                </div>
                <div class="item">
                    Hero two
                    <img src={Hero} alt="hero-one" />
                </div>                
                <div class="item">
                    Hero three
                    <img src={Hero} alt="hero-one" />
                </div>
                <div class="item">
                    Hero four
                    <img src={Hero} alt="hero-one" />
                </div>
                </div>
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel;