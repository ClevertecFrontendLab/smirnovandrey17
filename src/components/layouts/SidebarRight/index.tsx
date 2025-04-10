import { Box } from '@chakra-ui/react';

import { ReactionWidgetCtl } from '~/components/ui-kit/widgets/ReactionWidget/ReactionWidgetCtr';

export function SidebarRight() {
    return (
        <Box px='56px' py='16px' float='right'>
            <ReactionWidgetCtl isColumn size='lg' />
        </Box>
    );
}
