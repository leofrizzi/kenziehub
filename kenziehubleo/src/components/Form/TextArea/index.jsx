import { forwardRef } from "react";
import styles from "./styles.module.scss";

export const TextArea = forwardRef(({ label, error, ...rest }, ref) => {
    return (
        <div className={styles.Div}>
            <label className={styles.label}>{label}</label>
            <textarea ref={ref} {...rest}></textarea>
            {error ? <p className={styles.p}>{error.message}</p> : null}
        </div>
    );
});