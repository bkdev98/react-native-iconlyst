import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleTicketBroken = ({
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
      d="m19.55 12.206-1.093 4.105a3.06 3.06 0 0 1-3.751 2.165l-4.62-1.245a3.08 3.08 0 0 1-2.165-3.752l2.184-8.201a3.07 3.07 0 0 1 3.761-2.172l4.611 1.244A3.08 3.08 0 0 1 20.643 8.1l-.273 1.027"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.813 6.375H6.822a3.067 3.067 0 0 0-3.067 3.068v4.246M14.66 18.466v.713a1.823 1.823 0 0 1-1.822 1.823H6.822a3.067 3.067 0 0 1-3.067-3.066v-1.123"
    />
  </Svg>
);
export default IconlystDoubleTicketBroken;
