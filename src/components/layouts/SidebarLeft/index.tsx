import { Box, Flex } from '@chakra-ui/react';

import { MenuSide } from '~/components/ui-kit/widgets/MenuSide';
import { menuModel } from '~/components/ui-kit/widgets/MenuSide/menuModel';

import styles from './SidebarLeft.module.scss';

export function SidebarLeft() {
    return (
        <Flex
            flexDir='column'
            borderRight='1px solid rgba(0, 0, 0, 0.14)'
            pt='34px'
            h='calc(100vh - 80px)'
        >
            <Box
                flexGrow={0}
                maxH='calc(100vh - 80px - 144px - 34px)'
                overflow='auto'
                className={styles.wrapMenu}
                borderRadius='12px'
                boxShadow='0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 6px -1px rgba(0, 0, 0, 0.1);'
            >
                <MenuSide data={menuModel} />
            </Box>
            <Box flexGrow={1} position='relative'>
                <Box position='absolute' bottom={0}>
                    <p>Hello</p>
                    <p>hi</p>
                </Box>
            </Box>
        </Flex>
    );
}
