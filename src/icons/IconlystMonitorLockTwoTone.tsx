import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorLockTwoTone = ({
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
      d="M7.528 3.566h9.943a4.03 4.03 0 0 1 4.029 4.03v5.456a4.03 4.03 0 0 1-4.029 4.03H7.528a4.03 4.03 0 0 1-4.028-4.03V7.595a4.03 4.03 0 0 1 4.028-4.029"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.773 13.512h-2.546a1.265 1.265 0 0 1-1.264-1.264v-1.43c0-.697.567-1.263 1.264-1.263h2.546c.698 0 1.264.566 1.264 1.263v1.43c0 .697-.566 1.264-1.264 1.264"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.02 9.583v-.941a1.52 1.52 0 0 0-3.04-.006v.947M7.557 21h9.888"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.386 17.082-.638 3.917M14.617 17.082l.637 3.917"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMonitorLockTwoTone;
