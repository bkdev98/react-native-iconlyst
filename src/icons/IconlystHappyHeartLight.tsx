import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyHeartLight = ({
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
      d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9M9.07 10.505V10m6.46.505V10"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.12 14.29c.7.911 1.734 1.48 2.88 1.48s2.18-.569 2.88-1.48"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.502 5.435c.282-.882-.048-1.89-.973-2.188a1.58 1.58 0 0 0-1.43.24 1.6 1.6 0 0 0-1.426-.24c-.926.298-1.258 1.306-.976 2.188.44 1.397 2.402 2.474 2.402 2.474s1.948-1.06 2.403-2.474"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHappyHeartLight;
