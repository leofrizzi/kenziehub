import { LoginForm } from "../../components/Form/Login";
import styles from "./styles.module.scss";

export const LoginPage = ({ setDataUser }) => {
    return (
        <section className={styles.Section}>
            <h1 className={styles.H1}>Kenzie Hub</h1>
            <LoginForm setDataUser={setDataUser} />
        </section>
    );
};