/** @type {import('tailwindcss').Config} */

const { hairlineWidth } = require('nativewind/theme');
module.exports = {
    darkMode: 'class',
    content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './node_modules/@rnr/**/*.{ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                primary: 'var(--primary)',
                text: 'var(--text)',
                disabled: 'var(--disabled)',
                red: 'var(--red)'
            },
            fontSize: {
                m: [
                    '1rem',
                    {
                        lineHeight: '1.25rem',
                        fontWeight: '400'
                    }
                ]
            }
        }
    }
};
