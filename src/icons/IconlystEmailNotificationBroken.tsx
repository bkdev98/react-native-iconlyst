import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailNotificationBroken = ({
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
      d="M13.08 4.582H7.307C4.735 4.582 3 6.697 3 9.296v5.813c0 2.6 1.735 4.714 4.308 4.708h.844M19.927 11.834v3.274c0 2.6-1.735 4.714-4.31 4.708h-4.154M21 6.56a2.377 2.377 0 1 1-2.377-2.376"
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
export default IconlystEmailNotificationBroken;
