import { Flex } from '@chakra-ui/react';

import leftIcon from './left-icon.svg';

export const ButtonMenu = () => (
    <Flex
        justifyContent='center'
        alignItems='center'
        p='12px'
        width='48px'
        height='48px'
        cursor='pointer'
    >
        <img src={leftIcon} alt='main menu button' />
    </Flex>
);
