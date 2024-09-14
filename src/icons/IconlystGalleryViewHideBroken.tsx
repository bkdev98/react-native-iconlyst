import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewHideBroken = ({
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
      d="M11.518 20.685H8.12c-2.845 0-4.62-2-4.62-4.844V8.17c0-2.845 1.775-4.855 4.62-4.855h8.13c2.855 0 4.62 2.01 4.62 4.855v2.976M15.115 11.181V6.082M9.28 3.327V18.55M6.188 9.105h14.678M3.5 14.938h7.859"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.271 19.435a5.7 5.7 0 0 1-1.664-2.277 5.8 5.8 0 0 1 1.679-2.288 3.64 3.64 0 0 1 2.268-.827c.832.01 1.634.306 2.277.836M21.5 17.16c-.84 1.944-2.323 3.115-3.947 3.115M20.92 13.795l-6.73 6.73"
    />
  </Svg>
);
export default IconlystGalleryViewHideBroken;
