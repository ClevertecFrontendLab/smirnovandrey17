import { Flex } from '@chakra-ui/react';

import { ButtonLink } from '~/components/ui-kit/buttons/ButtonLink';

// @ts-expect-error TODO добавить типы
export const ButtonMore = ({ children, linkPath, ...rest }) => (
    <Flex justifyContent='center'>
        {/* @ts-expect-error TODO добавить типы */}
        <ButtonLink linkPath={linkPath} {...rest}>
            {children}
        </ButtonLink>
    </Flex>
);
