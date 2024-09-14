import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorAndSpeakerBroken = ({
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
      d="M21.5 12v4.363a2.505 2.505 0 0 1-2.504 2.505h-2.913a2.505 2.505 0 0 1-2.505-2.505V7.638a2.506 2.506 0 0 1 2.505-2.505h2.912a2.505 2.505 0 0 1 2.504 2.505v1.266M17.469 9.398v.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.966 13.959a1.428 1.428 0 1 0-2.855 0 1.428 1.428 0 0 0 2.855 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.7 18.629h4.186M10.888 15.834h-5.26A2.13 2.13 0 0 1 3.5 13.705v-3.668M3.5 7.46c0-1.175.953-2.128 2.129-2.128h5.259"
    />
  </Svg>
);
export default IconlystMonitorAndSpeakerBroken;
