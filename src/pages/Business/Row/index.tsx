import React from 'react';

type Props = {};

const Row = (props: Props) => {
    return (
        <div className="flex border-b-2 border-grey-300 py-3 text-black">
            <div className="flex-grow-[2] basis-0 flex items-center gap-4">
                <img
                    src="https://images.unsplash.com/photo-1671037794047-159f7db9d409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="business"
                    className="w-8 h-8 rounded-full object-cover"
                ></img>
                <div className="font-medium">IIG VietNam</div>
            </div>
            <div className="flex-1 px-5 py-2 bg-pink-100 rounded-lg text-center flex justify-center items-center">20:00 12/12/2022</div>
            <div className="flex-1 flex flex-row-reverse items-center gap-3">
                <button className="fa-light fa-trash-can btn btn-error rounded-2xl text-white w-10 h-10 aspect-square min-h-0"></button>
                <button className="fa-light fa-pen-to-square btn btn-warning rounded-2xl text-white w-10 h-10 aspect-square min-h-0"></button>
            </div>
        </div>
    );
};

export default Row;
