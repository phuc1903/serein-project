import clsx from "clsx";
import styles from "./ProductStyles.module.scss";
import { useRoute } from "V/tightenco/ziggy/src/js";
import Card from "react-bootstrap/Card";
import Button from "../Button/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";

function Product({ product }) {
    const route = useRoute();

    return (
        <Card className={clsx("w-100", styles.card)}>
            <Link
                className={clsx("text-decoration-none")}
                href={route("show", product.id)}
            >
                <Card.Img
                    className={clsx(styles.image)}
                    variant="top"
                    src={product.image}
                />
                <Card.Body>
                    <Card.Title className={clsx("fs-1", styles.title)}>{product.name}</Card.Title>
                    <Card.Text className={clsx("fs-3 text-wrap", styles.description)}>{product.description}</Card.Text>
                </Card.Body>
            </Link>
            <div
                className={clsx(
                    "d-flex gap-0 justify-content-center",
                    styles.buttons
                )}
            >
                <Button
                    to={route("show", product)}
                    className={clsx(styles.buttonLeft, styles.button)}
                >
                    Mua ngay
                </Button>
                <Button
                    className={clsx(styles.buttonMid, styles.button)}
                    type="outline-primary"
                >
                    <FontAwesomeIcon icon={faCartShopping} />
                </Button>
                <Button className={clsx(styles.buttonRight, styles.button)}>
                    <FontAwesomeIcon icon={faHeart} />
                </Button>
            </div>
        </Card>
    );
}

export default Product;
