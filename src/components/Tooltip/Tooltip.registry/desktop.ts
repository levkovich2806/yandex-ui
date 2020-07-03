import { Registry } from '@bem-react/di';
import { compose } from '@bem-react/core';

import { Popup as PopupDesktop } from '../../Popup/Popup@desktop';
import { withViewDefault } from '../../Popup/_view/Popup_view_default';
import { withTargetAnchor } from '../../Popup/_target/Popup_target_anchor';
import { cnTooltip } from '../Tooltip';

const Popup = compose(
    withViewDefault,
    withTargetAnchor,
)(PopupDesktop);

export const registry = new Registry({ id: cnTooltip() });

registry.set('Popup', Popup);
