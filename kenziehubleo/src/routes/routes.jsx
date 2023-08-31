import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RegisterPage } from "../pages/RegisterPage";
import { Dashboard } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";

const AppRoutes = () => {
    const [dataUser, setDataUser] = useState(null);

    const logout = () => {
        setDataUser(null);
        toast.success('Retornando a página de login');
        localStorage.removeItem('@KenzieHub:userToken');
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage setDataUser={setDataUser} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                    path="/dashboard"
                    element={dataUser ? <Dashboard dataUser={dataUser} logout={logout} /> : <Navigate to="/" />}
                />
            </Routes>
            <ToastContainer />
        </Router>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
);

export default AppRoutes;
