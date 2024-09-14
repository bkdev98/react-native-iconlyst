import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimeSquareBoldcurved = ({
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
      d="M16.284 14.401a.75.75 0 0 1-1.028.261l-3.391-2.023a.75.75 0 0 1-.366-.644V7.633a.75.75 0 0 1 1.5 0v3.936l3.025 1.804a.75.75 0 0 1 .26 1.028M12.25 2.25C5.051 2.25 2.5 4.801 2.5 12s2.551 9.75 9.75 9.75S22 19.198 22 12s-2.551-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTimeSquareBoldcurved;
