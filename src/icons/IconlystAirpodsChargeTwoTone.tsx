import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodsChargeTwoTone = ({
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
      d="M14.03 11.49V6.865c0-2.122 2.058-3.96 4.18-3.862a3.68 3.68 0 0 1 2.746 1.456c.243.321.362.72.362 1.122v2.096c0 .402-.118.8-.362 1.12a3.94 3.94 0 0 1-3.128 1.538h-1.007v.348M3.5 10.774c0 .402.119.8.362 1.12A3.95 3.95 0 0 0 6.99 13.43h1.007v5.52a1.396 1.396 0 0 0 2.792 0v-8.99c0-2.123-2.058-3.96-4.18-3.863a3.68 3.68 0 0 0-2.746 1.457A1.86 1.86 0 0 0 3.5 8.677zM6.057 9.171v1.223M18.762 6.077v1.222"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.57 20.806a3.93 3.93 0 1 0 .002-7.859 3.93 3.93 0 0 0-.001 7.86"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.722 18.445.854-1.569h-2.008l.853-1.57"
    />
  </Svg>
);
export default IconlystAirpodsChargeTwoTone;
