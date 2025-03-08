import chiikawaBg from '../assets/chiikawa_bg.png';
import frirenBg from '../assets/friren.jpg';
import anyaFamilyBg from "../assets/anya'sfamily.jpg";
const GalleryCarousel = () => {
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={chiikawaBg} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
                <img src={anyaFamilyBg} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
                <img src={frirenBg} class="d-block w-100" alt="..." />
            </div>
        </div>
    </div>
};
export default GalleryCarousel;