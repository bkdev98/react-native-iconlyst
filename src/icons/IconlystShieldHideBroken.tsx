import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldHideBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.607 18.22c-2.11 1.957-4.743 2.76-4.743 2.76s-4.283-1.296-6.297-4.642M5.543 6.148c-.125.735 0 2.263 0 6.5M18.875 19.491 4.255 4.871M9.272 4c1.537-.553 3.115-1.02 3.592-1.02.963 0 6.413 1.9 7.005 2.491.582.592.316 1.07.316 7.178q-.002.86-.181 1.625"
    />
  </Svg>
);
export default IconlystShieldHideBroken;
