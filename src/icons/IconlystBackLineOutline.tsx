import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackLineOutline = ({
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
      d="M11.18 5.04a.75.75 0 0 1 0 1.06l-1.068 1.07-1.344 1.344.941.942 1.472 1.472a.75.75 0 1 1-1.06 1.06l-1.472-1.47v-.002c-.45-.448-.898-.897-1.472-1.472a.75.75 0 0 1 0-1.06L9.05 6.108l1.07-1.069a.75.75 0 0 1 1.06 0M5 5.715a.75.75 0 0 1 .75.75v4.663a.75.75 0 0 1-1.5 0V6.465a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.957 8.516a.75.75 0 0 1 .75-.75h6.334a5.709 5.709 0 0 1 0 11.416H5a.75.75 0 0 1 0-1.5h9.041a4.21 4.21 0 0 0 0-8.416H7.707a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackLineOutline;
