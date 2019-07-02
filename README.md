# forwardAs

Forwarding for the `as` prop in styled-components a la [`React.forwardRef`](https://reactjs.org/docs/forwarding-refs.html).

```jsx
import styled from 'styled-components';
import forwardAs from 'styled-forward-as';

const Button = styled.button`
    /* styles */
`;

const PrefixButton = forwardAs(({ prefix, children, ...rest }, as) => (
    <Button as={as} {...rest}>{prefix}{children}</Button>
))`
    /* styles */
`;
```
