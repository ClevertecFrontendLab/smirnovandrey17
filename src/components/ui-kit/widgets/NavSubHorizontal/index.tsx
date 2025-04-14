import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router';

import { menuModel } from '~/components/ui-kit/widgets/MenuSide/menuModel';

// @ts-expect-error TODO Добавить типы
export const NavSubHorizontal = (props) => {
    const location = useLocation();

    const activeSubMenu = useMemo(() => {
        const activeItem = menuModel.find(
            (item) =>
                location.pathname === item.link ||
                item.subMenu.some((subItem) => location.pathname === subItem.link),
        );
        return activeItem?.subMenu || [];
    }, [location.pathname]);

    if (activeSubMenu.length === 0) return null;

    return (
        <Flex justifyContent='center' {...props}>
            <Box
                overflowX='auto'
                whiteSpace='nowrap'
                py={0}
                px={0}
                bg='white'
                borderBottomWidth='1px'
                borderColor='gray.200'
                css={{
                    '&::-webkit-scrollbar': {
                        height: '4px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        borderRadius: '2px',
                    },
                }}
            >
                <Flex display='inline-flex'>
                    {activeSubMenu.map((item) => (
                        <ChakraLink
                            as={Link}
                            to={item.link}
                            key={item.link}
                            px={{ base: '16px' }}
                            py={{ base: '4px', lg: '8px' }}
                            display='flex'
                            alignItems='center'
                            borderRadius={0}
                            fontWeight={{ base: 500 }}
                            fontSize={{ base: '14px', lg: '16px' }}
                            lineHeight={{ base: '143%', lg: '150%' }}
                            fontFamily="'Inter', sans-serif"
                            color={location.pathname === item.link ? 'highlight' : 'control'}
                            bg='transparent'
                            borderBottom='2px solid'
                            borderBottomColor={
                                location.pathname === item.link ? 'highlight' : 'transparent'
                            }
                            _hover={{
                                textDecoration: 'none',
                                bg: 'transparent',
                            }}
                            transition='border-color 0.2s ease'
                        >
                            {item.label}
                        </ChakraLink>
                    ))}
                </Flex>
            </Box>
        </Flex>
    );
};
