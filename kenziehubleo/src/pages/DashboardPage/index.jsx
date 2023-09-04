import { Template } from "../../components/Template";
import styles from "./styles.module.scss";
import { TechList } from "../../components/Tech/TechList";
import { CreateTechModal } from "../../components/Modals/CreateTechModal";
import { EditTechModal } from "../../components/Modals/EditTechModal";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";

export const Dashboard = () => {
    const { dataUser } =
        useContext(UserContext);
    const { createModalStatus, editModalStatus } = useContext(TechContext);

    return (
        <Template>
            <section className={styles.Section}>
                <h1 className={styles.H1}>Olá, {dataUser?.name}!</h1>
                <div>
                    <p className={styles.P}>{dataUser?.course_module}</p>
                </div>
            </section>
            <TechList />
            {createModalStatus ? <CreateTechModal /> : null}
            {editModalStatus ? <EditTechModal /> : null}
        </Template>
    );
};