import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDigitalKeyTwoTone = ({
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
      d="m21.008 11.798-1.811-1.81-1.342 1.07-1.114-1.037-1.376 1.036-1.036-1.034h-2.37a4.415 4.415 0 1 0-.019 3.587h7.257z"
    />
    <Circle
      cx={1.123}
      cy={1.123}
      r={1.123}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 19.255 19.557)"
    />
    <Circle
      cx={20.378}
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
      transform="matrix(1 0 0 -1 12.646 19.557)"
    />
    <Circle
      cx={13.768}
      cy={5.568}
      r={1.123}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={7.715}
      cy={11.783}
      r={1.391}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
      transform="rotate(-90 7.715 11.783)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.255 18.434h-1.9v-4.826M19.255 5.566h-1.9v4.826M13.768 17.188v-3.58M13.768 6.813v3.08"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDigitalKeyTwoTone;
