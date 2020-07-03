import { withRegistry } from '@bem-react/di';

import { Showcase as ShowcaseCommon } from './Showcase';
import { showcaseRegistry } from './Showcase.registry/touch-pad';

export * from './Showcase';
export const Showcase = withRegistry(showcaseRegistry)(ShowcaseCommon);
