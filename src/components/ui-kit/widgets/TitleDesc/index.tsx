import { Grid, GridItem, GridProps, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type TitleDescProps = GridProps & {
    title: string;
    desc: string | ReactNode;
};

export const TitleDesc = ({ title, desc, ...rest }: TitleDescProps) => (
    <Grid
        templateColumns={{ base: '1fr', lg: '1fr 2fr', xl: '1fr 1fr' }}
        gap={{ base: '12px', lg: '18px' }}
        {...rest}
    >
        <GridItem>
            <Text variant='header2'>{title}</Text>
        </GridItem>
        <GridItem>
            <Text variant='fifth' color='blackAlpha.700'>
                {desc}
            </Text>
        </GridItem>
    </Grid>
);
