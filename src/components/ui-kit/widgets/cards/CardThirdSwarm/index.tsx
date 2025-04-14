import { Grid, GridItem, Stack } from '@chakra-ui/react';

import { CardThird } from '~/components/ui-kit/widgets/cards/CardThird';
import { TextButtonRow } from '~/components/ui-kit/widgets/TextButtonRow';

type CardType = {
    id: string;
    title: string;
    desc: string;
    badgeTitle: string;
    badgeIconName: string;
    bookmark: boolean;
    share: boolean;
    like: boolean;
};

type CardThirdSwarmProps = {
    cardsThird: CardType[];
};
// @ts-expect-error TODO добавить типы
export const CardThirdSwarm = ({ cardsThird, textBtnRows, ...rest }: CardThirdSwarmProps) => (
    <Grid
        templateColumns={{
            base: '1fr',
            md: 'repeat(3, 1fr)',
            xl: '1fr 1fr 2fr',
        }}
        gap={{ base: '12px', lg: '16px', xl: '24px' }}
        alignItems='stretch'
        {...rest}
    >
        {cardsThird.map((cardThird, index) => (
            <GridItem key={index}>
                <CardThird {...cardThird} />
            </GridItem>
        ))}
        <GridItem>
            <Stack spacing={{ base: '12px', lg: '16px', xl: '24px' }}>
                {/* @ts-expect-error TODO добавить типы */}
                {textBtnRows.map((textBtn, index) => (
                    <TextButtonRow
                        key={index}
                        text={textBtn.text}
                        buttonText={textBtn.buttonText}
                        iconName={textBtn.iconName}
                    />
                ))}
            </Stack>
        </GridItem>
    </Grid>
);
