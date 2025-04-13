import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Stack,
    Text,
} from '@chakra-ui/react';
import { memo, useMemo } from 'react';
import { Link, useLocation } from 'react-router';

import { ArrowIcon } from '~/components/ui-kit/Icons';
import type { TIcon } from '~/components/ui-kit/Icons/types';

type TMenuDataProps = ReadonlyArray<{
    label: string;
    link: string;
    icon: TIcon;
    subMenu: ReadonlyArray<{
        label: string;
        link: string;
    }>;
}>;

const SubMenuItem = memo(
    ({ item, currentPath }: { item: { label: string; link: string }; currentPath: string }) => (
        <Flex gap='11px' alignItems='center' py='4px' pl='33px'>
            <Box
                w='8px'
                h='28px'
                borderRightWidth={currentPath === item.link ? '8px' : '1px'}
                borderStyle='solid'
                borderColor='bg.highlight.secondary'
            />
            <Text
                as={Link}
                to={item.link}
                noOfLines={1}
                variant={
                    currentPath === item.link ? 'controlSecondary.highlight' : 'controlSecondary'
                }
                flex='1'
            >
                {item.label}
            </Text>
        </Flex>
    ),
);

const MenuItem = memo(
    ({ item, currentPath }: { item: TMenuDataProps[number]; currentPath: string }) => {
        const isActive = useMemo(
            () =>
                currentPath === item.link ||
                item.subMenu.some((subItem) => currentPath === subItem.link),
            [currentPath, item.link, item.subMenu],
        );
        const Icon = item.icon ? item.icon : undefined;
        return (
            <AccordionItem key={item.link} minW='230px' border='none'>
                <Box>
                    <AccordionButton
                        as={Link}
                        to={item.link}
                        bg={isActive ? 'bg.highlight.third' : 'transparent'}
                        px='8px'
                        py='12px'
                    >
                        <Flex gap='12px' justifyContent='center' alignItems='center' w='100%'>
                            {Icon && <Icon boxSize='24px' />}
                            <Text
                                as='div'
                                noOfLines={1}
                                variant={
                                    isActive ? 'controlSecondary.highlight' : 'controlSecondary'
                                }
                                flex='1'
                            >
                                {item.label}
                            </Text>
                            {item.subMenu.length > 0 && (
                                <ArrowIcon
                                    color='black'
                                    transition='transform 0.2s ease'
                                    transform={isActive ? 'rotate(180deg)' : 'rotate(0deg)'}
                                />
                            )}
                        </Flex>
                    </AccordionButton>
                </Box>

                {item.subMenu.length > 0 && (
                    <AccordionPanel pb={0} p={0}>
                        <Stack pl={0} spacing={0}>
                            {item.subMenu.map((subItem) => (
                                <SubMenuItem
                                    key={subItem.link}
                                    item={subItem}
                                    currentPath={currentPath}
                                />
                            ))}
                        </Stack>
                    </AccordionPanel>
                )}
            </AccordionItem>
        );
    },
);

export const MenuSide = ({ data }: { data: TMenuDataProps }) => {
    const location = useLocation();

    const expandedIndexes = useMemo(
        () =>
            data.reduce((acc, item, index) => {
                const isActive =
                    location.pathname === item.link ||
                    item.subMenu.some((subItem) => location.pathname === subItem.link);
                return isActive ? [...acc, index] : acc;
            }, [] as number[]),
        [data, location.pathname],
    );

    return (
        <Accordion allowMultiple index={expandedIndexes} ml='10px' mr='16px'>
            {data.map((item, index) => (
                <MenuItem key={index} item={item} currentPath={location.pathname} />
            ))}
        </Accordion>
    );
};
