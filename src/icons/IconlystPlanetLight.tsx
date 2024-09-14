import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlanetLight = ({
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
      d="M16.071 7.56c2.672-.957 4.738-1.063 5.358-.091 1.026 1.611-2.312 5.574-7.456 8.852C8.83 19.598 3.826 20.949 2.8 19.337c-.623-.977.361-2.822 2.382-4.854"
    />
    <Circle
      cx={12.114}
      cy={13.403}
      r={6.925}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m2.624 10.934-.01-.006M9.005 3.679l-.01-.007M21.614 20.328l-.01-.007"
    />
  </Svg>
);
export default IconlystPlanetLight;
