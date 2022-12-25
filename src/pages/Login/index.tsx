import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '~images/logo.png';
import { login } from '~redux/reducers/login';
import { RootState } from '~redux/store';

type Props = {};

const Login = (props: Props) => {
    const [loginOrRegister, setLoginOrRegister] = useState(false);
    const provider = useSelector((state: RootState) => state.login.provider);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className="w-screen h-screen overflow-hidden bg-pink-graient-transparent flex flex-col items-center">
            <div className=" w-full my-8">
                <div className="w-full text-center">
                    <img src={logo} alt="logo" className="w-40 m-auto"></img>
                </div>
                <div className=" text-center font-bold text-2xl">Hello</div>
                <div className="text-center text-md mt-2">Welcome to ISCV</div>
            </div>
            <div className="flex-1 flex flex-col items-center">
                <div className="flex flex-col w-full items-center gap-3 flex-1">
                    {/* {loginOrRegister && <input type="text" placeholder="Enter your private key" className="input  w-80 rounded-lg" />}
                    <input type="text" placeholder="Enter your password" className="input  w-80 rounded-lg" /> */}
                </div>

                <Button
                    onClick={async () => {
                        const accounts = await provider.enable().catch((error) => {
                            console.error(error);
                        });
                        if (!accounts || !accounts[0]) return;
                        const account = accounts[0];
                        if (account) dispatch(login(account));
                    }}
                >
                    Connect to ISCV Wallet
                </Button>

                {/* {loginOrRegister && <Button onClick={() => {}}>Register to ISCV Wallet</Button>}
                <div className="bg-pink-gradient-transparent flex justify-between mb-7 w-[80%]  rounded-xl">
                    <LoginOrRegister active={!loginOrRegister} onClick={() => setLoginOrRegister(false)}>
                        Login
                    </LoginOrRegister>
                    <LoginOrRegister active={loginOrRegister} onClick={() => setLoginOrRegister(true)}>
                        Register
                    </LoginOrRegister>
                </div> */}
            </div>
        </div>
    );
};

const LoginOrRegister = ({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) => {
    return (
        <div onClick={onClick} className={'flex-1 text-center px-4 py-3 font-semibold rounded-xl cursor-pointer ' + (active && 'bg-white')}>
            {children}
        </div>
    );
};

const Button = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
    return (
        <button onClick={onClick} className="btn btn-info capitalize mb-10 px-7  text-white shadow-lg">
            {children}
        </button>
    );
};

export default Login;
