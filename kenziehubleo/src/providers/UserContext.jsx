import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [dataUser, setDataUser] = useState(null);
    const [editingDataUser, setEditingDataUser] = useState(null);
    const [redirectLoading, setRedirectLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const pathname = window.location.pathname;

    const getUser = async (token) => {
        try {
            setRedirectLoading(true);
            const { data } = await api.get("/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setDataUser(data);
            navigate(pathname);
        } catch (error) {
            toast.warn(error.message);
            localStorage.removeItem("@KenzieHub:userToken");
        } finally {
            setRedirectLoading(false);
        }
    };

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@KenzieHub:userToken"));
        if (token) {
            getUser(token);
        }
    }, []);

    const performUserLogin = async (formData) => {
        try {
            setIsLoading(true);
            const { data } = await api.post("/sessions", formData);
            setDataUser(data.user);
            console.log(data)
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

    const registerUser = async (formData) => {
        try {
            setIsLoading(true);
            await api.post("/users", formData);
            toast.success("Cadastro Efetuado! Voltando para o login...");
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (error) {
            if (error.response?.data.message === "Email already exists") {
                toast.error("Email já cadastrado!");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setDataUser(null);
        toast.success("Voltando para página de login.");
        localStorage.removeItem("@KenzieHub:userToken");

        setTimeout(() => {
            navigate("/");
        }, 1000);
    };

    const updateUser = async (formData) => {
        const token = JSON.parse(localStorage.getItem("@KenzieHub:userToken"));

        try {
            await api.put("/profile", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Dados Atualizados!");
        } catch (error) {
            toast.error("Confira sua senha antiga!");
        }
    };

    const redirectToUsers = () => {
        toast.success("Redirecionando para Users!");
        setTimeout(() => {
            navigate("/users");
        }, 1000);
    };

    return (
        <UserContext.Provider
            value={{
                performUserLogin,
                registerUser,
                logout,
                dataUser,
                setDataUser,
                redirectLoading,
                getUser,
                editingDataUser,
                setEditingDataUser,
                updateUser,
                redirectToUsers,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};