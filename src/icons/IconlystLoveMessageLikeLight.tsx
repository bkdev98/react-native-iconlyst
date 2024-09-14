import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoveMessageLikeLight = ({
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
      d="M21.977 15.094c0 2.766-1.845 5.013-4.582 5.006H8.558c-2.737.007-4.581-2.24-4.581-5.006v-6.18C3.977 6.15 5.82 3.9 8.558 3.9h8.837c2.737 0 4.582 2.25 4.582 5.013zM8.402 15.153 4.65 17.728M21.307 17.727l-3.752-2.575M7.655 8.34 4.648 6.28M21.31 6.28l-2.997 2.06"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.875 11.482c.199-1.117-.366-2.287-1.538-2.498a1.93 1.93 0 0 0-1.695.526 1.95 1.95 0 0 0-1.77-.06c-1.076.512-1.315 1.79-.829 2.814.762 1.625 3.32 2.612 3.32 2.612s2.19-1.605 2.512-3.394"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoveMessageLikeLight;
