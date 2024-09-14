import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneWaveMusicBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.546 3.71c0 3.58 2.9 6.48 6.48 6.48.472 0 .89.352.89.824v7.107c0 1.1-.43 2.13-1.21 2.91-.77.78-1.81 1.2-2.91 1.2h-5.51c-2.27 0-4.12-1.84-4.12-4.11V7.35a4.12 4.12 0 0 1 4.12-4.12h1.8c.26 0 .46.22.46.48"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M10.966 18.13c0 .63.51 1.14 1.14 1.14s1.15-.51 1.15-1.14c0-.64-.52-1.15-1.15-1.15s-1.14.51-1.14 1.15M16.265 7.079a.75.75 0 0 0 1.5 0v-4.56a.75.75 0 0 0-1.5 0zM14.056 5.599a.75.75 0 0 0 1.5 0v-1.6a.75.75 0 0 0-1.5 0zM19.224 6.348a.75.75 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v1.598a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystPhoneWaveMusicBulk;
