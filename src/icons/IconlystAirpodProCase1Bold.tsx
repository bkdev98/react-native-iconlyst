import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodProCase1Bold = ({
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
      d="M2.5 9.123A5.623 5.623 0 0 1 8.124 3.5h7.753A5.62 5.62 0 0 1 21.5 9.123v.059h-19zM2.5 10.682v4.64a5.624 5.624 0 0 0 5.624 5.624h7.753a5.623 5.623 0 0 0 5.623-5.624v-4.64h-5.068v.283c0 1.171-.95 2.122-2.122 2.122H9.693a2.12 2.12 0 0 1-2.12-2.122v-.283z"
    />
  </Svg>
);
export default IconlystAirpodProCase1Bold;
