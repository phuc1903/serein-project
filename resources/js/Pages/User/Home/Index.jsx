import { Head } from "@inertiajs/react";
import { useRoute } from "V/tightenco/ziggy/src/js";

import clsx from "clsx";
import styles from "./HomeStyle.module.scss";

import SvgImage from "@/Component/Images/Svg";

import ListProduct from "@/Component/Product/ListProduct";
import Banner from "./Components/Banner/Index";

function Home({ productNews, productBestsellers, banners }) {
    const route = useRoute();

    return (
        <>
            <Head title="Home" />
            <SvgImage />

            <Banner banners={banners.data}/>

            <section className="productNews container-fluid py-5 my-5">
                <ListProduct products={productNews} title="Sản phẩm mới" toContent="Đi đến shop" to={route('shop')} />
            </section>

            <section className="productBestllers container py-5 my-5">
                <ListProduct products={productBestsellers} title="Sản phẩm bán chạy" toContent="Đi đến shop" to={route('shop')} />
            </section>
        </>
    );
}

export default Home;
