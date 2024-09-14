import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerPinTwoTone = ({
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
      d="M16.351 20.256a2.42 2.42 0 0 1-1.745.744H8.282C5.342 21 3.5 18.919 3.5 15.974V8.026C3.5 5.08 5.334 3 8.282 3h8.434c2.95 0 4.784 2.08 4.784 5.026v5.893a2.42 2.42 0 0 1-.674 1.676z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.176 20.928v-3.414a3.02 3.02 0 0 1 3.014-3.022h3.233M10.665 13.075v2.032m2.35-7.448c.162.406.063.871-.253 1.176 0 0-.495.372-.573.556-.099.233-.114.789 0 1.015.115.23.822.617.822.617.43.322.683.827.683 1.363 0 .38-.308.688-.688.688H8.323a.687.687 0 0 1-.687-.688c0-.536.252-1.04.68-1.363 0 0 .71-.386.824-.617.114-.226.1-.782 0-1.015-.078-.184-.573-.556-.573-.556a1.08 1.08 0 0 1 .752-1.858h2.691c.443 0 .842.27 1.005.682"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStickerPinTwoTone;
