import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalculateLight = ({
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
      d="M8.598 3h7.37c2.798 0 4.538 1.974 4.538 4.769v8.463c0 2.794-1.74 4.768-4.538 4.768h-7.37C5.8 21 4.06 19.026 4.06 16.232V7.769C4.06 4.974 5.809 3 8.598 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.926 13.531v.01m0 3.74v.01m4.25-3.76v.01m0 3.74v.01m4.25-3.76v.01m0 3.74v.01M7.952 13.43a.125.125 0 1 1-.001.25.125.125 0 0 1 0-.25m0 3.75a.125.125 0 1 1-.001.25.125.125 0 0 1 0-.25m4.25-3.75a.125.125 0 1 1-.001.25.125.125 0 0 1 0-.25m0 3.75a.125.125 0 1 1-.001.25.125.125 0 0 1 0-.25m4.25-3.75a.125.125 0 1 1-.001.25.125.125 0 0 1 0-.25m0 3.75a.125.125 0 1 1-.001.25.125.125 0 0 1 0-.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.502 6.398H9.067c-1.005 0-1.631.563-1.631 1.595v.29c0 1.049.626 1.624 1.631 1.624H15.5c1.008 0 1.631-.564 1.631-1.598v-.316c.003-1.032-.62-1.595-1.628-1.595"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalculateLight;
