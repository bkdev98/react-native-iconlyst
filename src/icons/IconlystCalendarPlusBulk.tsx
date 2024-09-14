import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarPlusBulk = ({
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
      fillRule="evenodd"
      d="M8.774 21.623c-3 0-4.79-1.78-4.79-4.76v-5.64c0-.11.09-.2.2-.2h16.8c.11 0 .2.09.2.2v5.71c0 2.94-1.79 4.69-4.79 4.69z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.974 4.085c1.22.11 2.25.52 2.98 1.24.81.81 1.23 1.99 1.23 3.4v.6a.2.2 0 0 1-.2.2h-16.8a.2.2 0 0 1-.2-.2v-.6c0-2.293 1.104-3.84 3.013-4.413a.193.193 0 0 1 .247.189v1.464c0 .41.34.75.75.75.07 0 .14-.02.2-.04v-3.55a.749.749 0 1 1 1.5 0v.92h4.63c.11 0 .2.09.2.2v1.72c0 .41.33.75.75.75a.6.6 0 0 0 .177-.033l.023-.007v-3.55a.749.749 0 1 1 1.5 0z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.834 15.473h-1.5a.75.75 0 0 0 0 1.5h1.5v1.5a.75.75 0 0 0 1.5 0v-1.5h1.5a.75.75 0 0 0 0-1.5h-1.5v-1.5a.75.75 0 0 0-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarPlusBulk;
