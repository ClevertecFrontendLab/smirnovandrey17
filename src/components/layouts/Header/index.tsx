import { Box, Flex, Hide, Show } from '@chakra-ui/react';

import { ButtonMenu } from '~/components/ui-kit/buttons/ButtonMenu';
import { Logo } from '~/components/ui-kit/Logo';
import { UserProfileCtr } from '~/components/ui-kit/UserProfile/UserProfileCtr';
import { Breadcrumbs } from '~/components/ui-kit/widgets/Breadcrumbs';
import { ReactionWidgetCtl } from '~/components/ui-kit/widgets/ReactionWidget/ReactionWidgetCtr';

export const Header = () => (
    <Flex height='100%' alignItems='center' justifyContent='space-between'>
        <Flex alignItems='center' gap='128px'>
            <Logo />
            <Show above='lg'>
                <Breadcrumbs />
            </Show>
        </Flex>
        <Hide above='lg'>
            <Flex alignItems='center'>
                <Flex mx='16px'>
                    <ReactionWidgetCtl />
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
