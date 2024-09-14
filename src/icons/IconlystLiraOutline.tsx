import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiraOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.343 5.313a.75.75 0 0 1 .75.75v7.243a4.006 4.006 0 0 0 4.006 4.007h2.248a.75.75 0 0 1 0 1.5H15.1a5.506 5.506 0 0 1-5.506-5.507V6.063a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.402 12.441a.75.75 0 0 1 .75-.75h6.692a.75.75 0 0 1 0 1.5H7.152a.75.75 0 0 1-.75-.75M6.402 9.252a.75.75 0 0 1 .75-.75h6.692a.75.75 0 0 1 0 1.5H7.152a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLiraOutline;
