import { forwardRef } from "react";
import styles from "./styles.module.scss";

export const Input = forwardRef(({ label, error, id, ...rest }, ref) => {
    return (
        <div className={styles.Div}>
            <label htmlFor={id} className={styles.Label}>
                {label}
            </label>
            <input id={id} ref={ref} {...rest} />
            {error ? <p className={styles.p}>{error.message}</p> : null}
        </div>
    );
});