import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarSignalsLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.949 20.448c-.413.43-.982.672-1.578.672H8.694c-2.643 0-4.294-1.507-4.294-4.255V8.72c0-2.706 1.65-4.179 4.294-4.179h7.62c2.652 0 4.294 1.473 4.286 4.179v6.003c0 .564-.218 1.106-.609 1.514z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.887 21.056V17.97a2.73 2.73 0 0 1 2.723-2.73h2.92M16.14 3.12v2.96M8.87 3.12v2.96M10.573 17.144v-2.86M13.188 17.143v-.773M7.883 17.143v-.773M7.536 13.182l2.758-2.99 3.147 2.06 2.7-2.905"
    />
  </Svg>
);
export default IconlystCalendarSignalsLight;
