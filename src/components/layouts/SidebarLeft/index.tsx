import { Box, Flex, Text } from '@chakra-ui/react';

import { ExitIcon } from '~/components/ui-kit/Icons';
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
                <Flex
                    position='absolute'
                    bottom={0}
                    px='24px'
                    pb='32px'
                    flexDir='column'
                    gap='16px'
                >
                    <Text variant='controlThird.light'>Версия программы 03.25</Text>
                    <Text variant='controlThird'>
                        Все права защищены,
                        <br />
                        ученический файл,
                        <br /> ©Клевер Технолоджи, 2025
                    </Text>
                    <Flex gap='6px' alignItems='center' cursor='pointer'>
                        <ExitIcon boxSize='12px' />
                        <Text variant='control.bold'>Выйти</Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
}
