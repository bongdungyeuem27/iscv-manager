// declare module '*.module.scss';
// declare module '*.module.css';
/// <reference types="react-scripts" />

// declare module '*.svg' {
//     import React = require('react');
//     export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
//     const src: string;
//     const content: any;
//     const viewBox: string;
//     const width: string;
//     const height: string;
//     const className: string;
//     export default content;
//     export default src;
// }

import { ethers } from 'ethers';
declare global {
    interface Window {
        ethereum: ethers.providers.ExternalProvider;
    }
}
