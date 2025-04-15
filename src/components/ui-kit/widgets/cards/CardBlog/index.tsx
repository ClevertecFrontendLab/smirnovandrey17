import { Flex, Text } from '@chakra-ui/react';

import { UserProfile } from '~/components/ui-kit/UserProfile';

// @ts-expect-error TODO добавить типы
export const CardBlog = ({ name, nickname, imageSrc, text }) => (
    <Flex
        flexDir='column'
        gap={{ base: '16px', xl: '28px' }}
        border='1px solid'
        borderColor='blackAlpha.200'
        borderRadius='8px'
        p={{ base: '16px', xl: '24px' }}
        pb={{ base: '16px', xl: '20px' }}
        bg='white'
        transition='all 0.2s ease'
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <UserProfile name={name} nickname={nickname} imageSrc={imageSrc} />
        <Text variant='third'>{text}</Text>
    </Flex>
);
