/* eslint zillow/react/prop-types: 0 */

import React from 'react';
import styled from 'styled-components';

const forwardAs = callback =>
    // Create the tag function to capture the styled-components tagged template
    (...template) =>
        // Return a component wrapper that removes the as prop
        ({ as, ...rest }) => {
            // Create the styled version of the component, passing it the original template
            const Component = styled(props => callback(props, as))(...template);

            // Render the result
            return <Component {...rest} />;
        };

export default forwardAs;
