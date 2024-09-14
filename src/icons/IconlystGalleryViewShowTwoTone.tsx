import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewShowTwoTone = ({
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
      d="M11.512 20.677H8.116c-2.843 0-4.616-1.998-4.616-4.84V8.171c0-2.843 1.773-4.85 4.616-4.85h8.124c2.853 0 4.616 2.007 4.616 4.85v2.974"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.105 11.184V3.332m-5.83.004v17.338M3.5 14.936h7.852m-7.85-5.827h17.35"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.545 17.176h.033m-.042 3.107c1.631 0 3.124-1.173 3.964-3.128-.84-1.954-2.332-3.128-3.964-3.128-1.629 0-3.122 1.174-3.962 3.128.84 1.956 2.333 3.127 3.964 3.127z"
    />
  </Svg>
);
export default IconlystGalleryViewShowTwoTone;
