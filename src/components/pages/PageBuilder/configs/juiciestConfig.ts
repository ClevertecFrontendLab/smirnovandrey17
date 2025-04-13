export const juiciestConfig = {
    pathname: '/juiciest',
    components: [
        {
            component: 'TitleMain',
            props: {
                title: 'Самое сочное',
            },
        },
        {
            component: 'Filters',
        },
    ],
} as const;
