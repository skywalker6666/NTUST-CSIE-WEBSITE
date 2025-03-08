import React from 'react';
import { Carousel } from 'react-bootstrap';
import chiikawabg from "../assets/chiikawa_bg.png";
import fri from "../assets/frierens.webp";
import anyasfamily from "../assets/anya'sfamily.jpg"
import feren from "../assets/fern.webp";
const CarouselBar = () => {
    return (
        <Carousel interval={3000} pause="hover">
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={fri}
                    alt="第一張圖片"
                />
                <Carousel.Caption>
                    <h3>第一張圖片標題</h3>
                    <p>這是第一張圖片的描述。</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={anyasfamily}
                    alt="第二張圖片"
                />
                <Carousel.Caption>
                    <h3>第二張圖片標題</h3>
                    <p>這是第二張圖片的描述。</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={chiikawabg}
                    alt="第三張圖片"
                />
                <Carousel.Caption>
                    <h3>第三張圖片標題</h3>
                    <p>這是第三張圖片的描述。</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        // </div>
    );
};

export default CarouselBar;
