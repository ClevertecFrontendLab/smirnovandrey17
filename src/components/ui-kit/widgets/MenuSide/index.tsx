import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Stack,
} from '@chakra-ui/react';
import { memo, useMemo } from 'react';
import { Link, useLocation } from 'react-router';

type TMenuDataProps = ReadonlyArray<{
    label: string;
    link: string;
    subMenu: ReadonlyArray<{
        label: string;
        link: string;
    }>;
}>;

const SubMenuItem = memo(
    ({ item, currentPath }: { item: { label: string; link: string }; currentPath: string }) => (
        <Box
            as={Link}
            to={item.link}
            display='block'
            px={2}
            py={1}
            borderRadius='md'
            fontWeight={currentPath === item.link ? 'bold' : 'normal'}
            _hover={{ bg: 'gray.50' }}
        >
            {item.label}
        </Box>
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

        return (
            <AccordionItem key={item.link}>
                <Box>
                    <AccordionButton
                        as={Link}
                        to={item.link}
                        _expanded={{ bg: isActive ? 'gray.100' : 'gray.50' }} // Use isActive here
                        bg={isActive ? 'gray.50' : 'transparent'} // And here
                    >
                        <Box
                            flex='1'
                            textAlign='left'
                            fontWeight={isActive ? 'bold' : 'normal'} // And here
                        >
                            {item.label}
                        </Box>
                        {item.subMenu.length > 0 && <AccordionIcon />}
                    </AccordionButton>
                </Box>

                {item.subMenu.length > 0 && (
                    <AccordionPanel pb={4}>
                        <Stack pl={4} spacing={1}>
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
        <Accordion allowMultiple index={expandedIndexes}>
            {data.map((item) => (
                <MenuItem key={item.link} item={item} currentPath={location.pathname} />
            ))}
        </Accordion>
    );
};
