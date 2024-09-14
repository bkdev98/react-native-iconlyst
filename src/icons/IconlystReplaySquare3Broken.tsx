import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplaySquare3Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.868 12.205V8.957c0-2.333 1.46-3.98 3.787-3.98h3.34M19.124 8.957c0-2.333-1.453-3.98-3.788-3.98M19.125 12.293v3.248c0 2.333-1.454 3.98-3.79 3.98H11.79M4.87 15.543c0 2.333 1.452 3.98 3.786 3.98"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.001 14.178-1.885-1.885-1.876 1.876M3 10.32l1.885 1.886 1.876-1.875"
    />
  </Svg>
);
export default IconlystReplaySquare3Broken;
