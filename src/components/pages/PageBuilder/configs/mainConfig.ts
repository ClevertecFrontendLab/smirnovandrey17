export const mainConfig = {
    pathname: '/',
    components: [
        {
            component: 'TitleMain',
            props: {
                title: 'Приятного аппетита!',
            },
        },
        {
            component: 'Filters',
        },
    ],
} as const;
