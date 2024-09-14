import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst24HourDeliveryBroken = ({
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
      d="M18.07 5.117A9.01 9.01 0 0 0 5.63 6.882a9 9 0 0 0-.937 9.517M21.326 9.645a9 9 0 0 1-1.463 8.246 8.995 8.995 0 0 1-12.62 1.613"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.302 2.613.938 2.426-2.413.933M16.188 15.216v-1.29m0 0h1.093m-1.093 0h-3.144l3.144-4.371zM8.22 11.083a1.507 1.507 0 0 1 3.015 0c0 1.883-3.013 1.883-3.013 4.114h3.013"
    />
  </Svg>
);
export default Iconlyst24HourDeliveryBroken;