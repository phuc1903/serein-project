import clsx from "clsx";
import { useRoute } from "V/tightenco/ziggy/src/js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import styles from "./BannerStyles.module.scss";
import Button from "@/Component/Button/Index";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Banner({banners}) {
    const route = useRoute();
    return (
        <section className={clsx("", styles.banner)}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-100"
            >
                {banners.map(banner => (
                    <SwiperSlide key={banner.id}>
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-6">
                                    <div className="banner-content">
                                        <h4>{banner.collection}</h4>
                                        <h1 className="display-2 text-uppercase text-dark pb-5">
                                            {banner.title}
                                        </h1>
                                        <span className={clsx("d-block pb-3")}>{banner.description}</span>
                                        <Button type="primary" to={route("shop")} className={styles.button}>
                                            {banner.action}
                                        </Button>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="image-holder h-100">
                                        <img
                                            className="d-block h-100 object-cover"
                                            alt="banner"
                                            src="images/banner-image.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Banner;
