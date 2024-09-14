import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBrakesTwoTone = ({
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
      d="M19.702 12.79a8.26 8.26 0 1 1-8.26-8.26"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.442 3.05a9.74 9.74 0 0 1 9.74 9.74h-2.96a6.78 6.78 0 0 0-6.78-6.78z"
      clipRule="evenodd"
    />
    <Circle
      cx={11.442}
      cy={12.79}
      r={3.99}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.91 12.79h-.01M9.982 12.79h-.009M11.442 14.258v-.009M11.442 11.33v-.008"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBrakesTwoTone;
