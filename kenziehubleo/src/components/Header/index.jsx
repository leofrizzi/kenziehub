import { useContext } from "react";
import styles from "./styles.module.scss";
import { UserContext } from "../../providers/UserContext";

export const Header = () => {
    const {logout} = useContext(UserContext)
    return (
        <header className={styles.Header}>
            <h1 className={styles.H1}>Kenzie Hub</h1>
            <button onClick={() => logout()} className={styles.buttonSair}>
                Sair
            </button>
        </header>
    );
};