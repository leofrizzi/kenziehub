import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../Input/index";
import styles from "./styles.module.scss";
import { zodResolver as formResolver } from '@hookform/resolvers/zod';
import { LoginRequirements } from "./LoginRequirements";
import { InputSenha } from "../InputSenha";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const LoginForm = () => {
    const { performUserLogin, isLoading } = useContext(UserContext);
   
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: formResolver(LoginRequirements),
    });

    const submit = async (formData) => {
        console.log(formData)
        await performUserLogin(formData);
        reset();
    };

    const navigate = useNavigate();

    const goToRegisterPage = () => {
        setTimeout(() => {
            navigate("/register");
        }, 1000);
    };

    return (
        <div className={styles.Div}>
            <form onSubmit={handleSubmit(submit)}>
                <h2 className={styles.H2}>Login</h2>
                <Input
                    disabled={isLoading}
                    id={"inputEmail"}
                    type="text"
                    placeholder="Digite seu email..."
                    label={"E-mail"}
                    autoComplete="off"
                    {...register("email")}
                    error={errors.email}
                />
                <InputSenha
                    disabled={isLoading}
                    id={"inputPassword"}
                    placeholder="Digite sua senha..."
                    label={"Senha"}
                    autoComplete="off"
                    {...register("password")}
                    error={errors.password}
                />
                <button
                    disabled={isLoading}
                    className={styles.ButtonLogin}
                    type="submit"
                >
                    {isLoading ? "Fazendo login..." : "Login"}
                </button>
            </form>
            <div className={styles.Div2}>
                <span className={styles.span}>Ainda não possui uma conta?</span>
                <button
                    className={styles.ButtonCadastrar}
                    type="button"
                    onClick={() => goToRegisterPage()}
                >
                    Cadastre-se
                </button>
            </div>
        </div>
    );
};