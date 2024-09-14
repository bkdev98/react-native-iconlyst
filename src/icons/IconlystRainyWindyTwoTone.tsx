import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainyWindyTwoTone = ({
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
      strokeWidth={1.5}
      d="M11.657 5.6c-1.184-.45-2.794-.658-4.794-.307"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15.364 18.437a1.48 1.48 0 1 0-2.945.274c.071.767.74 1.342 1.495 1.341 1.184-.03 1.92-1.204 1.499-2.395-1.337-3.15-5.255-1.176-6.861-.386M18.358 7.864a1.53 1.53 0 0 1-1.184.337 2 2 0 0 1-1.707-1.97c0-1.258 1.105-2.283 2.363-2.283 4.976 0 4.364 8.589-2.294 6.777-.6-.163-1.45-.527-2.46-.914"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.114 14.237.315-1.121m7.405 0 .314-1.12M6.36 8.484l-.637 1.876h2.391l-.855 2.246"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.627 18.74.48-1.496M19.267 15.732l.48-1.496M3.581 6.328l.48-1.495"
    />
  </Svg>
);
export default IconlystRainyWindyTwoTone;
