import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMultitaskingBulk = ({
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
      d="M20.102 20.25H4.895a.75.75 0 0 0 0 1.5h15.207a.75.75 0 0 0 0-1.5M4.895 3.75h15.207a.75.75 0 0 0 0-1.5H4.895a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.904 5.82H7.095c-2 0-3.628 1.628-3.628 3.63v5.073a3.633 3.633 0 0 0 3.628 3.63h10.809a3.633 3.633 0 0 0 3.629-3.63V9.45a3.633 3.633 0 0 0-3.629-3.629"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMultitaskingBulk;
