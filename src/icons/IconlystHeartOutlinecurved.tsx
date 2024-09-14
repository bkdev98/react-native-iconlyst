import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartOutlinecurved = ({
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
      d="M17.881 10.7h.025a.75.75 0 0 0 .75-.726c.058-1.745-.983-3.028-2.59-3.193a.76.76 0 0 0-.824.67.75.75 0 0 0 .67.822c.811.083 1.276.7 1.244 1.651a.75.75 0 0 0 .725.775"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.41 12.639c1.793 5.584 7.786 8.597 9.842 8.597 2.071 0 8.084-3.014 9.84-8.598 1.15-3.592-.125-8.28-4.19-9.59-1.733-.555-4.106-.351-5.672 1.242-1.45-1.394-3.607-1.897-5.638-1.241-4.062 1.307-5.335 5.996-4.184 9.589zm9.842 7.097c-1.185 0-6.768-2.43-8.415-7.555-.93-2.908.033-6.68 3.215-7.705 1.391-.45 3.423-.197 4.592 1.417a.8.8 0 0 0 .624.309.75.75 0 0 0 .61-.336c1.066-1.618 3.114-1.854 4.564-1.39 3.185 1.026 4.151 4.798 3.22 7.708-1.61 5.123-7.216 7.552-8.41 7.552"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartOutlinecurved;
