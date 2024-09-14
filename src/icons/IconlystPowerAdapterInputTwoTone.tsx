import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerAdapterInputTwoTone = ({
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
      d="M17.51 14.434h2.072c.709 0 1.283.574 1.283 1.282v1.71h-4.636v-1.71c0-.708.574-1.282 1.282-1.282"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.168 17.426v2.087h-3.293v-2.087M18.432 14.41V7.856A4.857 4.857 0 0 0 13.575 3h-.06a4.857 4.857 0 0 0-4.857 4.857"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.156 18.503v-8.141a2.497 2.497 0 0 0-2.497-2.497H6.63a2.496 2.496 0 0 0-2.495 2.497v8.14A2.496 2.496 0 0 0 6.63 21h4.03a2.497 2.497 0 0 0 2.496-2.496"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.638 16.764 1.268-2.328H7.385l1.267-2.33"
    />
  </Svg>
);
export default IconlystPowerAdapterInputTwoTone;
