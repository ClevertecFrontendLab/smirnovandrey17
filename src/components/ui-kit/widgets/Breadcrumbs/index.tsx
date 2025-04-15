import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from '@chakra-ui/react';
import { memo, useMemo } from 'react';
import { Link as RouterLink, useLocation } from 'react-router';

import { menuModel } from '~/components/ui-kit/widgets/MenuSide/menuModel';

type BreadcrumbItem = {
    label: string;
    link: string;
};

// TODO вынести отдельно, убрать subMenu
const model = [
    ...menuModel,
    {
        label: 'Самое сочное',
        link: '/juiciest',
        subMenu: [],
    },
];

const MemoizedBreadcrumbItem = memo(
    ({ item, isLast }: { item: BreadcrumbItem; isLast: boolean }) => (
        <Flex alignItems='center'>
            <Flex boxSize='24px' alignItems='center' justifyContent='center'>
                <ChevronRightIcon color='gray.800' mx={0} />
            </Flex>
            <BreadcrumbItem isCurrentPage={isLast}>
                <BreadcrumbLink
                    as={RouterLink}
                    to={item.link}
                    color={isLast ? 'black' : 'blackAlpha.700'}
                >
                    {item.label}
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Flex>
    ),
);

export const Breadcrumbs = memo(() => {
    const location = useLocation();

    const allMenuItems = useMemo(
        () =>
            model.flatMap((item) => [
                { label: item.label, link: item.link },
                ...item.subMenu.map((sub) => ({ label: sub.label, link: sub.link })),
            ]),
        [],
    );

    const breadcrumbItems = useMemo(() => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const breadcrumbs: BreadcrumbItem[] = [];
        let currentPath = '';

        for (const segment of pathSegments) {
            currentPath = `${currentPath}/${segment}`;
            const menuItem = allMenuItems.find((item) => item.link === currentPath);

            if (menuItem) {
                breadcrumbs.push(menuItem);
            }
        }

        return breadcrumbs;
    }, [location.pathname, allMenuItems]);

    return (
        <Breadcrumb spacing={0} separator='' display='flex' alignItems='center'>
            <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to='/'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {breadcrumbItems.map((item, index) => (
                <MemoizedBreadcrumbItem
                    key={`${item.link}-${index}`}
                    item={item}
                    isLast={index === breadcrumbItems.length - 1}
                />
            ))}
        </Breadcrumb>
    );
});
