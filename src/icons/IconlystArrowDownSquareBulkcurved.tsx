import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownSquareBulkcurved = ({
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
      d="M12.25 2.25C5.052 2.25 2.5 4.802 2.5 12s2.552 9.75 9.75 9.75S22 19.198 22 12s-2.552-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.25 16.836c1.462 0 3.545-2.865 4.372-4.096a.75.75 0 1 0-1.244-.837c-.797 1.185-1.716 2.287-2.378 2.91V7.914a.75.75 0 0 0-1.5 0v6.892c-.669-.625-1.585-1.723-2.378-2.903a.75.75 0 0 0-1.244.837c.827 1.231 2.91 4.096 4.372 4.096"
    />
  </Svg>
);
export default IconlystArrowDownSquareBulkcurved;
