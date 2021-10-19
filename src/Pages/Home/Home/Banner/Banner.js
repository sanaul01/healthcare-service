import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item className="carosel">
                    <img
                    className="d-block w-50 mx-auto"
                    src="https://i.ibb.co/7zY5Z01/banner1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carosel">
                    <img
                    className="d-block mx-auto"
                    src="https://i.ibb.co/LvNjXtK/banner2.png"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carosel">
                    <img
                    className="d-block w-50 mx-auto"
                    src="https://i.ibb.co/TvR83JJ/banner3.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Banner;