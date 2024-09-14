import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerLight = ({
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
      d="M21 6.892v10.216A3.89 3.89 0 0 1 17.108 21H6.892A3.89 3.89 0 0 1 3 17.108V6.892A3.89 3.89 0 0 1 6.892 3h10.216A3.89 3.89 0 0 1 21 6.892M20.99 8.99H3M20.989 15.032H3.034M7.31 5.981h.523m5.189 0h3.561M7.31 18.019h.523m5.189 0h3.561M7.31 12.086h.523m5.189 0h3.561"
    />
  </Svg>
);
export default IconlystServerLight;
