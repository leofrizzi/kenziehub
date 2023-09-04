import React, { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const { dataUser } = useContext(UserContext);

    const [createModalStatus, setIsCreateModalOpen] = useState(false);
    const [editModalStatus, setEditModalStatus] = useState(false);
    const [techList, setTechList] = useState(dataUser?.techs || []);
    const [editingTech, setEditingTech] = useState(null);

    const getToken = () => {
        return JSON.parse(localStorage.getItem("@KenzieHub:userToken"));
    };

    const createTech = async (formData) => {
        const token = getToken();
        try {
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setTechList([...techList, { ...data }]);
            toast.success("Tech adicionada com sucesso!");
        } catch (error) {
            toast.error(error.message);
        }
    };

    const deleteTech = async (techId) => {
        const token = getToken();
        try {
            await api.delete(`users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const newTechList = techList.filter((tech) => tech.id !== techId);
            setTechList(newTechList);
            toast.success("Tech deletada com sucesso!");
        } catch (error) {
            toast.error(error.message);
        }
    };

    const editTech = async (formData) => {
        const token = getToken();
        try {
            const { data } = await api.put(
                `/users/techs/${editingTech.id}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const newTechList = techList.map((tech) =>
                tech.id === editingTech.id ? { ...data } : tech
            );
            setTechList(newTechList);
            toast.success("A Tech foi editada com sucesso!");
        } catch (error) {
            toast.error(error.message);
        }
    };

    const closeModal = (typeOfModal) => {
        if (typeOfModal === "create") {
            setIsCreateModalOpen(false);
        } else if (typeOfModal === "edit") {
            setEditModalStatus(false);
        }
    };

    const openModal = (typeOfModal) => {
        if (typeOfModal === "create") {
            setIsCreateModalOpen(true);
        } else if (typeOfModal === "edit") {
            setEditModalStatus(true);
        }
    };

    return (
        <TechContext.Provider
            value={{
                editTech,
                editingTech,
                createModalStatus,
                editModalStatus,
                closeModal,
                openModal,
                createTech,
                techList,
                deleteTech,
                setEditingTech,
            }}
        >
            {children}
        </TechContext.Provider>
    );
};