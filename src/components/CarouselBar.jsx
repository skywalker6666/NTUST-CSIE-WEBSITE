import React from 'react';
import {Carousel } from 'react-bootstrap';
import chiikawabg from "../assets/chiikawa_background.jpg";
import fri from "../assets/friren.jpg";
import anyasfamily from "../assets/anya'sfamily.jpg"

const CarouselBar = () => {
  return (
    // <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Carousel interval={3000} pause="hover">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={fri}
                alt="第一張圖片"
                style={{ width: '600px', height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>第一張圖片標題</h3>
                    <p>這是第一張圖片的描述。</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={anyasfamily}
                alt="第二張圖片"
                style={{ width: '600px', height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>第二張圖片標題</h3>
                    <p>這是第二張圖片的描述。</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={chiikawabg}
                alt="第三張圖片"
                style={{ width: '600px', height: '400px', objectFit: 'cover' }}
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
