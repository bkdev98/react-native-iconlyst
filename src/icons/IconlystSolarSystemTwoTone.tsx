import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSolarSystemTwoTone = ({
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
      d="M13.462 10.424a1.937 1.937 0 0 0 1.348 2.334 1.94 1.94 0 0 0-1.348 2.334 1.94 1.94 0 0 0-2.695 0 1.937 1.937 0 0 0-1.348-2.334 1.937 1.937 0 0 0 1.348-2.334 1.94 1.94 0 0 0 2.695 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.224 5.123a8.245 8.245 0 0 1-6.056 15.335"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.464 12.036a5.399 5.399 0 0 0-10.744.55 5.397 5.397 0 0 0 7.499 5.145"
    />
    <Circle
      cx={12.114}
      cy={4.239}
      r={1.238}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={6.314}
      cy={19.026}
      r={1.307}
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
      d="M16.81 15.295v-.051m-.006-.152a.223.223 0 1 0 .003.445.223.223 0 0 0-.003-.445"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.914 5.16A8.245 8.245 0 0 0 4.71 16.383"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSolarSystemTwoTone;
