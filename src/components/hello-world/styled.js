import styled from '@emotion/styled'
import createCache from '@emotion/cache'
import extraScopePlugin from 'stylis-plugin-extra-scope'
import { prefixer } from 'stylis'

import resetCss from '../../helpers/reset-css';

export const StyledCache = createCache({
  key: 'fourohtwo',
  stylisPlugins: [
    prefixer, // default, required
    extraScopePlugin('.fourohtwo-widget') // add a custom scope to make get a higher specificity than the reset CSS
  ]
});

// Create a wrapper component that uses the reset CSS to reset potential global CSS rules
// This allows us to apply styles without worrying about global styles
export const WidgetWrapper = styled.div`
  ${resetCss}
`;

export const Title = styled.h1`
  color: pink;
`;
