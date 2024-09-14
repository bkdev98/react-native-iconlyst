import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpaceStarsTwoTone = ({
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
      d="M3.114 7.192a6.34 6.34 0 0 1 4.075 4.075 6.34 6.34 0 0 1 4.075-4.075A6.34 6.34 0 0 1 7.19 3.117a6.34 6.34 0 0 1-4.075 4.075M8.338 17.442a5.35 5.35 0 0 1 3.443 3.442 5.35 5.35 0 0 1 3.442-3.442 5.35 5.35 0 0 1-3.443-3.443 5.36 5.36 0 0 1-3.442 3.443"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.212 10.064a4.59 4.59 0 0 1 2.95 2.951 4.59 4.59 0 0 1 2.952-2.95 4.59 4.59 0 0 1-2.951-2.952 4.59 4.59 0 0 1-2.951 2.951"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.264 4.147v-.01M19.147 17.86v-.01M4.393 15.017v-.01"
    />
  </Svg>
);
export default IconlystSpaceStarsTwoTone;
