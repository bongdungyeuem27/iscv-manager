import React from 'react';

type Props = {};

const Header = (props: Props) => {
    return (
        <div className="ml-0 mr-0 flex justify-between">
            <div className="flex-1"></div>
            <ul className="flex items-center mx-8 my-3 gap-2">
                <li className="rounded-full fa-solid fa-envelope cursor-pointer btn btn-accent min-h-0 w-9 h-9 flex items-center justify-center text-white shadow-xl"></li>
                <li className="rounded-full fa-solid fa-bells cursor-pointer min-h-0 btn btn-secondary w-9 h-9 flex items-center justify-center text-white shadow-xl"></li>
                <li className="rounded-full btn btn-circle border-orange-200 min-h-0 cursor-pointer w-10 h-10 flex items-center justify-center text-white shadow-xl">
                    <img
                        src="https://images.unsplash.com/photo-1671037794047-159f7db9d409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        className="rounded-full w-full h-full object-cover"
                        alt="logo"
                    ></img>
                </li>
            </ul>
        </div>
    );
};

export default Header;
