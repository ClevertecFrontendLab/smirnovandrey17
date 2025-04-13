import { Filters } from '~/components/ui-kit/widgets/Filters';
import { TitleMain } from '~/components/ui-kit/widgets/TitleMain';

export const VeganPage = () => (
    <>
        <TitleMain
            title='Веганская кухня'
            desc='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
        />
        <Filters />
    </>
);
