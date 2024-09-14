import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageOutlinecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M5.844 10.534c.356.42 3.547 4.118 6.167 4.118 2.623 0 5.782-3.7 6.133-4.122a.75.75 0 0 0-1.152-.96c-1.156 1.384-3.53 3.582-4.98 3.582-1.453 0-3.85-2.2-5.02-3.586a.75.75 0 0 0-1.147.967"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M1.727 13c0 7.285 2.689 9.867 10.273 9.867 7.585 0 10.274-2.582 10.274-9.867S19.584 3.133 12 3.133 1.727 5.715 1.727 13m1.5 0c0-6.412 2.05-8.367 8.773-8.367 6.724 0 8.774 1.955 8.774 8.367s-2.05 8.367-8.774 8.367S3.227 19.412 3.227 13"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessageOutlinecurved;
