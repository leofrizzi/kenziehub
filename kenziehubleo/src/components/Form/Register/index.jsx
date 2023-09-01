import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "../Input/index";
import styles from "./styles.module.scss";
import { Select } from "../Select";
import { InputSenha } from "../InputSenha";
import { zodResolver as formResolver } from '@hookform/resolvers/zod';
import { registerRequirements } from "./RegisterRequirements";
import { TextArea } from "../TextArea";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {
    const { registerUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: formResolver(registerRequirements),
    });

    const submit = async (formData) => {
        await registerUser(formData);
      };

    return (
        <div className={styles.Div}>
            <form onSubmit={handleSubmit(submit)}>
                <h2 className={styles.H2}>Crie sua conta</h2>
                <span className={styles.Span}>Rápido e grátis, vamos nessa!</span>
                <Input
                    disabled={isLoading}
                    type="text"
                    placeholder="Digite seu nome..."
                    label={"Nome"}
                    autoComplete="off"
                    {...register("name")}
                    error={errors.name}
                />

                <Input
                    disabled={isLoading}
                    type="text"
                    placeholder="Digite seu e-mail..."
                    label={"E-mail"}
                    autoComplete="off"
                    {...register("email")}
                    error={errors.email}
                />

                <InputSenha
                    disabled={isLoading}
                    placeholder="Digite sua senha..."
                    label={"Senha"}
                    autoComplete="off"
                    {...register("password")}
                    error={errors.password}
                />

                <InputSenha
                    disabled={isLoading}
                    placeholder="Confirme sua senha..."
                    label={"Confirmar Senha"}
                    autoComplete="off"
                    {...register("confirm_password")}
                    error={errors.confirm_password}
                />
                <TextArea
                    disabled={isLoading}
                    type="text"
                    placeholder="Fale sobre você..."
                    label={"Bio"}
                    autoComplete="off"
                    {...register("bio")}
                    error={errors.bio}
                />

                <Input
                    disabled={isLoading}
                    type="number"
                    placeholder="DDD + número "
                    label={"Contato"}
                    autoComplete="off"
                    {...register("contact")}
                    error={errors.contact}
                />

                <Select
                    disabled={isLoading}
                    {...register("course_module")}
                    label={"Selecionar Módulo"}
                    error={errors.contact}
                >
                    <>
                        <option value="M1 - Front-End Básico">Primeiro Módulo - M1</option>
                        <option value="M2 - Front-End Intermediário">
                            Segundo Módulo - M2
                        </option>
                        <option value="M3 - Front-End Avançado">
                            Terceiro Módulo - M3
                        </option>
                        <option defaultValue={true} value="M4 - Back-End Básico">
                            Quarto Módulo - M4
                        </option>
                        <option value="M5 - Back-End Intermediário">
                            Quinto Módulo - M5
                        </option>
                        <option value="M6 - Back-End Avançado">Sexto Módulo - M6</option>
                    </>
                </Select>

                <button
                    disabled={isLoading}
                    className={styles.ButtonNegativo}
                    type="submit"
                >
                    {isLoading ? "Cadastrando..." : "Cadastrar"}
                </button>
            </form>
        </div>
    );
};