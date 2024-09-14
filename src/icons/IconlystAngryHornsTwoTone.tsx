import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAngryHornsTwoTone = ({
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
      d="M20.316 3s2.085 1.63.53 5.644A9 9 0 0 1 21.5 12a9 9 0 0 1-18 0c0-1.187.235-2.319.653-3.356C2.599 4.631 4.684 3 4.684 3c.108 1.557 1.376 2.213 1.744 2.371A8.95 8.95 0 0 1 12.5 3c2.343 0 4.47.903 6.071 2.371.368-.158 1.636-.814 1.745-2.371"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.459 12.279c1.259.735 3.23-.46 2.642-1.153-.774-.912-3.153-2.106-3.304-1.99-.38.294-.351 2.551.662 3.143"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.516 15.841c1.195-.516 2.538-.433 3.966 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.539 12.279c-1.26.735-3.23-.46-2.642-1.153.773-.912 3.152-2.106 3.303-1.99.38.294.351 2.551-.662 3.143"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAngryHornsTwoTone;
