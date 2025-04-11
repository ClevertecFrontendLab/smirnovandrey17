import { Box, Flex } from '@chakra-ui/react';

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
            <Box boxSize='208px' bg='yellow'></Box>
        </Flex>
    );
}
