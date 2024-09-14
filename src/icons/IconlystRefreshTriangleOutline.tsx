import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshTriangleOutline = ({
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
      d="M18.36 13.316a.75.75 0 0 1 1.023.28l.937 1.645c.953 1.664-.258 3.732-2.17 3.732h-7.095a.75.75 0 0 1 0-1.5h7.096a.996.996 0 0 0 .868-1.486l-.001-.002-.939-1.646a.75.75 0 0 1 .28-1.023"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.368 15.907a.75.75 0 0 1 0 1.06l-1.257 1.257 1.247 1.248a.75.75 0 0 1-1.06 1.06l-1.778-1.778a.75.75 0 0 1 0-1.06l1.787-1.787a.75.75 0 0 1 1.06 0M5.656 13.307a.75.75 0 0 1 .276 1.024l-.947 1.646-.002.002c-.38.655.095 1.492.87 1.492h1.893a.75.75 0 0 1 0 1.5H5.853c-1.919 0-3.134-2.079-2.168-3.744l.946-1.644a.75.75 0 0 1 1.025-.276M12.913 5.256a1 1 0 0 0-1.736-.006l-.93 1.612a.75.75 0 0 1-1.299-.75l.93-1.611c.963-1.67 3.376-1.669 4.337.01v.002l.913 1.603a.75.75 0 1 1-1.304.742zM8.745 7.972a.75.75 0 0 1 .273 1.025l-1.86 3.207a.75.75 0 0 1-1.297-.752l1.86-3.207a.75.75 0 0 1 1.024-.273M15.314 7.97a.75.75 0 0 1 1.023.28l1.826 3.197a.75.75 0 0 1-1.303.744l-1.826-3.198a.75.75 0 0 1 .28-1.023"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshTriangleOutline;
