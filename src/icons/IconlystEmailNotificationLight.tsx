import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailNotificationLight = ({
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
      d="M13.08 4.581H7.307C4.735 4.581 3 6.696 3 9.295v5.813c0 2.6 1.735 4.714 4.308 4.708h8.31c2.575.006 4.31-2.108 4.31-4.708v-3.274"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 6.562a2.377 2.377 0 1 1-4.754 0 2.377 2.377 0 0 1 4.754 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.32 11.273-1.621 1.317a1.944 1.944 0 0 1-2.42 0L6.486 9.533"
    />
  </Svg>
);
export default IconlystEmailNotificationLight;
