import { MdEdit, MdDelete } from "react-icons/md";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({ tech }) => {
    const { deleteTech, openModal, setEditingTech } = useContext(TechContext);
    return (
        <li className={styles.lI}>
            <p className={styles.P}>{tech.title}</p>
            <div className={styles.Div1}>
                <p className={styles.P}>{tech.status}</p>
                <div className={styles.Div2}>
                    <button
                        className={styles.Button1}
                        onClick={() => {
                            openModal("edit");
                            setEditingTech(tech);
                        }}
                    >
                        <MdEdit title="Editar Tech" size={16} />
                    </button>
                    <button
                        className={styles.Button2}
                        onClick={() => deleteTech(tech.id)}
                    >
                        <MdDelete title="Deletar Tech" size={16} />
                    </button>
                </div>
            </div>
        </li>
    );
};