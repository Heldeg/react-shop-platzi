import React from "react";
import '@styles/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout.jsx';
import Login from "@containers/Login.jsx";
import RecoveryPassword from "@containers/RecoveryPassword.jsx";
import Home from "@pages/Home.jsx";
import NotFound from "@pages/NotFound.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/recovery-password" element={<RecoveryPassword />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;