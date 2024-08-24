import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import styles from "./ProductStyles.module.scss";
import Product from "./Index";
import { Link } from "@inertiajs/react";

import "swiper/css";
import "swiper/css/pagination";

function ListProduct({ products, quantity, title , toContent, to}) {
    const breakpoints = quantity >= 5 ? {
        320: {
            slidesPerView: 1,
            spaceBetween: 6,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
    } : {
        320: {
            slidesPerView: 1,
            spaceBetween: 6,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    };

    return (
        <section className={clsx("container", styles.products)}>
            <div className={clsx("d-flex justify-content-between align-items-center mb-3",styles.header)}>
                <h1 className={clsx("text-uppercase", styles.title)}>{title}</h1>
                <Link className={clsx("fs-3 text-decoration-none", styles.to, styles.active)} href={to}>{toContent}</Link>
            </div>
            <Swiper
                slidesPerView={quantity}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                breakpoints={breakpoints}
                modules={[Pagination, Navigation]}
                className={clsx(styles.mySwiper)}
            >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Product product={product} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
}

export default ListProduct;
