import { Header2 } from '~/components/ui-kit/texts/header2';
import { CardSecondarySwarm } from '~/components/ui-kit/widgets/CardSecondarySwarm';
import { CarouselCard } from '~/components/ui-kit/widgets/Carousel';
import { Filters } from '~/components/ui-kit/widgets/Filters';
import { TitleMain } from '~/components/ui-kit/widgets/TitleMain';

export const componentsMap = {
    TitleMain: TitleMain,
    Filters: Filters,
    Header2: Header2,
    CarouselCard: CarouselCard,
    CardSecondarySwarm: CardSecondarySwarm,
} as const;
