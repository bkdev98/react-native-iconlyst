import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskSaveTwoTone = ({
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
      d="M16.351 3.743A2.42 2.42 0 0 0 14.606 3H8.282C5.342 3 3.5 5.08 3.5 8.026v7.948C3.5 18.919 5.334 21 8.282 21h8.435c2.949 0 4.783-2.081 4.783-5.026V10.08c0-.624-.241-1.225-.674-1.675z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.404 8.1H8.873M17.52 20.94v-4.666c0-1.644-1.027-2.317-2.67-2.317h-4.702c-1.644 0-2.67.673-2.67 2.317v4.666"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFloppyDiskSaveTwoTone;
