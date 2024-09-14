import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageBrokencurved = ({
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
      d="M6.32 16.459s.813-1.637 1.995-1.637 1.786 1.375 3.096 1.375c1.309 0 2.778-3.448 4.262-3.448 1.482 0 2.548 2.39 2.548 2.39M10.389 9.105A1.558 1.558 0 1 1 8.83 7.547"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.781 20.972c4.216-.793 5.719-3.38 5.719-8.972 0-6.937-2.313-9.25-9.25-9.25S3 5.063 3 12s2.313 9.25 9.25 9.25"
    />
  </Svg>
);
export default IconlystImageBrokencurved;
