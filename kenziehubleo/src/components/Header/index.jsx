import styles from "./styles.module.scss";

export const Header = ({ logout }) => {
    return (
        <header className={styles.Header}>
            <h1 className={styles.H1}>Kenzie Hub</h1>
            <button onClick={() => logout()} className={styles.buttonSair}>
                Sair
            </button>
        </header>
    );
};