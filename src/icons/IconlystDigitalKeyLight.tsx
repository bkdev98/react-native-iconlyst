import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDigitalKeyLight = ({
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
      d="m20.508 11.798-1.811-1.81-1.342 1.07-1.114-1.037-1.376 1.036-1.036-1.034h-2.37a4.415 4.415 0 1 0-.019 3.587h7.257z"
    />
    <Circle
      cx={1.123}
      cy={1.123}
      r={1.123}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 18.755 19.557)"
    />
    <Circle
      cx={19.878}
      cy={5.568}
      r={1.123}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={1.123}
      cy={1.123}
      r={1.123}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 12.146 19.557)"
    />
    <Circle
      cx={13.268}
      cy={5.568}
      r={1.123}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={7.215}
      cy={11.783}
      r={1.391}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(-90 7.215 11.783)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.755 18.434h-1.9v-4.826M18.755 5.566h-1.9v4.826M13.268 17.188v-3.58M13.268 6.813v3.08"
    />
  </Svg>
);
export default IconlystDigitalKeyLight;
