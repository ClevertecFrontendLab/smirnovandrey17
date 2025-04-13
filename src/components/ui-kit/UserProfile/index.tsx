import { Avatar, Flex, Text } from '@chakra-ui/react';

type TUserProfile = {
    name: string;
    nickname: string;
    imageSrc: string;
};

export const UserProfile = ({ name, nickname, imageSrc }: TUserProfile) => (
    <Flex justifyContent='space-beetwen' alignItems='center' gap='12px'>
        <Avatar size='md' name={name} src={imageSrc} />
        <Flex flexDirection='column'>
            <Text as='div' variant='header2' noOfLines={1}>
                {name}
            </Text>
            <Text as='div' variant='secondary' noOfLines={1}>
                @{nickname}
            </Text>
        </Flex>
    </Flex>
);
