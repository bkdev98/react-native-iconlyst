import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwap2Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M5.87 6.151a6.8 6.8 0 0 1 6.755.01.75.75 0 0 1-.752 1.298 5.3 5.3 0 0 0-5.255-.008A5.3 5.3 0 0 0 3.988 12a5.3 5.3 0 0 0 2.63 4.548 5.3 5.3 0 0 0 5.255-.008.75.75 0 0 1 .752 1.298 6.8 6.8 0 0 1-6.756.01A6.8 6.8 0 0 1 2.49 12a6.8 6.8 0 0 1 3.38-5.849"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.218 8.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l2.47-2.47-2.47-2.47a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.498 12a.75.75 0 0 1 .75-.75h10.5a.75.75 0 1 1 0 1.5h-10.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.248 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M8.498 12a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwap2Outline;
