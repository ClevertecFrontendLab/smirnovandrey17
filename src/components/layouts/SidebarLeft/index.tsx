import { Box } from '@chakra-ui/react';

import { MenuSide } from '~/components/ui-kit/widgets/MenuSide';
import { menuModel } from '~/components/ui-kit/widgets/MenuSide/menuModel';

export function SidebarLeft() {
    return (
        <Box mt='34px'>
            <MenuSide data={menuModel} />
        </Box>
    );
}
