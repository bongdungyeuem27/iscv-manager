import React from 'react';
import Row from './Row';
import Info from './Info';

type Props = {};

const Business = (props: Props) => {
    return (
        <div className="flex mx-0 h-full gap-8 flex-1 overflow-hidden">
            <div className="flex-1 py-2 px-4  flex overflow-y-auto flex-col">
                {[...Array(4).keys()].map((key) => (
                    <Row key={key}></Row>
                ))}
            </div>

            <div className="overflow-y-auto h-full m-0">
                <div className=" lg: lg:flex min-h-full m-0 w-[24rem] my-0 bg-red-gradient-secondary rounded-xl p-5 relative shadow-md flex flex-col">
                    <button className="btn btn-accent min-h-0 absolute ml-auto right-3 top-3  rounded-full mt-0 w-12 h-12  ">
                        <i className="fa-solid fa-check text-xl text-white"></i>
                    </button>
                    <button className="btn btn-error min-h-0 absolute ml-auto left-3 top-3  rounded-full mt-0 w-12 h-12  ">
                        <i className="fa-solid fa-xmark text-xl text-white"></i>
                    </button>
                    <div className="flex flex-col mt-10 mx-auto">
                        <img
                            src="https://images.unsplash.com/photo-1671037794047-159f7db9d409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="business"
                            className="w-48 h-48 rounded-full object-cover shadow-xl"
                        ></img>
                    </div>
                    <div className="flex-1 bg-white mt-8 rounded-xl p-5 flex flex-col gap-3">
                        <div className="text-xl font-semibold">IIG Vietnam</div>
                        <Info title="Address" icon="fa-location-pin" content="123 Ly Thuong Kiet, Phuong 15, Q Tan Binh, Ho Chi Minh"></Info>
                        <Info title="Blockchain address" icon="fa-shield" content="0x000000001230120303012300"></Info>
                        <Info title="Date request" icon="fa-calendar " content="22:00 12/12/22"></Info>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;
