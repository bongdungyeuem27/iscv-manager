import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

type Props = {
    name: string;
    icon: string;
    content: string;
    active: boolean;
    route: string;
};

const CollapseItem = (props: Props) => {
    const { name, icon, content, route } = props;
    const { pathname } = useLocation();

    const active = pathname.includes(route);
    return (
        <Link to={route} className={'flex w-full gap-4 items-center cursor-pointer ' + (active ? ' text-gradient bg-pink-gradient ' : 'text-grey-400')}>
            <i className={'fa-regular text-xl flex-grow-[0.2] basis-1 ' + icon}></i>
            <h3 className="font-semibold flex-1">{content}</h3>
        </Link>
    );
};

export default CollapseItem;
