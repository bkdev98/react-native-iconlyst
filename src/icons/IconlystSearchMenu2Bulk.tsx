import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMenu2Bulk = ({
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
      d="M3.139 9.868h1.59a.75.75 0 0 0 0-1.5H3.14a.75.75 0 0 0 0 1.5M3.139 14.908h2.598a.75.75 0 0 0 0-1.5H3.139a.75.75 0 0 0 0 1.5M11.223 18.548H3.139a.75.75 0 0 0 0 1.5h8.084a.75.75 0 0 0 0-1.5M21.389 17.051l-1.502-1.499a.758.758 0 0 0-1.07 1.073l1.502 1.5a.758.758 0 0 0 1.07-1.074"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.92 3.953a6.377 6.377 0 0 0-6.376 6.378 6.376 6.376 0 1 0 12.753 0 6.38 6.38 0 0 0-6.377-6.378"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSearchMenu2Bulk;
