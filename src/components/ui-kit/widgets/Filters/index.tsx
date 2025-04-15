import { SearchIcon } from '@chakra-ui/icons';
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Show,
    Switch,
} from '@chakra-ui/react';

import { FilterIcon } from '~/components/ui-kit/Icons';

export const Filters = () => (
    <Flex
        flexDir='column'
        maxW={{ base: '448px', lg: '518px' }}
        mx='auto'
        mt={{ base: '16px', lg: '32px' }}
    >
        <Flex gap='12px'>
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
        <Show above='lg'>
            <Flex mt='16px' gap='16px'>
                <FormControl display='flex' alignItems='center'>
                    <FormLabel htmlFor='eliminate-allergens' mb='0'>
                        Исключить мои аллергены
                    </FormLabel>
                    <Switch id='eliminate-allergens' />
                </FormControl>
                <Select placeholder='Выберите из списка...' maxW='234px'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
            </Flex>
        </Show>
    </Flex>
);
