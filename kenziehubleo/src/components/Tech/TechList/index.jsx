import { MdAdd } from "react-icons/md";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { TechCard } from "../TechCard/index";
import { TechContext } from "../../../providers/TechContext";

export const TechList = () => {
    const { openModal, techList } = useContext(TechContext);

    const techListItems = [];

    if (techList && techList.length > 0) {
        for (let i = 0; i < techList.length; i++) {
            const tech = techList[i];
            techListItems.push(<TechCard key={tech.id} tech={tech} />);
        }
    }

    return (
        <>
            <section className={styles.Div}>
                <h2 className={styles.H2}>Nenhuma tecnologia cadastrada...</h2>
                <button title="Adicionar Tech" onClick={() => openModal("create")}>
                    <MdAdd size={21} />
                </button>
            </section>
            <section className={styles.Section}>
                <ul>{techListItems}</ul>
            </section>
        </>
    );
};