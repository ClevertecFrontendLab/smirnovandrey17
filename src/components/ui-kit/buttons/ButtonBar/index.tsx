import { Avatar, Flex, Text } from '@chakra-ui/react';

import type { TButtonBarProps } from './types';

export const ButtonBar = ({ active, icon: Icon, imageSrc, label, invert }: TButtonBarProps) => {
    const iconElement = Icon ? (
        <Icon
            boxSize={active && !invert ? '16px' : '24px'}
            color={active || invert ? 'bg.primary' : 'blackAlpha.900'}
        />
    ) : undefined;

    return (
        <Flex
            flexDirection='column'
            alignItems='center'
            cursor='pointer'
            gap='4px'
            justifyContent='center'
            w='100%'
            sx={
                active
                    ? {
                          backgroundColor: '#ffffd3',
                          backgroundImage:
                              'radial-gradient(50% 40% at 48.89% 37.5%, rgba(196, 255, 97, 0.6) 0%, rgba(255, 255, 255, 0) 80%)',
                      }
                    : undefined
            }
        >
            <Avatar
                size='mdl'
                icon={iconElement}
                src={imageSrc}
                bg={active || invert ? 'black' : 'transparent'}
            />
            <Text
                as='div'
                textAlign='center'
                noOfLines={1}
                variant={active ? 'control.highlight' : 'control'}
            >
                {label}
            </Text>
        </Flex>
    );
};
