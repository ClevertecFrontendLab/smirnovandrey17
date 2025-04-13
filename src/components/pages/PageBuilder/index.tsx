import { useLocation } from 'react-router';

import { getPageComponents } from './helpers';

export const PageBuilder = () => {
    const { pathname } = useLocation();
    const pageComponents = getPageComponents(pathname);

    return pageComponents.map((item, index) => {
        const Component = item.component;
        // @ts-expect-error TODO - добавить типизацию
        return <Component key={index} {...item.props} />;
    });
};
