import { Box, Flex } from '@chakra-ui/react';

import { ButtonBar } from '~/components/ui-kit/buttons/ButtonBar';
import { WriteIcon } from '~/components/ui-kit/Icons';
import { ReactionWidgetCtl } from '~/components/ui-kit/widgets/ReactionWidget/ReactionWidgetCtr';

export function SidebarRight() {
    return (
        <Flex
            h='100%'
            flexDir='column'
            alignItems='flex-end'
            justifyContent='space-between'
            minH='408px'
        >
            <Box px='56px' py='16px' float='right'>
                <ReactionWidgetCtl isColumn size='lg' />
            </Box>
            <Flex
                boxSize='208px'
                bgGradient='radial(50% 50% at 50% 50%, bg.highlight.secondary 0%, rgba(255, 255, 255, 0) 100%)'
            >
                <ButtonBar icon={WriteIcon} label='Записать рецепт' invert />
            </Flex>
        </Flex>
    );
}
