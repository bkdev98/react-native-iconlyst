import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdCircle2Bulk = ({
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
      d="M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.527 16.18a.75.75 0 0 0 .75-.75v-3.36a5.26 5.26 0 0 0-.962-3.04.749.749 0 1 0-1.227.861c.451.643.69 1.395.69 2.18v3.36c0 .413.335.75.75.75M13.461 8.584a.75.75 0 1 0 .568-1.388c-2.467-1.007-5.342.02-6.617 2.264a.75.75 0 0 0 1.304.741c.913-1.606 2.96-2.348 4.745-1.617M13.745 17.21a.75.75 0 0 0 .75-.75v-4.23a2.533 2.533 0 0 0-5.065 0v.48a.75.75 0 0 0 1.5 0v-.48a1.032 1.032 0 0 1 2.065 0v4.23c0 .414.336.75.75.75"
    />
    <Path
      fill={props.color}
      d="M10.18 17.21a.75.75 0 0 0 .75-.75v-1.61a.75.75 0 0 0-1.5 0v1.61c0 .414.336.75.75.75M7.477 16.18a.75.75 0 0 0 .75-.75v-2.8a.75.75 0 0 0-1.5 0v2.8c0 .414.336.75.75.75"
    />
  </Svg>
);
export default IconlystTouchIdCircle2Bulk;
