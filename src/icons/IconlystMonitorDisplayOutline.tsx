import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayOutline = ({
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
      fillRule="evenodd"
      d="M2.5 7.234c0-2.64 2.14-4.779 4.778-4.779h9.943A4.78 4.78 0 0 1 22 7.235v5.456a4.78 4.78 0 0 1-4.78 4.779H7.279A4.78 4.78 0 0 1 2.5 12.69zm4.778-3.279A3.28 3.28 0 0 0 4 7.235v5.456a3.28 3.28 0 0 0 3.278 3.279h9.943a3.28 3.28 0 0 0 3.279-3.28V7.235a3.28 3.28 0 0 0-3.28-3.279zM6.947 20.795a.75.75 0 0 1 .75-.75h8.99a.75.75 0 0 1 0 1.5h-8.99a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayOutline;
