import { juiciestConfig } from './juiciestConfig';
import { mainConfig } from './mainConfig';
import { veganCuisineConfig } from './veganCuisineConfig';

export const pagesConfig = [mainConfig, veganCuisineConfig, juiciestConfig] as const;
