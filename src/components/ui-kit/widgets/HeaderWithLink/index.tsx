import { Flex, Show } from '@chakra-ui/react';

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
};

export const HeaderWithLink = ({
    linkLabel,
    linkPath,
    children,
    mt,
    mb,
    showLinkBreakpoint = 'base',
    variant,
    testAttr,
}: THeaderWithLinkProps) => (
    <Flex justify='space-between' align='center' mt={mt} mb={mb} w='full'>
        <Header2>{children}</Header2>
        <Show above={showLinkBreakpoint}>
            <ButtonLink
                linkPath={linkPath}
                variant={typeof variant !== 'undefined' ? variant : 'highlight'}
                testAttr={testAttr}
            >
                {linkLabel}
            </ButtonLink>
        </Show>
    </Flex>
);
