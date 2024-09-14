import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTypeOutline = ({
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
      d="M2.75 6.371a.75.75 0 0 1 .75-.75h12.706a.75.75 0 0 1 .75.75v2.255a.75.75 0 0 1-1.5 0V7.12H4.25v1.505a.75.75 0 1 1-1.5 0zM14.383 12.75a.75.75 0 0 1 .75-.75H21.5a.75.75 0 0 1 .75.75v1.13a.75.75 0 0 1-1.5 0v-.38h-4.867v.38a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.287 12a.75.75 0 0 1 .75.75v5.66h.7a.75.75 0 0 1 0 1.5h-2.84a.75.75 0 0 1 0-1.5h.64v-5.66a.75.75 0 0 1 .75-.75M9.791 5.621a.75.75 0 0 1 .75.75v12.04h2.145a.75.75 0 1 1 0 1.5H7.018a.75.75 0 0 1 0-1.5H9.04V6.37a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTypeOutline;
