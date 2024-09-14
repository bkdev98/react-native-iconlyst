import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCycloneTwoTone = ({
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
      d="M19.006 11.918c.65-3.635-1.697-7.379-2.86-8.577-.356.838-1.217 1.248-2.113.896-1.66-.652-4.505-.867-8.167.328.593.71.617 1.619-.09 2.314-1.421 1.398-2.662 4.346-2.662 8.025.761-.053 1.548-.016 1.756.904.551 2.436 2.862 5.246 9.357 4.806-.126-.74-.476-1.867.523-2.141 1.968-.54 5.326-1.46 6.364-5.022-.94-.11-2.352-.168-2.108-1.533"
      opacity={0.4}
    />
    <Circle
      cx={11.624}
      cy={12}
      r={1.238}
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
      d="M10.599 16.14a4.27 4.27 0 0 1-3.13-3.183M15.933 11.578a4.26 4.26 0 0 1-2.212 4.126M13.679 8.42a4.25 4.25 0 0 0-1.64-.552 4.25 4.25 0 0 0-2.882.685c-.417.278-.785.63-1.083 1.038"
    />
  </Svg>
);
export default IconlystCycloneTwoTone;
