import { juiciestConfig } from './juiciestConfig';
import { mainConfig } from './main/mainConfig';
import { veganCuisineConfig } from './veganCuisineConfig';

export const pagesConfig = [mainConfig, veganCuisineConfig, juiciestConfig] as const;
