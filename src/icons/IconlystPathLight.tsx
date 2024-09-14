import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPathLight = ({
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
      d="M16.689 6.14v2.108c0 .734.52 1.195 1.256 1.195h1.985c.735 0 1.256-.459 1.256-1.195V6.141c0-.737-.521-1.195-1.256-1.195h-1.985c-.737 0-1.256.458-1.256 1.195M3.186 4.195v2.107c0 .734.52 1.195 1.256 1.195h1.984c.736 0 1.256-.458 1.256-1.195V4.195C7.682 3.458 7.162 3 6.426 3H4.442c-.737 0-1.256.458-1.256 1.195M16.689 17.858v-2.107c0-.733.52-1.195 1.256-1.195h1.985c.735 0 1.256.46 1.256 1.195v2.107c0 .737-.521 1.195-1.256 1.195h-1.985c-.737 0-1.256-.458-1.256-1.195M3.186 19.804v-2.107c0-.734.52-1.195 1.256-1.195h1.984c.736 0 1.256.46 1.256 1.195v2.107c0 .737-.52 1.195-1.256 1.195H4.442c-.737 0-1.256-.458-1.256-1.195"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.702 5.654 8.985 1.257M5.47 7.497v9.006m13.467-7.06v5.114M7.702 18.345l8.986-1.257"
    />
  </Svg>
);
export default IconlystPathLight;
