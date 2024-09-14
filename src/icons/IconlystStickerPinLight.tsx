import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerPinLight = ({
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
      d="M15.851 20.256a2.42 2.42 0 0 1-1.746.744H7.782C4.842 21 3 18.919 3 15.974V8.026C3 5.08 4.834 3 7.782 3h8.434C19.166 3 21 5.08 21 8.026v5.893a2.42 2.42 0 0 1-.674 1.676z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.676 20.928v-3.414a3.02 3.02 0 0 1 3.014-3.022h3.233M10.166 13.075v2.032m2.35-7.448c.162.406.063.871-.253 1.176 0 0-.495.372-.573.556-.099.233-.114.789 0 1.015.115.23.822.617.822.617.43.322.682.827.682 1.363 0 .38-.307.688-.687.688H7.824a.687.687 0 0 1-.687-.688c0-.536.252-1.04.68-1.363 0 0 .71-.386.824-.617.114-.226.1-.782 0-1.015-.078-.184-.573-.556-.573-.556a1.08 1.08 0 0 1 .752-1.858h2.691c.443 0 .842.27 1.005.682"
    />
  </Svg>
);
export default IconlystStickerPinLight;
