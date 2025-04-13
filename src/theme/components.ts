import { type ComponentStyleConfig } from '@chakra-ui/react';

const font1 = '"Inter", sans-serif';

const highlight = {
    fontFamily: font1,
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '133.333%',
    color: 'highlight',
};

const controlHighlight = {
    fontFamily: font1,
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '133.333%',
    color: 'black',
};

const controlSecondary = {
    fontFamily: font1,
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '150%',
    color: 'black',
};

const controlThird = {
    fontFamily: font1,
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '133.333%',
    color: 'blackAlpha.700',
};

export const components = {
    Text: {
        variants: {
            control: {
                ...controlHighlight,
                fontWeight: 400,
                color: 'blackAlpha.700',
            },
            'control.bold': {
                ...highlight,
                color: 'black',
            },
            'control.highlight': controlHighlight,
            controlSecondary,
            'controlSecondary.highlight': {
                ...controlSecondary,
                fontWeight: 700,
            },
            'controlSecondary.thin': {
                ...controlSecondary,
                fontWeight: 400,
            },
            controlThird,
            'controlThird.light': {
                ...controlThird,
                fontWeight: 500,
                color: 'blackAlpha.400',
            },
            highlight,
            'highlight.lg': {
                ...highlight,
                fontSize: '16px',
                lineHeight: '150%',
            },
            header1: {
                fontFamily: font1,
                fontWeight: 700,
                fontSize: {
                    base: '24px',
                    lg: '48px',
                },
                textAlign: 'center',
                lineHeight: {
                    base: '133.333%',
                    lg: '100%',
                },
                color: 'black',
            },
            'header1.sub': {
                fontFamily: font1,
                fontWeight: 500,
                fontSize: { base: '14px', lg: '16px' },
                lineHeight: { base: '143%', lg: '150%' },
                textAlign: 'center',
                color: 'blackAlpha.600',
            },
            header2: {
                fontFamily: font1,
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '156%',
                color: 'black',
            },
            secondary: {
                fontFamily: font1,
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '143%',
                color: 'blackAlpha.700',
            },
        },
    },
    Avatar: {
        sizes: {
            sml: {
                container: {
                    width: '40px',
                    height: '40px',
                },
            },
        },
    },
    Breadcrumb: {
        baseStyle: {
            link: {
                fontFamily: font1,
                fontSize: '16px',
                lineHeight: '150%',
                fontWeight: 400,
                color: 'blackAlpha.700',
            },
        },
    },
    Input: {
        variants: {
            search: {
                field: {
                    fontSize: { base: '14px', md: '18px' },
                    height: { base: '32px', lg: '48px' },
                    padding: { base: '0px 32px 0px 12px', lg: '0px 48px 0px 16px' },
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'blackAlpha.600',
                    borderRadius: { base: '4px', lg: '6px' },
                    fontFamily: font1,
                    fontWeight: 400,
                    color: 'black',
                    _placeholder: {
                        fontFamily: font1,
                        fontWeight: 400,
                        fontSize: { base: '14px', lg: '18px' },
                        color: '#134b00',
                    },
                },
            },
        },
    },
    Button: {
        baseStyle: {
            fontWeight: 600,
            borderRadius: '6px',
            _focus: {
                boxShadow: 'none',
            },
        },
        sizes: {
            xs: {
                fontSize: '12px',
                lineHeight: '133.333%',
                px: '8px',
                py: '4px',
                // height: '24px',
            },
            sm: {
                fontSize: '14px',
                lineHeight: '143%',
                px: '12px',
                py: '6px',
            },
            md: {
                fontSize: '18px',
                lineHeight: '156%',
                px: '24px',
                py: '10px',
            },
        },
        variants: {
            solid: {
                bg: 'blackAlpha.800',
                color: 'white',
                // No hover or active states
                _hover: {},
                _active: {},
            },
            outline: {
                border: '1px solid',
                borderColor: 'blackAlpha.600',
                color: 'blackAlpha.800',
                _hover: {},
                _active: {},
            },
            ghost: {
                color: 'blackAlpha.800',
                _hover: {},
                _active: {},
            },
            link: {
                color: 'blackAlpha.800',
                _hover: {},
                _active: {},
            },
        },
        defaultProps: {
            variant: 'solid',
        },
    } as ComponentStyleConfig,
};
