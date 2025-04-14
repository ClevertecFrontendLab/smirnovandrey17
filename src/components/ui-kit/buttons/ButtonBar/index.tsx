import { Avatar, Flex, Text } from '@chakra-ui/react';

import type { TButtonBarProps } from './types';

export const ButtonBar = ({
    active,
    icon: Icon,
    imageSrc,
    label,
    invert,
    size,
}: TButtonBarProps) => {
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
            h='100%'
            sx={
                active
                    ? {
                          background: '#ffffd3',
                          position: 'relative',
                          overflow: 'hidden',
                          '&::after': {
                              content: '""',
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              width: '80%',
                              height: '80%',
                              background: `
                                radial-gradient(
                                    circle at center, 
                                    rgba(196, 255, 97, 0.4) 0%, 
                                    rgba(196, 255, 97, 0.2) 40%,
                                    rgba(255, 255, 255, 0) 70%
                                )`,
                              mixBlendMode: 'multiply',
                              borderRadius: '50%',
                              zIndex: 0,
                              filter: 'blur(1px)',
                          },
                      }
                    : undefined
            }
        >
            <Avatar
                size={size === 'lg' ? 'md' : 'sml'}
                icon={iconElement}
                src={imageSrc}
                bg={active || invert ? 'black' : 'transparent'}
                position='relative'
                zIndex='1'
            />
            <Text
                as='div'
                textAlign='center'
                noOfLines={1}
                variant={active ? 'control.highlight' : 'control'}
                position='relative'
                zIndex='1'
            >
                {label}
            </Text>
        </Flex>
    );
};
