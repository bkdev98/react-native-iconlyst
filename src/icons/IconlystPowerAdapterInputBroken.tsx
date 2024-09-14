import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerAdapterInputBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.01 14.434h2.072c.709 0 1.283.574 1.283 1.282v1.71h-4.636v-1.71c0-.708.574-1.282 1.282-1.282"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.668 17.426v2.087h-3.293v-2.087M8.158 7.857A4.857 4.857 0 0 1 13.015 3h.06c1.64 0 3.09.813 3.97 2.059M17.932 7.857v6.552M3.635 13.231v-2.87A2.496 2.496 0 0 1 6.13 7.866h4.03a2.497 2.497 0 0 1 2.496 2.497v8.14A2.497 2.497 0 0 1 10.16 21H6.13a2.496 2.496 0 0 1-2.495-2.496v-2.035"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.138 16.764 1.268-2.328H6.885l1.267-2.33"
    />
  </Svg>
);
export default IconlystPowerAdapterInputBroken;
