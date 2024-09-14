import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleTwoTone = ({
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
      d="M20.838 13.71a8.9 8.9 0 0 0 .01-3.33H12v3.33h5.202A5.47 5.47 0 0 1 12 17.472 5.47 5.47 0 0 1 6.528 12a5.47 5.47 0 0 1 8.892-4.266l2.475-2.529A8.92 8.92 0 0 0 12 3c-4.968 0-9 4.032-9 9s4.032 9 9 9c4.383 0 8.037-3.14 8.838-7.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.154 8.103 5.682 5.602M7.785 15.5l-2.482 2.51M18.33 18.401l-2.482-2.51"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGoogleTwoTone;
