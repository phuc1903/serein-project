// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Head } from "@inertiajs/react";

import clsx from "clsx";
import styles from "./HomeStyle.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "@inertiajs/react";
import SvgImage from "@/Component/Images/Svg";
// import Product from "@/Component/Product";

function Home({ productNews, productBestsellers, orders}) {
    return (
        <>
        <Head title="Home"/>
            <SvgImage />

            <section
                className="position-relative overflow-hidden bg-light-blue"
                id="billboard"
            >
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-6">
                                    <div className="banner-content">
                                        <h1 className="display-2 text-uppercase text-dark pb-5">
                                            Your Products Are Great.
                                        </h1>
                                        <a
                                            className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                                            href="shop.html"
                                        >
                                            Shop Product
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="image-holder">
                                        <img
                                            alt="banner"
                                            src="images/banner-image.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="row d-flex flex-wrap align-items-center">
                                <div className="col-md-6">
                                    <div className="banner-content">
                                        <h1 className="display-2 text-uppercase text-dark pb-5">
                                            Technology Hack You Won't Get
                                        </h1>
                                        <a
                                            className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                                            href="shop.html"
                                        >
                                            Shop Product
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="image-holder">
                                        <img
                                            alt="banner"
                                            src="images/banner-image.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
}


export default Home;
