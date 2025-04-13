import { SearchIcon } from '@chakra-ui/icons';
import { Button, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import { FilterIcon } from '~/components/ui-kit/Icons';

export const Filters = () => (
    <Flex gap='12px' maxW={{ base: '448px', lg: '518px' }} mx='auto'>
        <Button
            variant='outline'
            size={{ base: 'sm', lg: 'md' }}
            w={{ base: '32px', lg: '48px' }}
            h={{ base: '32px', lg: '48px' }}
            px={{ lg: '23px' }}
            borderRadius={{ base: '4px', lg: '6px' }}
        >
            <FilterIcon boxSize={{ base: '14px', lg: '24px' }} />
        </Button>
        <InputGroup>
            <Input variant='search' placeholder='Название или ингредиент...' />
            <InputRightElement height='full' w={{ base: '32px', lg: '48px' }}>
                <SearchIcon boxSize={{ base: '14px', lg: '18px' }} color='black' />
            </InputRightElement>
        </InputGroup>
    </Flex>
);
