import cardSec1 from './assets/cardsSecondary/1.jpg';
import cardSec2 from './assets/cardsSecondary/2.jpg';
import cardSec3 from './assets/cardsSecondary/3.jpg';
import cardSec4 from './assets/cardsSecondary/4.jpg';
import car1 from './assets/carousel/1.jpg';
import car2 from './assets/carousel/2.jpg';
import car3 from './assets/carousel/3.jpg';
import car4 from './assets/carousel/4.jpg';

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
        {
            component: 'Header2',
            props: {
                children: 'Новые рецепты',
                mt: { base: '32px', lg: '56px' },
                mb: { base: '12px', lg: '24px' },
            },
        },
        {
            component: 'CarouselCard',
            props: {
                slides: [
                    {
                        image: car1,
                        badgeLabel: 'Первые блюда',
                        badgeVariant: 'highlight',
                        badgeIconName: 'PotIcon',
                        title: 'Солянка с грибами',
                        desc: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                        bookmark: 1,
                        //share,
                        //like
                    },
                    {
                        image: car2,
                        badgeLabel: 'Веганские блюда',
                        badgeVariant: 'highlight',
                        badgeIconName: 'LeavesIcon',
                        title: 'Капустные котлеты',
                        desc: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
                        bookmark: 2,
                        like: 1,
                    },
                    {
                        image: car3,
                        badgeLabel: 'Десерты, выпечка',
                        badgeVariant: 'highlight',
                        badgeIconName: 'BakeryIcon',
                        title: 'Оладьи на кефире "Пышные"',
                        desc: 'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
                        like: 1,
                    },
                    {
                        image: car4,
                        badgeLabel: 'Салаты',
                        badgeVariant: 'highlight',
                        badgeIconName: 'EggplantIcon',
                        title: 'Салат "Здоровье"',
                        desc: 'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
                    },
                ],
            },
        },
        {
            component: 'Header2',
            props: {
                children: 'Самое сочное',
                mt: { base: '32px', lg: '40px' },
                mb: { base: '12px', lg: '24px' },
            },
        },
        {
            component: 'CardSecondarySwarm',
            props: {
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
                ],
            },
        },
    ],
} as const;
