import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../components/Form/Register";
import styles from "./styles.module.scss";

export const RegisterPage = () => {
    const navigate = useNavigate();

    const goToLoginPage = () => {
        setTimeout(() => {
            navigate("/");
        },1000);
    };

    return (
        <section className={styles.Section}>
            <div className={styles.Div}>
                <h2 className={styles.H2}>Kenzie Hub</h2>
                <button
                    onClick={() => goToLoginPage()}
                    className={styles.Button}
                >
                    Voltar
                </button>
            </div>
            <RegisterForm />
        </section>
    );
};