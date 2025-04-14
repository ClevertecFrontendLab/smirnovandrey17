import { Flex, Stack, Text } from '@chakra-ui/react';

import { BadgeSimple } from '~/components/ui-kit/BadgeSimple';
import { ReactionWidget } from '~/components/ui-kit/widgets/ReactionWidget';

// @ts-expect-error TODO добавить типы
export const CardThird = ({ title, desc, badgeTitle, badgeIconName, bookmark, share, like }) => (
    <Flex
        flexDir='column'
        gap='24px'
        justifyContent='space-between'
        p={{ base: '12px', lg: '16px', xl: '24px' }}
        pb={{ xl: '20px' }}
        border='1px solid'
        borderColor='blackAlpha.200'
        borderRadius='8px'
        h='100%'
    >
        <Stack spacing={{ base: '8px' }}>
            <Text variant='header4' noOfLines={1}>
                {title}
            </Text>
            <Text variant='third' noOfLines={3}>
                {desc}
            </Text>
        </Stack>
        <Flex justifyContent='space-between'>
            {/* @ts-expect-error TODO добавить типы */}
            <BadgeSimple iconName={badgeIconName}>{badgeTitle}</BadgeSimple>
            <ReactionWidget bookmark={bookmark} share={share} like={like} size='xs' />
        </Flex>
    </Flex>
);
