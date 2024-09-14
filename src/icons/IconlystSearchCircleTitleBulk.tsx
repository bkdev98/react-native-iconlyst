import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchCircleTitleBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.237 10.342c.549 0 1.082.065 1.595.185.206.049.407-.115.379-.325-.617-4.647-4.599-8.245-9.411-8.245-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5c.305 0 .605-.02.901-.05.211-.023.325-.256.232-.446a7 7 0 0 1-.723-3.091c0-3.875 3.152-7.028 7.027-7.028"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M7.036 9.01h3.115a.75.75 0 0 0 0-1.5H7.036a.75.75 0 0 0 0 1.5"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.057 19.654a2.42 2.42 0 0 1-2.42-2.42 2.42 2.42 0 0 1 2.42-2.42 2.42 2.42 0 0 1 2.419 2.42 2.42 2.42 0 0 1-2.42 2.42m4.423 1.108-1.242-1.24a3.9 3.9 0 0 0 .738-2.287 3.924 3.924 0 0 0-3.92-3.92 3.924 3.924 0 0 0-3.918 3.92 3.923 3.923 0 0 0 3.919 3.919c.767 0 1.482-.223 2.087-.605l1.277 1.276a.751.751 0 0 0 1.059-1.063"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchCircleTitleBulk;
