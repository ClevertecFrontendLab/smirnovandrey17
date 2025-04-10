import { Flex } from '@chakra-ui/react';

import { ButtonBar } from '~/components/ui-kit/buttons/ButtonBar';
import { HomeCircleIcon } from '~/components/ui-kit/Icons';
import { SearchIcon } from '~/components/ui-kit/Icons';
import { WriteIcon } from '~/components/ui-kit/Icons';

import avatar from './assets/avatar.png';

export function BarBottom() {
    return (
        <Flex h='100%'>
            <ButtonBar icon={<HomeCircleIcon boxSize='40px' />} label='Главная' active />
            <ButtonBar icon={<SearchIcon boxSize='24px' color='blackAlpha.900' />} label='Поиск' />
            <ButtonBar
                icon={<WriteIcon boxSize='24px' color='blackAlpha.900' />}
                label='Записать'
            />
            <ButtonBar imageSrc={avatar} label='Мой профиль' />
        </Flex>
    );
}
