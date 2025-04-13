import {
    Box,
    Button,
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
import { BookmarkIcon } from '~/components/ui-kit/Icons';
import { ReactionWidget } from '~/components/ui-kit/widgets/ReactionWidget';

// @ts-expect-error TODO добавить типы
export const CardSecondary = ({
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
        direction={{ base: 'row', lg: 'row' }}
        w={{ base: 'full', lg: 'full' }}
        //maxW={{ base: '320px', lg: '520px' }}
        border='1px solid'
        borderColor='blackAlpha.200'
        borderRadius='8px'
        boxShadow='none'
        flexShrink='0'
        overflow='hidden'
    >
        <CardBody p={0} display='flex' flexDir={{ base: 'row', lg: 'row' }}>
            <Box position='relative' flexShrink={0}>
                <Hide above='lg'>
                    <Box position='absolute' top='8px' left='8px' zIndex={1}>
                        <BadgeSimple iconName={badgeIconName} variant={badgeVariant}>
                            {badgeLabel}
                        </BadgeSimple>
                    </Box>
                </Hide>
                <Image
                    objectFit='cover'
                    w={{ base: '158px', lg: '346px' }}
                    h={{ base: '128px', lg: '244px' }}
                    src={image}
                    alt={title}
                    borderRadius={{ base: '7px 0 0 7px' }}
                />
            </Box>

            {/* Content Section */}
            <Flex
                flexDir='column'
                justifyContent='space-between'
                px={{ base: '8px', lg: '24px' }}
                pt={{ base: '8px', lg: '20px' }}
                pb={{ base: '4px', lg: '20px' }}
                w='100%'
            >
                <Stack spacing={{ base: '0', lg: '24px' }}>
                    <Flex justify='space-between' align='center'>
                        <Show above='lg'>
                            <BadgeSimple iconName={badgeIconName} variant={badgeVariant}>
                                {badgeLabel}
                            </BadgeSimple>
                        </Show>
                        <ReactionWidget bookmark={bookmark} share={share} like={like} size='xs' />
                    </Flex>
                    <Stack spacing='8px'>
                        <Text variant='header3' noOfLines={{ base: 2, xl: 1 }}>
                            {title}
                        </Text>
                        <Show above='lg'>
                            <Text variant='secondary' noOfLines={3} color='black'>
                                {desc}
                            </Text>
                        </Show>
                    </Stack>
                </Stack>
                <Flex justifyContent='flex-end' gap={{ base: '12px', lg: '8px' }}>
                    <Button
                        variant='outline'
                        size={{ base: 'xs', lg: 'sm' }}
                        w={{ base: '24px', lg: 'auto' }}
                    >
                        <Show above='lg'>Сохранить</Show>
                        <Hide above='lg'>
                            <BookmarkIcon boxSize={{ base: '12px', lg: '14px' }} />
                        </Hide>
                    </Button>
                    <Button size={{ base: 'xs', lg: 'sm' }}>Готовить</Button>
                </Flex>
            </Flex>
        </CardBody>
    </ChCard>
);
