import { Box, Flex, Hide, Show } from '@chakra-ui/react';

import { ButtonMenu } from '~/components/ui-kit/ButtonMenu';
import { Logo } from '~/components/ui-kit/Logo';
import { Reaction } from '~/components/ui-kit/Reaction';
import { UserProfileCtr } from '~/components/ui-kit/UserProfile/UserProfileCtr';

export const Header = () => (
    <Flex height='100%' alignItems='center' justifyContent='space-between'>
        <Logo />
        <Hide above='lg'>
            <Flex alignItems='center'>
                <Flex mx='16px'>
                    <Reaction type='bookmark'>185</Reaction>
                    <Reaction type='share'>589</Reaction>
                    <Reaction type='like'>587</Reaction>
                </Flex>
                <ButtonMenu />
            </Flex>
        </Hide>
        <Show above='lg'>
            <Box ml='53px' mr='24px'>
                <UserProfileCtr />
            </Box>
        </Show>
    </Flex>
);
