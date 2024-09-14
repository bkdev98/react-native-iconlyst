import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewLight = ({
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
      d="M7.783 3h8.434c2.948 0 4.782 2.081 4.782 5.026v7.947c0 2.945-1.834 5.026-4.783 5.026H7.783C4.835 20.999 3 18.918 3 15.973V8.026C3 5.081 4.843 3 7.783 3M8.99 3.012V21M15.033 3.012V21M3.002 15.041h17.997M3.002 8.998H21"
    />
  </Svg>
);
export default IconlystGalleryViewLight;
