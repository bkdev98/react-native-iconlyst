import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewTwoTone = ({
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
      d="M8.283 3h8.434c2.948 0 4.782 2.081 4.782 5.026v7.947c0 2.945-1.834 5.026-4.783 5.026H8.283c-2.948 0-4.783-2.081-4.783-5.026V8.026C3.5 5.081 5.343 3 8.283 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.49 3.012V21m6.043-17.988V21M3.502 15.04h17.997M3.502 8.998H21.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGalleryViewTwoTone;
