import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewShowLight = ({
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
      d="M11.012 20.677H7.616C4.773 20.677 3 18.68 3 15.837V8.171c0-2.843 1.773-4.85 4.616-4.85h8.124c2.853 0 4.616 2.007 4.616 4.85v2.974M14.606 11.184V3.332M8.775 3.336v17.338M3 14.936h7.852M3.002 9.11h17.35"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.045 17.176h.033m-.042 3.107c1.631 0 3.124-1.173 3.964-3.128-.84-1.954-2.332-3.128-3.964-3.128-1.629 0-3.122 1.174-3.962 3.128.84 1.956 2.333 3.127 3.964 3.127z"
    />
  </Svg>
);
export default IconlystGalleryViewShowLight;
