import {
    Box,
    Card as ChCard,
    CardBody,
    Flex,
    Hide,
    Image,
    Show,
    Stack,
    Text,
} from '@chakra-ui/react';

import { BadgeSimple } from '~/components/ui-kit/BadgeSimple';
import { ReactionWidget } from '~/components/ui-kit/widgets/ReactionWidget';

// @ts-expect-error TODO добавить типы
export const Card = ({
    image,
    badgeLabel,
    badgeVariant,
    badgeIconName,
    title,
    desc,
    bookmark,
    share,
    like,
}) => (
    <ChCard
        w={{ base: '158px', lg: '277px', xl: '322px' }}
        border='1px solid'
        borderColor='blackAlpha.200'
        borderRadius='8px'
        boxShadow='none'
        flexShrink='0'
    >
        <CardBody p={0} position='relative'>
            <Hide above='lg'>
                <Box position='absolute' top='8px' left='8px'>
                    <BadgeSimple iconName={badgeIconName} variant={badgeVariant}>
                        {badgeLabel}
                    </BadgeSimple>
                </Box>
            </Hide>
            <Image
                objectFit='cover'
                h={{ base: '128px', lg: '230px' }}
                src={image}
                alt={title}
                borderRadius='7px 7px 0 0'
            />
            <Stack
                spacing={{ base: '8px', lg: '24px' }}
                px={{ base: '8px', lg: '12px' }}
                pt={{ base: '8px', lg: '12px' }}
                pb={{ base: '4px', lg: '12px' }}
            >
                <Stack spacing='8px'>
                    <Text variant='header3' noOfLines={{ base: 2, lg: 1 }}>
                        {title}
                    </Text>
                    <Show above='lg'>
                        <Text variant='secondary' noOfLines={3} color='black'>
                            {desc}
                        </Text>
                    </Show>
                </Stack>
                <Flex justify='space-between'>
                    <Show above='lg'>
                        <BadgeSimple iconName='PotIcon' variant='highlight'>
                            {badgeLabel}
                        </BadgeSimple>
                    </Show>
                    <ReactionWidget bookmark={bookmark} share={share} like={like} size='xs' />
                </Flex>
            </Stack>
        </CardBody>
    </ChCard>
);
