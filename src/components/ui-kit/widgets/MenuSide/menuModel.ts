import {
    AppleIcon,
    BabyFaceIcon,
    BakeryIcon,
    EggplantIcon,
    GrillIcon,
    LeavesIcon,
    MugIcon,
    NationalFoodIcon,
    PanIcon,
    PotIcon,
    SauceIcon,
    StocksIcon,
    TherapeuticNutritionIcon,
} from '~/components/ui-kit/Icons';

export const menuModel = [
    {
        label: 'Салаты',
        link: '/salads',
        icon: EggplantIcon,
        subMenu: [],
    },
    {
        label: 'Закуски',
        link: '/appetizers',
        icon: AppleIcon,
        subMenu: [],
    },
    {
        label: 'Первые блюда',
        link: '/soups',
        icon: PotIcon,
        subMenu: [],
    },
    {
        label: 'Вторые блюда',
        link: '/main-courses',
        icon: PanIcon,
        subMenu: [],
    },
    {
        label: 'Десерты, выпечка',
        link: '/desserts',
        icon: BakeryIcon,
        subMenu: [],
    },
    {
        label: 'Блюда на гриле',
        link: '/grill',
        icon: GrillIcon,
        subMenu: [],
    },
    {
        label: 'Веганская кухня',
        link: '/vegan-cuisine',
        icon: LeavesIcon,
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
        icon: BabyFaceIcon,
        subMenu: [],
    },
    {
        label: 'Лечебное питание',
        link: '/dietary',
        icon: TherapeuticNutritionIcon,
        subMenu: [],
    },
    {
        label: 'Национальные',
        link: '/national',
        icon: NationalFoodIcon,
        subMenu: [],
    },
    {
        label: 'Соусы',
        link: '/sauces',
        icon: SauceIcon,
        subMenu: [],
    },
    {
        label: 'Напитки',
        link: '/beverages',
        icon: MugIcon,
        subMenu: [],
    },
    {
        label: 'Заготовки',
        link: '/stocks',
        icon: StocksIcon,
        subMenu: [],
    },
] as const;
