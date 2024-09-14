import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownSquareBoldcurved = ({
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
      d="M16.622 12.74c-.827 1.231-2.91 4.096-4.372 4.096s-3.545-2.865-4.372-4.096a.749.749 0 1 1 1.244-.837c.793 1.18 1.709 2.278 2.378 2.903V7.914a.75.75 0 0 1 1.5 0v6.899c.662-.623 1.581-1.725 2.378-2.91a.75.75 0 1 1 1.244.837M12.25 2.25C5.052 2.25 2.5 4.802 2.5 12s2.552 9.75 9.75 9.75S22 19.198 22 12s-2.552-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDownSquareBoldcurved;
