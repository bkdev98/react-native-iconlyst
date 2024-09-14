import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConstituencyOutline = ({
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
      d="M17.179 2.872c.169-.83 1.354-.83 1.523 0a3.11 3.11 0 0 0 2.426 2.426c.83.17.83 1.354 0 1.523a3.11 3.11 0 0 0-2.426 2.427c-.17.829-1.354.829-1.523 0a3.11 3.11 0 0 0-2.427-2.427c-.829-.169-.829-1.353 0-1.523a3.11 3.11 0 0 0 2.427-2.426m.761 1.975a4.6 4.6 0 0 1-1.213 1.213 4.6 4.6 0 0 1 1.213 1.213 4.6 4.6 0 0 1 1.213-1.213 4.6 4.6 0 0 1-1.213-1.213M2.25 6.06a3.014 3.014 0 0 1 5.933-.75h3.419a.75.75 0 0 1 0 1.5H8.183a3.02 3.02 0 0 1-2.17 2.17v6.837a3.02 3.02 0 0 1 2.17 2.17h6.838a3.02 3.02 0 0 1 2.17-2.17v-3.419a.75.75 0 0 1 1.5 0v3.419a3.015 3.015 0 1 1-3.67 3.67H8.183a3.015 3.015 0 1 1-3.67-3.67V8.979A3.015 3.015 0 0 1 2.25 6.06m3.014-1.514a1.514 1.514 0 1 0 0 3.027 1.514 1.514 0 0 0 0-3.027m0 12.677a1.514 1.514 0 1 0 0 3.027 1.514 1.514 0 0 0 0-3.027m12.676 0a1.514 1.514 0 1 0 0 3.027 1.514 1.514 0 0 0 0-3.027"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystConstituencyOutline;
