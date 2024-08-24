import { Head } from "@inertiajs/react";
import clsx from "clsx";

import styles from "./DetailStyles.module.scss";

function Detail({product, relatedProducts}) {
    console.log(product);
    
    return (  
        <>
            <Head title="Chi tiết sản phẩm" />
            <h1 className={styles.banner}>{product.name}</h1>
        </>
    );
}

export default Detail;