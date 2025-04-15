import { componentsMap } from './componentsMap';
import { pagesConfig } from './configs';

export const getPageComponents = (pathname: string) => {
    const config = pagesConfig.find((item) => item.pathname === pathname);

    if (!config) return [];

    return config.components.map((item) => {
        const component = componentsMap[item.component];
        if (!component) throw new Error(`"componentsMap" doen't contain "${item.component}"`);
        return {
            component,
            props: 'props' in item ? item.props : {},
        };
    });
};
