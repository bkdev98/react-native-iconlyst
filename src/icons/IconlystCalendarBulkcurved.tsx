import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarBulkcurved = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M21.87 10.684H2.63c-.101.82-.154 1.713-.154 2.702 0 7.215 2.558 9.773 9.774 9.773 7.217 0 9.775-2.558 9.775-9.773 0-.989-.053-1.882-.155-2.702"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.909 13.871c0 .414.34.75.754.75a.75.75 0 0 0 0-1.5h-.01a.746.746 0 0 0-.744.75M15.909 17.724c0 .414.34.75.754.75a.75.75 0 0 0 0-1.5h-.01a.745.745 0 0 0-.744.75M11.509 13.871c0 .414.34.75.755.75a.75.75 0 0 0 0-1.5h-.01a.747.747 0 0 0-.745.75M11.509 17.724c0 .414.34.75.755.75a.75.75 0 0 0 0-1.5h-.01a.746.746 0 0 0-.745.75M7.1 13.871c0 .414.342.75.756.75a.75.75 0 0 0 0-1.5h-.01a.747.747 0 0 0-.745.75M7.1 17.724c0 .414.342.75.756.75a.75.75 0 0 0 0-1.5h-.01a.746.746 0 0 0-.745.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.203 4.263V2.66a.75.75 0 0 0-1.5 0v3.263c0 .26.141.479.343.613a.73.73 0 0 1-.408.137.75.75 0 0 1-.75-.75V3.757a22 22 0 0 0-2.639-.145c-1.134 0-2.145.068-3.054.205V2.66a.75.75 0 0 0-1.5 0v3.263c0 .26.141.479.343.613a.73.73 0 0 1-.408.137.75.75 0 0 1-.75-.75v-1.53c-2.134.823-3.386 2.354-3.978 4.792h18.695c-.628-2.586-2.016-4.138-4.394-4.922"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarBulkcurved;
