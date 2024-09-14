import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarSquare2Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.217 2.563H7.782c-3.159 0-5.282 2.222-5.282 5.53v7.95c0 3.302 2.123 5.52 5.282 5.52h8.434c3.16 0 5.284-2.218 5.284-5.52v-7.95c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.75 16.352v-.265a2.324 2.324 0 0 0 2.175-2.315 2.324 2.324 0 0 0-2.324-2.319h-1.139a.891.891 0 0 1 0-1.78h1.357c.333 0 .605.273.605.61v.08c0 .414.336.71.75.71s.75-.376.75-.79a2.11 2.11 0 0 0-2.105-2.11h-.069v-.39a.75.75 0 0 0-1.5 0v.411a2.384 2.384 0 0 0-2.176 2.368 2.393 2.393 0 0 0 2.388 2.391h1.139c.454 0 .824.367.824.82 0 .457-.37.83-.824.83h-1.42a.61.61 0 0 1-.606-.61.75.75 0 0 0-1.5 0 2.11 2.11 0 0 0 2.106 2.11h.069v.25a.75.75 0 0 0 1.5 0"
    />
  </Svg>
);
export default IconlystDollarSquare2Bulk;
