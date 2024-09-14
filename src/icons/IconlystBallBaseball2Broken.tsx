import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallBaseball2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.97 7.935a9 9 0 0 0 14.394 10.43A9 9 0 0 0 6.138 5.17"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.506 3.02a9 9 0 0 0 9.474 9.475M3.02 11.506a9 9 0 0 1 9.475 9.474M15 9l-2 2M11 13l-2 2M13 7l-2 1M17 11l-1 2M8 11l-1 2M13 16l-2 1"
    />
  </Svg>
);
export default IconlystBallBaseball2Broken;
