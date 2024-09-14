import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst7daysCalendarBroken = ({
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
      d="M16.268 3.084v1.94M8.739 3.084v1.94M8.195 20.917c-2.534 0-4.116-1.444-4.116-4.079V9.031c0-2.594 1.582-4.005 4.116-4.005h8.626c2.541 0 4.115 1.41 4.108 4.004v7.873c0 2.594-1.574 4.013-4.116 4.013h-4.31"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.603 15.739 1.968-5.355H8.194M16.383 10.084v5.69m-.284-1.455a1.54 1.54 0 1 1-3.08 0 1.54 1.54 0 0 1 3.08 0"
    />
  </Svg>
);
export default Iconlyst7daysCalendarBroken;
