import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckCheckComplete2Broken = ({
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
      d="M8.976 18.175a1.916 1.916 0 1 0-3.831 0 1.916 1.916 0 0 0 3.831 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.858 11.624a3.858 3.858 0 1 1 2.542-.957"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.639 7.212 1.26 1.26L9.863 5.51"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.115 18.175a1.916 1.916 0 1 0-3.832 0 1.916 1.916 0 0 0 3.832 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.977 18.175h3.14M5.145 18.175h-.057a2.08 2.08 0 0 1-2.078-2.079v-3.06M13.04 5.898h1.083c1.147 0 2.077.93 2.077 2.079v8.282M18.115 18.174h.807c1.147 0 2.077-.93 2.077-2.078v-3.441a2.36 2.36 0 0 0-1.408-2.16l-1.338-.59M18.6 13.404H21"
    />
  </Svg>
);
export default IconlystTruckCheckComplete2Broken;
