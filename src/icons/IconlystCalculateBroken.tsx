import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalculateBroken = ({
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
      d="M8.849 21C6.05 21 4.31 19.026 4.31 16.232V7.769C4.31 4.974 6.05 3 8.848 3h7.37c2.79 0 4.538 1.974 4.538 4.769v8.463c0 2.794-1.74 4.768-4.537 4.768h-3.685"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.176 13.531v.01m0 3.74v.01m4.25-3.76v.01m0 3.74v.01m4.25-3.76v.01m0 3.74v.01M8.202 13.43a.125.125 0 1 1-.001.25.125.125 0 0 1 0-.25m0 3.75a.125.125 0 1 1-.001.25.125.125 0 0 1 0-.25m4.25-3.75a.125.125 0 1 1-.001.25.125.125 0 0 1 0-.25m0 3.75a.125.125 0 1 1-.001.25.125.125 0 0 1 0-.25m4.25-3.75a.125.125 0 1 1-.001.25.125.125 0 0 1 0-.25m0 3.75a.125.125 0 1 1-.001.25.125.125 0 0 1 0-.25M15.752 6.4c1.007 0 1.631.563 1.628 1.595v.316c0 1.034-.623 1.598-1.631 1.598H9.317c-1.005 0-1.631-.575-1.631-1.624v-.29c0-1.032.626-1.595 1.631-1.595h3.217"
    />
  </Svg>
);
export default IconlystCalculateBroken;
