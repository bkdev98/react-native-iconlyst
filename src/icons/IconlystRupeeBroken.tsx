import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRupeeBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.5 13.063H8l5.002 5.001M7.998 6.063H9.5c1.126-.001 2.127.53 2.767 1.355M12.998 9.559v.002a3.5 3.5 0 0 1-1.623 2.954M7.998 6.066h8.003M7.998 9.428h8.003"
    />
  </Svg>
);
export default IconlystRupeeBroken;
