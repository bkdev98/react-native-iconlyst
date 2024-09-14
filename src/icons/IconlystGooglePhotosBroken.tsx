import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGooglePhotosBroken = ({
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
      d="M8.25 6.245a4.5 4.5 0 0 1 4.5 4.5v1.254h-9v-1.254c0-1.619.855-3.038 2.138-3.83M17.25 17.755a4.5 4.5 0 0 1-4.5-4.5V12h9v1.255a4.5 4.5 0 0 1-1.78 3.586M7.648 18.837A4.5 4.5 0 0 0 11.494 21h1.254v-9h-1.254a4.5 4.5 0 0 0-4.48 4.077M18.504 7.5a4.5 4.5 0 0 1-4.5 4.5H12.75V3h1.254c1.24 0 2.364.502 3.178 1.314"
    />
  </Svg>
);
export default IconlystGooglePhotosBroken;
