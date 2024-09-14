import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryRefreshBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.63 19.18a3.352 3.352 0 1 0-.127-3.24"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.356 15.94H15.5v-1.846M21.77 10.36l-.018-2.333c-.007-2.93-1.837-4.996-4.769-4.988l-8.389.02c-2.923.006-4.751 2.08-4.744 5.01l.009 3.952M3.868 15.973c.007 2.93 1.836 4.994 4.769 4.988l3.944-.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.625 6.04.016 3.64-2.82-.919-2.836.935-.008-6.632"
    />
  </Svg>
);
export default IconlystDeliveryRefreshBroken;
