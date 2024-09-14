import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewHideLight = ({
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
      d="M11.018 20.684H7.62c-2.845 0-4.62-2-4.62-4.844V8.169c0-2.845 1.775-4.855 4.62-4.855h8.13c2.855 0 4.62 2.01 4.62 4.855v2.976M14.615 11.181V3.322m-5.835.005v17.356M3.002 9.105h17.364M3 14.938h7.859"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.771 19.435a5.7 5.7 0 0 1-1.664-2.277 5.8 5.8 0 0 1 1.679-2.288 3.64 3.64 0 0 1 2.268-.827c.832.01 1.634.306 2.277.836M21 17.16c-.84 1.944-2.323 3.115-3.947 3.115M20.42 13.795l-6.73 6.73"
    />
  </Svg>
);
export default IconlystGalleryViewHideLight;
