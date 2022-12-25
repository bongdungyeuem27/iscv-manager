import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '~components/Header';
import { Nav } from '~components/index';

type Props = {};

const Dashboard = (props: Props) => {
    return (
        <div className="bg-white w-100 flex h-[100vh] overflow-hidden relative">
            <Nav></Nav>
            <div className="mx-0 flex-1 flex flex-col overflow-hidden">
                <Header></Header>
                <div className="mx-2 my-2 flex flex-col flex-1 m-0 overflow-hidden ">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
