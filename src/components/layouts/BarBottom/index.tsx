import { Flex } from '@chakra-ui/react';

import { ButtonBar } from '~/components/ui-kit/buttons/ButtonBar';
import { HomeIcon } from '~/components/ui-kit/Icons';
import { SearchIcon } from '~/components/ui-kit/Icons';
import { WriteIcon } from '~/components/ui-kit/Icons';

import avatar from './assets/avatar.png';

export const BarBottom = () => (
    <Flex h='100%'>
        <ButtonBar icon={HomeIcon} label='Главная' active />
        <ButtonBar icon={SearchIcon} label='Поиск' />
        <ButtonBar icon={WriteIcon} label='Записать' />
        <ButtonBar imageSrc={avatar} label='Мой профиль' />
    </Flex>
);
