import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDirectionLeftBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.489 15.389a.75.75 0 0 1-1.5 0v-3.021a.83.83 0 0 0-.831-.83h-2.982l.9.898a.749.749 0 1 1-1.057 1.062l-2.19-2.178v-.001a.77.77 0 0 1-.22-.531.75.75 0 0 1 .22-.53v-.001l2.19-2.181a.75.75 0 1 1 1.058 1.062l-.903.9h2.984a2.333 2.333 0 0 1 2.33 2.33zm4.634-6.555-4.958-4.957c-.941-.94-2.061-1.418-3.255-1.374-1.154.04-2.267.567-3.218 1.518L4.02 8.69c-1.978 1.98-2.036 4.583-.143 6.475l4.958 4.957c.903.904 1.975 1.377 3.11 1.377l.145-.002c1.154-.041 2.268-.566 3.219-1.517l4.672-4.672c1.978-1.98 2.035-4.581.142-6.475"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDirectionLeftBold;
