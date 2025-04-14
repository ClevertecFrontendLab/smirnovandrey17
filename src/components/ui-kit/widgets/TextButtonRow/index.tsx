import { Button, Flex, Text } from '@chakra-ui/react';

import { iconsMap } from '~/app/consts/iconsMap';

type TextButtonRowProps = {
    text: string;
    buttonText: string;
    iconName?: string;
};

export const TextButtonRow = ({ text, buttonText, iconName }: TextButtonRowProps) => {
    const Icon = iconsMap[iconName as keyof typeof iconsMap];
    return (
        <Flex
            align='center'
            justify='space-between'
            w='full'
            px={{ base: '12px' }}
            py={{ base: '10px' }}
            gap={{ base: '12px', lg: '16px', xl: '24px' }}
            border='1px solid'
            borderColor='blackAlpha.200'
            borderRadius='8px'
            height={{ base: '52px', xl: '56px' }}
        >
            <Flex align='center' gap={{ base: '8px' }}>
                {Icon && <Icon boxSize='24px' />}
                <Text variant='header3' noOfLines={1}>
                    {text}
                </Text>
            </Flex>
            <Button
                size='sm'
                minW='max-content'
                variant='outline.highlight'
                fontSize={{ base: '12px', xl: '14px' }}
                lineHeight={{ base: '133.333%', xl: '143%' }}
                p={{ base: '8px' }}
                px={{ xl: '12px' }}
                py={{ xl: '6px' }}
            >
                {buttonText}
            </Button>
        </Flex>
    );
};
