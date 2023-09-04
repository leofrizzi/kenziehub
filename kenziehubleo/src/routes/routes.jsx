import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RegisterPage } from "../pages/RegisterPage";
import { Dashboard } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { Navigate } from 'react-router-dom';
import { TechProvider } from '../providers/TechContext';

const AppRoutes = () => {
    const [dataUser, setDataUser] = useState(null);

    const logout = () => {
        setDataUser(null);
        toast.success('Retornando a página de login');
        localStorage.removeItem('@KenzieHub:userToken');
    };

    return (
        <Routes>
            <Route path="/" element={<LoginPage setDataUser={setDataUser} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
                path="/dashboard"
                element={<TechProvider><Dashboard dataUser={dataUser} logout={logout} />
                </TechProvider>}
            />
        </Routes>
    );
};

export default AppRoutes;
