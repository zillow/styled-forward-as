import React from 'react';
import styled from 'styled-components';
import BlueButton from '../BlueButton/BlueButton';
import forwardAs from '../../forwardAs';

const Icon = styled.span`
    display: inline-block;
`;

const BlueIconButton = forwardAs(({ children, icon, ...props }, as) => (
    <BlueButton as={as} {...props}>
        <Icon>{icon}</Icon>
        {children}
    </BlueButton>
))`
    ${Icon} {
        margin-right: 10px;
    }
`;

export default BlueIconButton;
