export const veganCuisineConfig = {
    pathname: '/vegan-cuisine',
    components: [
        {
            component: 'TitleMain',
            props: {
                title: 'Веганская кухня',
                desc: 'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
            },
        },
        {
            component: 'Filters',
        },
    ],
} as const;
