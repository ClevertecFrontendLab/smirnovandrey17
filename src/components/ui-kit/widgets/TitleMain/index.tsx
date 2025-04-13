import { Text } from '@chakra-ui/react';

type TTitleMain = {
    title: string;
    desc?: string;
};

export const TitleMain = ({ title, desc }: TTitleMain) => (
    <>
        <Text as='h1' variant='header1' mt={{ base: '16px', lg: '32px' }}>
            {title}
        </Text>
        {desc && (
            <Text
                variant='header1.sub'
                mt={{ base: '16px', lg: '12px' }}
                mx='auto'
                maxW={{ lg: '696px' }}
            >
                {desc}
            </Text>
        )}
    </>
);
