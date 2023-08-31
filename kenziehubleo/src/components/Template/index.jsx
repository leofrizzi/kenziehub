import { Header } from "../Header";
import styles from "./styles.module.scss";

export const Template = ({ children, logout }) => {
    return (
        <div className={styles.template}>
            <Header logout={logout} />
            {children}
        </div>
    );
};