import { SimpleGrid } from '@chakra-ui/react';

import { CardSecondary } from '~/components/ui-kit/widgets/cards/CardSecondary';

// @ts-expect-error TODO добавить типы
export const CardSecondarySwarm = ({ cards }) => (
    <SimpleGrid
        spacing={{ base: '12px', md: '16px', xl: '24px' }}
        columns={{ base: 1, md: 2, lg: 1, xl: 2 }}
    >
        {
            // @ts-expect-error TODO добавить типы
            cards.map((card, index) => (
                <CardSecondary key={index} {...card} />
            ))
        }
    </SimpleGrid>
);
