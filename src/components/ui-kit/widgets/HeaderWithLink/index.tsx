import { Flex } from '@chakra-ui/react';

import { ButtonLink } from '~/components/ui-kit/buttons/ButtonLink';
import { Header2 } from '~/components/ui-kit/texts/header2';

type THeaderWithLinkProps = {
    linkLabel: string;
    linkPath: string;
    children: React.ReactNode;
    mt?: string | number;
    mb?: string | number;
    showLinkBreakpoint?: string;
    variant?: string;
    isLargeLight?: boolean;
    testAttr?: string;
};

export const HeaderWithLink = ({
    linkLabel,
    linkPath,
    children,
    mt,
    mb,
    showLinkBreakpoint = 'base',
    variant,
    isLargeLight,
    testAttr,
}: THeaderWithLinkProps) => (
    <Flex justify='space-between' align='center' mt={mt} mb={mb} w='full'>
        {isLargeLight ? (
            <Header2
                fontSize={{ lg: '30px', xl: '36px' }}
                fontWeight={{ xl: 400 }}
                lineHeight={{ lg: '120%', xl: '111%' }}
            >
                {children}
            </Header2>
        ) : (
            <Header2>{children}</Header2>
        )}
        {/* @ts-expect-error TODO Добавить типы */}
        <ButtonLink
            linkPath={linkPath}
            variant={typeof variant !== 'undefined' ? variant : 'highlight'}
            testAttr={testAttr}
            display={{ base: 'none', [showLinkBreakpoint]: 'flex' }}
        >
            {linkLabel}
        </ButtonLink>
    </Flex>
);
