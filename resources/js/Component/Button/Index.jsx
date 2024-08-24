import { Link } from '@inertiajs/react';
import clsx from 'clsx';
import styles from './ButtonStyles.module.scss';

function Button({ children, type = "primary", href, to, className, ...props }) {
    const classes = clsx(styles.button, styles[type], className);

    if (to) {
        return (
            <Link href={to} className={classes} {...props}>
                {children}
            </Link>
        );  
    }

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type="submit" className={classes} {...props}>
            {children}
        </button>
    );
}

export default Button;
