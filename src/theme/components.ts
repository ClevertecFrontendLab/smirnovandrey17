const highlight = {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '133.333%',
    color: 'highlight',
};

export const components = {
    Text: {
        variants: {
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
};
