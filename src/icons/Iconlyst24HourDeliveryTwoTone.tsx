import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst24HourDeliveryTwoTone = ({
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
      d="M21.325 9.644a9 9 0 0 1-1.462 8.246 8.995 8.995 0 0 1-12.621 1.613C3.314 16.465 2.59 10.81 5.629 6.882A9.01 9.01 0 0 1 18.07 5.117"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.302 2.613.938 2.426-2.413.933"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.188 15.216v-1.29h1.093-4.237l3.144-4.371v4.372M8.22 11.081a1.507 1.507 0 0 1 3.015 0c0 1.883-3.013 1.883-3.013 4.114h3.013"
      opacity={0.4}
    />
  </Svg>
);
export default Iconlyst24HourDeliveryTwoTone;
