import { Template } from "../../components/Template";
import styles from "./styles.module.scss";

export const Dashboard = ({ dataUser, logout }) => {
    return (
        <Template logout={logout}>
            <section className={styles.Section}>
                <h1 className={styles.H1}>Olá, {dataUser?.name}!</h1>
                <p className={styles.P}>{dataUser?.course_module}</p>
            </section>
            <section className={styles.Section2}>
                <h1 className={styles.H1}>
                    Que pena! Estamos em desenvolvimento :(
                </h1>
                <p className={styles.P}>
                    Nossa aplicação está em desenvolvimento. Em breve teremos novidades!
                </p>
            </section>
        </Template>
    );
};