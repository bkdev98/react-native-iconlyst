import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownLineOutline = ({
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
      d="M11.999 4.25a.75.75 0 0 1 .75.75v8.706l3.057-3.067a.75.75 0 1 1 1.063 1.059l-4.316 4.33a.75.75 0 0 1-1.087.023l-4.335-4.354a.75.75 0 1 1 1.063-1.058l3.055 3.068V5a.75.75 0 0 1 .75-.75M5.986 19a.75.75 0 0 1 .75-.75h10.526a.75.75 0 0 1 0 1.5H6.736a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownLineOutline;
