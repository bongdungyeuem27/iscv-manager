/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}' // Note the addition of the `app` directory.
    ],
    theme: {
        extend: {
            fontFamily: {
                DEFAULT: ['Roboto', 'sans-serif']
            },
            colors: ({ colors }) => ({
                black: {
                    DEFAULT: '#474543'
                },
                orange: {
                    DEFAULT: '#FE5C3A',
                    secondary: '#FDF4F1',
                    100: '#F7F2EF'
                },
                green: {
                    DEFAULT: '#37CDBE',
                    secondary: '#E9F5F3'
                },
                red: {
                    DEFAULT: '#DB3528'
                },
                yellow: '#FB9639',
                pink: {
                    DEFAULT: '#F55A80',
                    secondary: '#F0B5B6',
                    50: '#F0E8EF',
                    100: '#F6EAFC',
                    200: '#F0DDEE'
                },
                blue: '#5083CC',
                grey: {
                    ...colors.grey,
                    300: '#F2ECEA',
                    400: '#808080',
                    500: '#DCD3CD',
                    600: '#969190'
                },
                transparent: {
                    DEFAULT: 'rgba(0, 0, 0, 0)'
                }
            }),
            backgroundImage: {
                'pink-gradient': 'linear-gradient(90deg, rgba(233,121,193,1) 0%, rgba(206,122,237,1) 100%)',
                'red-gradient-secondary': 'linear-gradient(45deg, rgba(247,212,219,1) 0%, rgba(239,243,244,1) 100%)',
                'pink-gradient-transparent': 'linear-gradient(13deg, rgba(229,230,238,1) 0%, rgba(229,230,238,0.33099177170868344) 100%);'
            }
        }
    },
    daisyui: {
        base: false,
        themes: [
            {
                mytheme: {
                    primary: '#570DF8',
                    secondary: '#F55A80',
                    accent: '#37CDBE',
                    neutral: '#3D4451',
                    info: '#3ABFF8',
                    success: '#36D399',
                    warning: '#FBBD23',
                    error: '#F87272'
                }
            }
        ]
    },
    plugins: [
        require('daisyui'),
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.scrollbar-hide': {
                    /* IE and Edge */
                    '-ms-overflow-style': 'none',

                    /* Firefox */
                    'scrollbar-width': 'none',

                    /* Safari and Chrome */
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    }
                },
                '.text-gradient': {
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent'
                }
            });
        })
    ]
};
