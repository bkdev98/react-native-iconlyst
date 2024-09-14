import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewShowBroken = ({
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
      d="M11.512 20.677H8.116c-2.843 0-4.616-1.998-4.616-4.84V8.171c0-2.843 1.773-4.85 4.616-4.85h8.124c2.853 0 4.616 2.007 4.616 4.85v2.974M15.106 11.184v-5.2M9.275 3.336v14.598M3.5 14.936h7.852M6.323 9.11h14.528"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.536 20.283h.002c-1.63 0-3.124-1.172-3.964-3.128.84-1.954 2.333-3.128 3.962-3.128 1.631 0 3.124 1.174 3.964 3.128-.383.891-.901 1.62-1.507 2.149M17.545 17.176h.01"
    />
  </Svg>
);
export default IconlystGalleryViewShowBroken;
