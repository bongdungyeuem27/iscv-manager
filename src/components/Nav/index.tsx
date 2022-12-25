import React, { useEffect } from 'react';
import { ReactComponent as Menu } from './menu.svg';
import CollapseItem from './CollapseItem';
import logo from '~images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~redux/store';
import { logout } from '~redux/reducers/login';

type Props = {};

const Nav = (props: Props) => {
    const provider = useSelector((state: RootState) => state.login.provider);
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col px-6  border-r-2 ">
            <div className="w-32 py-3">
                <img className=" w-full object-contain" src={logo}></img>
            </div>
            <div className="flex flex-col flex-1">
                <div className="font-bold text-sm">Menu</div>
                <ul className="flex-1 flex flex-col gap-4 my-3">
                    {list.map((value, index) => {
                        return <CollapseItem key={index} name={value.name} icon={value.icon} content={value.content} active={index == 1} route={value.route}></CollapseItem>;
                    })}
                </ul>
            </div>
            <div className="my-4 mx-0">
                <button
                    className="w-full btn btn-error shadow-xl text-white"
                    onClick={async () => {
                        await provider.disconnect();
                        dispatch(logout());
                    }}
                >
                    Disconnect
                </button>
            </div>
        </div>
    );
};

const list = [
    { name: 'home', icon: 'fa-home-blank', content: 'Home', route: '/home' },
    { name: 'transaction', icon: 'fa-grid-horizontal', content: 'Transaction', route: '/transaction' },
    { name: 'business', icon: 'fa-briefcase-blank', content: 'Business', route: '/business' }
];

export default Nav;
