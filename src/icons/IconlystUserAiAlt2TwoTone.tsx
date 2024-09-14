import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserAiAlt2TwoTone = ({
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
    <Circle
      cx={10.334}
      cy={8.162}
      r={4.701}
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
      d="M3.918 19.488c-.11-.639-.065-1.3-.065-1.945 0-2.43 1.97-4.398 4.399-4.398h4.283q.491 0 .951.103"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.561 19.297.101-.273a3.76 3.76 0 0 1 2.222-2.225l.273-.101-.273-.102a3.76 3.76 0 0 1-2.222-2.225l-.1-.273-.102.273a3.76 3.76 0 0 1-2.222 2.225l-.273.102.273.1a3.76 3.76 0 0 1 2.222 2.226zM12.25 20.539a1.77 1.77 0 0 1 1.177-1.178 1.77 1.77 0 0 1-1.177-1.179 1.77 1.77 0 0 1-1.176 1.179 1.77 1.77 0 0 1 1.176 1.178"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUserAiAlt2TwoTone;
