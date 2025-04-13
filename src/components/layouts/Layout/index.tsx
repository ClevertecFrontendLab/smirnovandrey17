import { Box, Flex } from '@chakra-ui/react';

import { sizeNames as bp } from '~/app/consts';

import { BarBottom } from '../BarBottom';
import { Header } from '../Header';
import { SidebarLeft } from '../SidebarLeft';
import { SidebarRight } from '../SidebarRight';
import { size as s } from './config';
import { layoutWidthByGap } from './helpers';

type TLayoutProps = {
    children: React.ReactNode;
};

const layoutWidth = {
    [bp.base]: layoutWidthByGap(s.mainLayout.gapSide.base),
    [bp.md]: layoutWidthByGap(s.mainLayout.gapSide.md),
    [bp.lg]: layoutWidthByGap(s.mainLayout.gapSide.lg),
};

const layoutSideGap = {
    base: `${s.mainLayout.gapSide.base}px`,
    md: `${s.mainLayout.gapSide.md}px`,
    lg: s.mainLayout.gapSide.lg,
};
const headerSideGap = { ...layoutSideGap, lg: `${s.mainLayout.gapSide.base}px` };

export const Layout = ({ children }: TLayoutProps) => (
    <Box width={layoutWidth} maxW={`${s.mainLayout.maxWidth}px`} mx={layoutSideGap}>
        {/* Header */}
        <Box
            as='header'
            maxW={`${s.mainLayout.maxWidth}px`}
            mx={{ xl: 'auto' }}
            height={{ base: `${s.header.height.base}px`, lg: `${s.header.height.lg}px` }}
            bg='bg.primary'
            position='fixed'
            top={0}
            left={0}
            right={0}
            zIndex='sticky'
            px={headerSideGap}
        >
            <Header />
        </Box>
        {/* Main Content Area */}
        <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={`${s.centerLayout.gap}px`}
            mt={{ base: `${s.header.height.base}px`, lg: `${s.header.height.lg}px` }}
            mb={{ base: `${s.footer.height}px`, lg: 0 }}
            minH={{
                base: `calc(100vh - ${s.header.height.base}px - ${s.footer.height}px)`,
                lg: `calc(100vh - ${s.header.height.lg}px)`,
            }}
        >
            {/* Left Sidebar (hidden on mobile) */}
            <Box
                as='aside'
                w={{ base: 0, lg: `${s.sidebars.width}px` }}
                minW={{ base: 0, lg: `${s.sidebars.width}px` }}
                h={`calc(100vh - ${s.header.height.lg}px)`}
                display={{ base: 'none', lg: 'block' }}
                position='sticky'
                top={`${s.header.height.lg}px`}
                overflowY='auto'
            >
                <SidebarLeft />
            </Box>
            {/* Main Content */}
            <Box
                as='main'
                flexGrow={1}
                // w={{ base: '100%', md: 'auto' }}
                w={{
                    base: '100%',
                    md: 'auto',
                    lg: `calc(100vw - 612px - ${s.centerLayout.gap * 2}px)`,
                }}
                // overflowX="hidden"
            >
                {children}
            </Box>
            {/* Right Sidebar (hidden on mobile) */}
            <Box
                as='aside'
                w={{ base: 0, lg: `${s.sidebars.width}px` }}
                minW={{ base: 0, lg: `${s.sidebars.width}px` }}
                h={`calc(100vh - ${s.header.height.lg}px)`}
                display={{ base: 'none', lg: 'block' }}
                position='sticky'
                top={`${s.header.height.lg}px`}
                overflowY='auto'
            >
                <SidebarRight />
            </Box>
        </Flex>
        {/* Bottom bar (hidden on desktop) */}
        <Box
            as='footer'
            display={{ lg: 'none' }}
            height={`${s.footer.height}px`}
            bg='bg.primary'
            position='fixed'
            bottom={0}
            left={0}
            right={0}
            zIndex='sticky'
        >
            <BarBottom />
        </Box>
    </Box>
);
