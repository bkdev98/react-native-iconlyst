import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarTimeOutline = ({
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
      d="M15.588 2.25a.75.75 0 0 1 .75.75v2.849a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M8.595 2.25a.75.75 0 0 1 .75.75v2.849a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.891 4.856c.89-.847 2.129-1.24 3.535-1.24h7.33c1.408 0 2.647.393 3.536 1.24.895.854 1.339 2.074 1.335 3.53v2.493a.75.75 0 0 1-1.5 0V8.383c.003-1.147-.34-1.935-.87-2.44-.536-.512-1.362-.827-2.502-.827H8.426c-1.136 0-1.963.315-2.501.827-.533.506-.878 1.296-.878 2.442v7.833c0 1.17.348 1.98.883 2.5.54.522 1.364.843 2.496.843h1.849a.75.75 0 0 1 0 1.5H8.426c-1.41 0-2.65-.404-3.54-1.267-.893-.866-1.34-2.103-1.34-3.576V8.385c0-1.456.449-2.677 1.345-3.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.967 13.941a3.155 3.155 0 1 0 .001 6.31 3.155 3.155 0 0 0 0-6.31m-4.654 3.155a4.655 4.655 0 1 1 9.31 0 4.655 4.655 0 0 1-9.31 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.945 15.035a.75.75 0 0 1 .75.75v1.161l.87.52a.75.75 0 0 1-.77 1.287l-1.234-.737a.75.75 0 0 1-.366-.644v-1.587a.75.75 0 0 1 .75-.75M7.252 9.636a.75.75 0 0 1 .75-.75h8.171a.75.75 0 0 1 0 1.5h-8.17a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarTimeOutline;
