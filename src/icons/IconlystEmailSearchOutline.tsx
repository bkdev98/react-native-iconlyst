import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailSearchOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M7.816 20.4a5.05 5.05 0 0 1-3.641-1.48A5.96 5.96 0 0 1 2.5 14.644v-6.18A5.44 5.44 0 0 1 7.832 2.7h8.836A5.44 5.44 0 0 1 22 8.463v2.581a.75.75 0 1 1-1.5 0v-2.58c0-2.47-1.611-4.264-3.832-4.264H7.832C5.611 4.2 4 5.993 4 8.463v6.181a4.47 4.47 0 0 0 1.234 3.214 3.46 3.46 0 0 0 2.6 1.042h3.438a.75.75 0 1 1 0 1.5z"
    />
    <Path
      fill={props.color}
      d="M12.273 13.17a2.8 2.8 0 0 1-1.75-.615L6.483 9.3a.75.75 0 1 1 .942-1.168l4.033 3.252a1.31 1.31 0 0 0 1.636 0l3.992-3.246a.751.751 0 0 1 .947 1.164l-4 3.252c-.5.398-1.121.615-1.76.615M21.25 21.3a.75.75 0 0 1-.53-.22l-.99-.986a3.629 3.629 0 1 1 1.093-1.03l.957.955a.75.75 0 0 1-.53 1.28m-3.406-6.43a2.127 2.127 0 1 0 0 4.255 2.127 2.127 0 0 0 0-4.254"
    />
  </Svg>
);
export default IconlystEmailSearchOutline;
