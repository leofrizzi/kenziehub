import { MdClose } from "react-icons/md";
import { Input } from "../../Form/Input/index";
import { Select } from "../../Form/Select";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditTechRequirements } from "./EditTechRequirements";

export const EditTechModal = () => {
    const { closeModal, editingTech, editTech } = useContext(TechContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        values: {
            title: editingTech.title,
            status: editingTech.status,
        },
        resolver: zodResolver(EditTechRequirements),
    });
    const submit = (formData) => {
        editTech(formData);
        closeModal("edit");
    };

    return (
        <div className={styles.Div1} role="dialog">
            <div className={styles.Div2}>
                <form onSubmit={handleSubmit(submit)}>
                    <div className={styles.Div3}>
                        <h2 className={styles.H2}>Tecnologia Detalhes</h2>
                        <button
                            onClick={() => closeModal("edit")}
                            type="button"
                            title="Fechar modal"
                            className={styles.Button1}
                        >
                            <MdClose size={16} />
                        </button>
                    </div>
                    <div className={styles.Div4}>
                        <Input
                            {...register("title")}
                            id="title"
                            placeholder="Digite o nome da Tecnologia"
                            autoComplete="off"
                            type="text"
                            label="Nome"
                            disabled={true}
                        />
                        <Select
                            error={errors.status}
                            {...register("status")}
                            label="Selecionar nível"
                        >
                            <option defaultValue={true} value="">
                                Selecione...
                            </option>
                            <option defaultValue={true} value="Iniciante">
                                Iniciante
                            </option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </Select>
                        <button className={styles.Button2} type="submit">
                            Salvar Alterações
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};