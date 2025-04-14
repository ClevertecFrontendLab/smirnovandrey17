import cardSec1 from './assets/cardsSecondary/1.jpg';
import cardSec2 from './assets/cardsSecondary/2.jpg';
import cardSec3 from './assets/cardsSecondary/3.jpg';
import cardSec4 from './assets/cardsSecondary/4.jpg';

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
    ],
} as const;
