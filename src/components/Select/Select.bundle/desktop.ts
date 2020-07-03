import { withRegistry, Registry } from '@bem-react/di';
import { compose } from '@bem-react/core';

// Registry dependencies
import { Button } from '../../Button/Button.bundle/desktop';
import { Popup } from '../../Popup/Popup.bundle/desktop';
import { Menu } from '../../Menu/Menu.bundle/desktop';
import { Icon } from '../../Icon/Icon.bundle/desktop';
import { withOutsideClick } from '../../../hocs/withOutsideClick/withOutsideClick';
import { withTogglable } from '../../../hocs/withTogglable/withTogglable';
import { withZIndex } from '../../../hocs/withZIndex/withZIndex';

// base
import { Select as SelectDesktop, cnSelect } from '../Select@desktop';
// _baseline
import { withBaseline } from '../_baseline/Select_baseline';
import { withWidthMax } from '../_width/Select_width_max';

const registry = new Registry({ id: cnSelect() })
    .set('Trigger', Button)
    .set('Popup', compose(withOutsideClick, withZIndex)(Popup))
    .set('Menu', Menu)
    .set('Icon', Icon);

export * from '../Select@desktop';

export const Select = compose(
    withTogglable,
    withBaseline,
    withWidthMax,
    withRegistry(registry),
)(SelectDesktop);
