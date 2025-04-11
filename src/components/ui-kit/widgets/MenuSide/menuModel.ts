export const menuModel = [
    {
        label: 'Салаты',
        link: '/salads',
        subMenu: [],
    },
    {
        label: 'Закуски',
        link: '/appetizers',
        subMenu: [],
    },
    {
        label: 'Первые блюда',
        link: '/soups',
        subMenu: [],
    },
    {
        label: 'Вторые блюда',
        link: '/main-courses',
        subMenu: [],
    },
    {
        label: 'Десерты, выпечка',
        link: '/desserts',
        subMenu: [],
    },
    {
        label: 'Блюда на гриле',
        link: '/grill',
        subMenu: [],
    },
    {
        label: 'Веганская кухня',
        link: '/vegan-cuisine',
        subMenu: [
            { label: 'Закуски', link: '/vegan-cuisine/appetizers' },
            { label: 'Первые блюда', link: '/vegan-cuisine/soups' },
            { label: 'Вторые блюда', link: '/vegan-cuisine/main-courses' },
            { label: 'Гарниры', link: '/vegan-cuisine/sides' },
            { label: 'Десерты', link: '/vegan-cuisine/desserts' },
            { label: 'Выпечка', link: '/vegan-cuisine/bakery' },
            { label: 'Сыроедческие блюда', link: '/vegan-cuisine/raw-food' },
            { label: 'Напитки', link: '/vegan-cuisine/beverages' },
        ],
    },
    {
        label: 'Детские блюда',
        link: '/kids-menu',
        subMenu: [],
    },
    {
        label: 'Лечебное питание',
        link: '/dietary',
        subMenu: [],
    },
    {
        label: 'Национальные',
        link: '/national',
        subMenu: [],
    },
    {
        label: 'Соусы',
        link: '/sauces',
        subMenu: [],
    },
    {
        label: 'Напитки',
        link: '/beverages',
        subMenu: [],
    },
] as const;
