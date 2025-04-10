import { Flex } from '@chakra-ui/react';

import { ButtonMenu } from '~/components/ui-kit/ButtonMenu';
import { Logo } from '~/components/ui-kit/Logo';
import { Reaction } from '~/components/ui-kit/Reaction';

export const Header = () => (
    <Flex height='100%' alignItems='center' justifyContent='space-between'>
        <Logo />
        <Flex alignItems='center' display={{ base: 'flex', lg: 'none' }}>
            <Flex mx='16px'>
                <Reaction type='bookmark'>185</Reaction>
                <Reaction type='share'>589</Reaction>
                <Reaction type='like'>587</Reaction>
            </Flex>
            <ButtonMenu />
        </Flex>
    </Flex>
);
