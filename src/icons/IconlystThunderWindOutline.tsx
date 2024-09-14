import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThunderWindOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M10.178 15.148a.75.75 0 0 1 .75-.75h5.671c1.988 0 3.35 1.523 3.35 3.35a3.349 3.349 0 0 1-6.127 1.874.75.75 0 1 1 1.243-.84 1.849 1.849 0 0 0 3.383-1.033c0-1.045-.734-1.85-1.849-1.85h-5.671a.75.75 0 0 1-.75-.75M18.868 6.727c-.57 0-1.082.237-1.447.62a.75.75 0 1 1-1.086-1.035 3.497 3.497 0 0 1 6.03 2.412c0 .925-.31 1.797-.928 2.448-.623.656-1.51 1.031-2.557 1.049h-4.834a.75.75 0 0 1 0-1.5h4.815c.689-.013 1.174-.252 1.489-.582.32-.337.514-.823.514-1.415a1.997 1.997 0 0 0-1.997-1.997M4.097 18.553a.75.75 0 0 1 .75-.75h5.13a.75.75 0 1 1 0 1.5h-5.13a.75.75 0 0 1-.75-.75M11.112 4.606a.75.75 0 0 1 .75-.75h2.59a.75.75 0 0 1 0 1.5h-2.59a.75.75 0 0 1-.75-.75M7.653 4.402l-.885 3.096A1.068 1.068 0 0 0 7.795 8.86h2.67l-2.342 3.68v-1.564c0-.59-.478-1.068-1.068-1.068H5.452L4.45 4.402zm1.6-.138a1.068 1.068 0 0 0-1.028-1.362H3.933c-.666 0-1.17.604-1.05 1.26L4.04 10.53c.092.509.535.878 1.051.878h1.532v2.615c0 1.068 1.396 1.475 1.97.573l3.56-5.594-.633-.402.633.402a1.068 1.068 0 0 0-.902-1.642H8.367z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThunderWindOutline;
