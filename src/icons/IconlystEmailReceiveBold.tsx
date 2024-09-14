import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailReceiveBold = ({
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
      d="m9.917 12.375-4.1-3.3c-.3-.3-.4-.7-.1-1.1.3-.3.7-.4 1.1-.1l4.1 3.3c.5.4 1.2.4 1.7 0l4-3.3c.3-.3.8-.2 1.1.1.1.3.1.8-.2 1.1l-4 3.3c-.5.4-1.2.6-1.8.6q-.9 0-1.8-.6m3.533 3.832 2.599-2.6a2.5 2.5 0 0 1 4.26 1.568c.009.11.097.2.208.2h.443c.1 0 .184-.073.197-.171.033-.24.06-.481.06-.73v-6.2c0-3.2-2.2-5.6-5.1-5.6h-8.9c-2.9 0-5.1 2.4-5.1 5.6v6.2c0 1.6.6 3.1 1.6 4.1.9.9 2.2 1.4 3.5 1.4H13.2c.178 0 .272-.22.165-.362-.777-1.022-.932-2.39.085-3.405"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.133 17.125h-4.006l1.22-1.22a.749.749 0 1 0-1.06-1.06l-2.6 2.599a.75.75 0 0 0 0 1.06l2.6 2.6a.746.746 0 0 0 1.06 0 .75.75 0 0 0 0-1.06l-1.419-1.42h4.205a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailReceiveBold;
