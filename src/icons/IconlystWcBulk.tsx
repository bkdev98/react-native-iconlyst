import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWcBulk = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.933 4.524H6.067C3.335 4.524 1.5 6.445 1.5 9.305v7.1c0 2.852 1.835 4.77 4.567 4.77h11.865c2.733 0 4.568-1.918 4.568-4.77v-7.1c0-2.86-1.835-4.78-4.567-4.78"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.265 13.874a1.447 1.447 0 0 1-2.034.003 1.45 1.45 0 0 1-.003-2.04 1.447 1.447 0 0 1 2.037 0 .75.75 0 1 0 1.058-1.062 2.95 2.95 0 0 0-4.155.002 2.956 2.956 0 0 0 .002 4.162 2.94 2.94 0 0 0 2.077.852 2.94 2.94 0 0 0 2.076-.852.751.751 0 0 0-1.058-1.065M11.449 15.164l1.386-4.14a.75.75 0 0 0-1.423-.476l-.719 2.148-.827-2.176a.75.75 0 0 0-1.402 0l-.827 2.176-.719-2.148a.75.75 0 1 0-1.422.476l1.384 4.14c.101.3.38.505.697.512h.015c.311 0 .59-.193.701-.484l.872-2.294.872 2.294c.112.296.368.48.716.484a.75.75 0 0 0 .696-.512"
    />
  </Svg>
);
export default IconlystWcBulk;
