import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerTwoTone = ({
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
      d="M21.5 6.892v10.216A3.89 3.89 0 0 1 17.608 21H7.392A3.89 3.89 0 0 1 3.5 17.108V6.892A3.89 3.89 0 0 1 7.392 3h10.216A3.89 3.89 0 0 1 21.5 6.892M21.49 8.99H3.5M21.489 15.032H3.534"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.81 5.981h.523m5.189 0h3.561M7.81 18.019h.523m5.189 0h3.561M7.81 12.086h.523m5.189 0h3.561"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystServerTwoTone;
