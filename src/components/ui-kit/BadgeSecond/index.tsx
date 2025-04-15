import { Avatar, Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type BadgeSecondProps = {
    children: ReactNode;
    imageSrc?: string;
};

export const BadgeSecond = ({ children, imageSrc }: BadgeSecondProps) => (
    <Flex
        justifyContent='center'
        alignItems='center'
        gap='8px'
        py='4px'
        px='8px'
        bg='bg.highlight.fourth'
        borderRadius='4px'
    >
        <Avatar size='2xs' name={typeof children === 'string' ? children : ''} src={imageSrc} />
        <Text variant='third' color='black' noOfLines={1}>
            {children}
        </Text>
    </Flex>
);
