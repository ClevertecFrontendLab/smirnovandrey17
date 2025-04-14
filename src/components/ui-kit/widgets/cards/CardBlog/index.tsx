import { Flex, Text } from '@chakra-ui/react';

import { UserProfile } from '~/components/ui-kit/UserProfile';

// @ts-expect-error TODO добавить типы
export const CardBlog = ({ name, nickname, imageSrc, text }) => (
    <Flex
        flexDir='column'
        gap={{ base: '16px', xl: '28px' }}
        p={{ base: '16px', xl: '24px' }}
        pb={{ base: '16px', xl: '20px' }}
        bg='white'
    >
        <UserProfile name={name} nickname={nickname} imageSrc={imageSrc} />
        <Text>{text}</Text>
    </Flex>
);
