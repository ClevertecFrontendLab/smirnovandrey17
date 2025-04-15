import { Flex, Text } from '@chakra-ui/react';

import { iconsMap } from '~/app/consts/iconsMap';

// @ts-expect-error TODO добавить типы
export const BadgeSimple = ({ children, variant, iconName }) => {
    // @ts-expect-error TODO добавить типы
    const Icon = iconsMap[iconName];

    return (
        <Flex
            justifyContent='center'
            alignItems='center'
            gap='2px'
            py='2px'
            px='4px'
            bg={variant === 'highlight' ? 'bg.highlight.fourth' : 'bg.primary'}
            borderRadius='4px'
        >
            {Icon && <Icon boxSize='16px' />}
            <Text variant='secondary' color='black' noOfLines={1}>
                {children}
            </Text>
        </Flex>
    );
};
