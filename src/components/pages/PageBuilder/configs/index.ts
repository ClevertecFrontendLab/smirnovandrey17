import { juiciestConfig } from './juiciest/juiciestConfig';
import { mainConfig } from './main/mainConfig';
import { veganCuisineConfig } from './veganCuisine/veganCuisineConfig';

export const pagesConfig = [mainConfig, veganCuisineConfig, juiciestConfig] as const;
