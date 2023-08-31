import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../Input/index";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import { zodResolver as formResolver } from '@hookform/resolvers/zod';
import { LoginRequirements } from "./LoginRequirements";
import { InputSenha } from "../InputSenha";
import { api } from "../../../services/api";

export const LoginForm = ({ setDataUser }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: formResolver(LoginRequirements),
    });

    const [isLoading, setIsLoading] = useState(false);

    const submit = async (formData) => {
        await performUserLogin(formData);
    };

    const navigate = useNavigate();

    const goToRegisterPage = () => {
        setTimeout(() => {
            navigate("/register");
        }, 1000);
    };

    const performUserLogin = async (formData) => {
        try {
            setIsLoading(true);
            const { data } = await api.post("/sessions", formData);
            setDataUser(data.user);
            localStorage.setItem("@KenzieHub:userToken", JSON.stringify(data.token));
            toast.success("Login efetuado!");
            setTimeout(() => {
                navigate("/dashboard");
            }, 1000);
        } catch (error) {
            if (
                error.response?.data.message ===
                "Incorrect email / password combination"
            ) {
                toast.error("Email e/ou senha incorretos!");
            }
        } finally {
            setIsLoading(false);
        }
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