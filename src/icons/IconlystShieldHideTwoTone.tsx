import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldHideTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.793 7.107c-.125.735 0 2.263 0 6.5 0 6.118 7.32 8.332 7.32 8.332s2.635-.802 4.744-2.759"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.125 20.45 4.505 5.83M9.522 4.958c1.537-.552 3.115-1.019 3.592-1.019.963 0 6.413 1.9 7.005 2.491.582.592.316 1.07.316 7.178q-.002.86-.181 1.625"
    />
  </Svg>
);
export default IconlystShieldHideTwoTone;
