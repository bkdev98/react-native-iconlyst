import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarBoldcurved = ({
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
      d="M17.204 4.263V2.66a.75.75 0 0 0-1.5 0v3.263c0 .26.14.479.343.613a.73.73 0 0 1-.408.137.75.75 0 0 1-.75-.75V3.757a22 22 0 0 0-2.64-.145 20.6 20.6 0 0 0-3.053.205V2.66a.75.75 0 0 0-1.5 0v3.263c0 .26.14.479.343.613a.73.73 0 0 1-.408.137.75.75 0 0 1-.75-.75v-1.53c-2.134.823-3.386 2.354-3.978 4.792h18.695c-.628-2.586-2.016-4.138-4.394-4.922M16.663 14.621a.754.754 0 0 1-.754-.75c0-.414.33-.75.745-.75h.009a.75.75 0 0 1 0 1.5m0 3.853a.754.754 0 0 1-.754-.75c0-.415.33-.75.745-.75h.009a.75.75 0 1 1 0 1.5m-4.4-3.853a.755.755 0 0 1-.754-.75c0-.414.332-.75.746-.75h.009a.75.75 0 0 1 0 1.5m0 3.853a.755.755 0 0 1-.754-.75c0-.415.332-.75.746-.75h.009a.75.75 0 1 1 0 1.5m-4.407-3.853a.755.755 0 0 1-.755-.75c0-.414.332-.75.746-.75h.009a.75.75 0 0 1 0 1.5m0 3.853a.755.755 0 0 1-.755-.75c0-.415.332-.75.746-.75h.009a.75.75 0 1 1 0 1.5m14.014-7.79H2.63c-.101.82-.154 1.713-.154 2.702 0 7.215 2.558 9.773 9.774 9.773 7.217 0 9.775-2.558 9.775-9.773 0-.989-.053-1.882-.155-2.702"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarBoldcurved;
