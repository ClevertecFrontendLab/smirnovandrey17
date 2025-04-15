import cardSec1 from './assets/cardsSecondary/1.jpg';
import cardSec2 from './assets/cardsSecondary/2.jpg';
import cardSec3 from './assets/cardsSecondary/3.jpg';
import cardSec4 from './assets/cardsSecondary/4.jpg';

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
        {
            component: 'NavSubHorizontal',
            props: {
                mt: '32px',
                mb: '24px',
            },
        },
        {
            component: 'CardSecondarySwarm',
            props: {
                mt: '16px',
                cards: [
                    {
                        image: cardSec1,
                        badgeLabel: 'Вторые блюда',
                        badgeIconName: 'PanIcon',
                        title: 'Кнели со спагетти',
                        desc: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                        bookmark: 85,
                        like: 152,
                    },
                    {
                        image: cardSec2,
                        badgeLabel: 'Вторые блюда',
                        badgeIconName: 'PanIcon',
                        title: 'Пряная ветчина по итальянски',
                        desc: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                        bookmark: 159,
                        like: 257,
                    },
                    {
                        image: cardSec3,
                        badgeLabel: 'Вторые блюда',
                        badgeIconName: 'PanIcon',
                        title: 'Лапша с курицей и шафраном',
                        desc: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                        bookmark: 258,
                        like: 342,
                    },
                    {
                        image: cardSec4,
                        badgeLabel: 'Национальные',
                        badgeIconName: 'NationalFoodIcon',
                        title: 'Том-ям с капустой кимчи',
                        desc: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                        bookmark: 124,
                        like: 324,
                    },
                    {
                        image: cardSec1,
                        badgeLabel: 'Вторые блюда',
                        badgeIconName: 'PanIcon',
                        title: 'Кнели со спагетти',
                        desc: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                        bookmark: 85,
                        like: 152,
                    },
                    {
                        image: cardSec2,
                        badgeLabel: 'Вторые блюда',
                        badgeIconName: 'PanIcon',
                        title: 'Пряная ветчина по итальянски',
                        desc: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                        bookmark: 159,
                        like: 257,
                    },
                    {
                        image: cardSec3,
                        badgeLabel: 'Вторые блюда',
                        badgeIconName: 'PanIcon',
                        title: 'Лапша с курицей и шафраном',
                        desc: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                        bookmark: 258,
                        like: 342,
                    },
                    {
                        image: cardSec4,
                        badgeLabel: 'Национальные',
                        badgeIconName: 'NationalFoodIcon',
                        title: 'Том-ям с капустой кимчи',
                        desc: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                        bookmark: 124,
                        like: 324,
                    },
                ],
            },
        },
        {
            component: 'ButtonMore',
            props: {
                children: 'Вся подборка',
                linkPath: '/juiciest',
                variant: 'highlight',
                size: 'md',
                mt: '12px',
                testAttr: 'juiciest-link-mobile',
                display: { base: 'flex', lg: 'none' },
            },
        },
        {
            component: 'Divider',
            props: {
                mt: { base: '32px', lg: '40px' },
            },
        },
        {
            component: 'TitleDesc',
            props: {
                title: 'Веганская кухня',
                desc: 'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
                mt: { base: '8px', lg: '24px' },
            },
        },
        {
            component: 'CardThirdSwarm',
            props: {
                mt: { base: '16px', lg: '24px' },
                pb: '26px',
                cardsThird: [
                    {
                        title: 'Хачапури по-аджарски',
                        desc: 'Давно ходил вокруг рецепта хачапури по-аджарски, не решался. Сегодня  попробовал - я в полном восторге! Тесто замечательное, интересный  процесс приготовления, а вкус - не передать, просто сказка!',
                        badgeTitle: 'Вторые блюда',
                        badgeIconName: 'PanIcon',
                        bookmark: 1,
                        like: 1,
                    },
                    {
                        title: 'Капустные котлеты',
                        desc: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
                        badgeTitle: 'Вторые блюда',
                        badgeIconName: 'PanIcon',
                        bookmark: 2,
                        like: 1,
                    },
                ],
                textBtnRows: [
                    {
                        text: 'Стейк для вегетарианцев',
                        buttonText: 'Готовить',
                        iconName: 'PanIcon',
                    },
                    {
                        text: 'Котлеты из гречки и фасоли',
                        buttonText: 'Готовить',
                        iconName: 'PanIcon',
                    },
                    {
                        text: 'Сырный суп с лапшой и брокколи',
                        buttonText: 'Готовить',
                        iconName: 'PotIcon',
                    },
                ],
            },
        },
    ],
} as const;
