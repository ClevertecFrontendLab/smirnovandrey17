import { Flex, Text } from '@chakra-ui/react';

import { BookmarkIcon, FaceLoveIcon, ShareIcon } from '~/components/ui-kit/Icons';

type TSize = 'lg';

type TReactionProps = {
    children: React.ReactNode;
    type: 'like' | 'share' | 'bookmark';
    size?: TSize;
};

const iconComponents = {
    like: FaceLoveIcon,
    share: ShareIcon,
    bookmark: BookmarkIcon,
};

const config = {
    lg: {
        boxSize: '16px',
        variant: 'highlight.lg',
        gap: '8px',
        px: '16px',
        py: '8px',
    },
    default: {
        boxSize: '12px',
        variant: 'highlight',
        gap: '6px',
        px: '8px',
        py: '4px',
    },
} as const;

const configBySize = (size?: TSize) => (size ? config[size] : config.default);

export const Reaction = ({ children, type, size }: TReactionProps) => {
    const Icon = iconComponents[type];
    const conf = configBySize(size);
    return (
        <Flex alignItems='center' gap={conf.gap} px={conf.px} py={conf.py} cursor='pointer'>
            <Icon boxSize={conf.boxSize} color='black' />
            <Text as='div' variant={conf.variant}>
                {children}
            </Text>
        </Flex>
    );
};
