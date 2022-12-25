import React from 'react';

type Props = {
    title: string;
    icon: string;
    content: string;
};

const Info = (props: Props) => {
    const { title, icon, content } = props;
    return (
        <div className="flex flex-col">
            <div className="font-medium flex items-center ">
                <i className={'fa-regular mr-3 flex-grow-[0.07] basis-0 text-black ' + icon}></i>
                {title}
            </div>
            <div className="font-light">{content}</div>
        </div>
    );
};

export default Info;
