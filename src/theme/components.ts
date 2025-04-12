const highlight = {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '133.333%',
    color: 'highlight',
};

const controlHighlight = {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '133.333%',
    color: 'black',
};

const controlSecondary = {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '150%',
    color: 'black',
};

export const components = {
    Text: {
        variants: {
            control: {
                ...controlHighlight,
                fontWeight: 400,
                color: 'blackAlpha.700',
            },
            'control.highlight': controlHighlight,
            controlSecondary,
            'controlSecondary.highlight': {
                ...controlSecondary,
                fontWeight: 700,
            },
            highlight,
            'highlight.lg': {
                ...highlight,
                fontSize: '16px',
                lineHeight: '150%',
            },
            header: {
                fontFamily: '"Inter", sans-serif',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '156%',
                color: 'black',
            },
            secondary: {
                fontFamily: '"Inter", sans-serif',
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
};
