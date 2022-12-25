import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~redux/store';
import Login from '~pages/Login';
import { login } from '~redux/reducers/login';
import { useNavigate } from 'react-router-dom';
import { appWindow, LogicalSize } from '@tauri-apps/api/window';

type Props = {};

const Main = (props: Props) => {
    const account = useSelector((state: RootState) => state.login.account);
    const provider = useSelector((state: RootState) => state.login.provider);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            if (!account) {
                const accounts = await provider.enable().catch((error) => {
                    console.error(error);
                });
                if (!accounts || !accounts[0]) return;
                const account = accounts[0];
                if (account) dispatch(login(account));
            }
        })();
    }, []);
    useEffect(() => {
        if (account) {
            navigate('/home');
            appWindow.setSize(new LogicalSize(1366, 768));
        } else {
            navigate('/');
            appWindow.setSize(new LogicalSize(384, 648));
        }
    }, [account]);
    return <>{account ? <Outlet></Outlet> : <Login></Login>}</>;
};

export default Main;
