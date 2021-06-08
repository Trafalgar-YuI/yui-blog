module.exports = {
    // mode: 'jit',
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    important: true,
    theme: {
        extend: {
            zIndex: {
                '-1': '-1'
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700'),
                        a: {
                            textDecoration: 'none',
                            color: theme('colors.blue.500'),
                            '&:hover': {
                                color: theme('colors.blue.600')
                            },
                            code: {color: theme('colors.blue.400')}
                        },
                        h1: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.900')
                        },
                        h2: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.900')
                        },
                        h3: {
                            fontWeight: '600',
                            color: theme('colors.gray.900')
                        },
                        'h4,h5,h6': {
                            color: theme('colors.gray.900')
                        },
                        figure: {
                            margin: '0'
                        },
                        pre: {
                            padding: '0',
                            margin: '0',
                            backgroundColor: theme('colors.transparent')
                        },
                        hr: {borderColor: theme('colors.gray.200')},
                        'ol li:before': {
                            fontWeight: '600',
                            color: theme('colors.gray.500')
                        },
                        'ul li:before': {
                            backgroundColor: theme('colors.gray.500')
                        },
                        strong: {color: theme('colors.gray.600')},
                        blockquote: {
                            color: theme('colors.gray.900'),
                            borderLeftColor: theme('colors.gray.200')
                        }
                    }
                },
                dark: {
                    css: {
                        color: theme('colors.gray.300'),
                        a: {
                            textDecoration: 'none',
                            color: theme('colors.blue.500'),
                            '&:hover': {
                                color: theme('colors.blue.400')
                            },
                            code: {color: theme('colors.blue.400')}
                        },
                        h1: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.100')
                        },
                        h2: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.100')
                        },
                        h3: {
                            fontWeight: '600',
                            color: theme('colors.gray.100')
                        },
                        'h4,h5,h6': {
                            color: theme('colors.gray.100')
                        },
                        figure: {
                            margin: '0'
                        },
                        pre: {
                            padding: '0',
                            margin: '0',
                            backgroundColor: theme('colors.transparent')
                        },
                        hr: {borderColor: theme('colors.gray.700')},
                        'ol li:before': {
                            fontWeight: '600',
                            color: theme('colors.gray.400')
                        },
                        'ul li:before': {
                            backgroundColor: theme('colors.gray.400')
                        },
                        strong: {color: theme('colors.gray.100')},
                        thead: {
                            color: theme('colors.gray.100')
                        },
                        tbody: {
                            tr: {
                                borderBottomColor: theme('colors.gray.700')
                            }
                        },
                        blockquote: {
                            color: theme('colors.gray.100'),
                            borderLeftColor: theme('colors.gray.700')
                        }
                    }
                }
            })
        },
        container: {
            center: true
        }
    },
    variants: {
        extend: {},
        typography: ['dark']
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
