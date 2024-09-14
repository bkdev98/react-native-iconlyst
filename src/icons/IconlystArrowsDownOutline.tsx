import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsDownOutline = ({
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
      d="M6.688 2.25a.75.75 0 0 1 .75.75v16.194l1.908-1.902a.75.75 0 1 1 1.058 1.063L7.217 21.53a.75.75 0 0 1-1.059 0l-3.187-3.176a.75.75 0 0 1 1.058-1.063l1.909 1.902V3a.75.75 0 0 1 .75-.75M17.313 2.25a.75.75 0 0 1 .75.75v16.194l1.908-1.902a.75.75 0 1 1 1.058 1.063l-3.187 3.176a.75.75 0 0 1-1.059 0l-3.187-3.176a.75.75 0 0 1 1.058-1.063l1.909 1.902V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsDownOutline;
