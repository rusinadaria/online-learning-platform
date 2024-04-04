import React, {FC, useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

const IsLogged: FC = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate("/profile");
    }, []);

    return null;
}

export default IsLogged;