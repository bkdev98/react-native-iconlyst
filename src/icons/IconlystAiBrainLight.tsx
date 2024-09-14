import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15.187 19.315c-.99.52-1.297 2.186-1.297 2.186M13.143 17.196c.238.862.198 1.685 1.109 1.886l2.784.628c.652.137 1.235-.189 1.338-.875l.31-2.643a.83.83 0 0 1 .517-.619l.928-.357a.75.75 0 0 0 .334-1.175c-.712-.957-1.718-2.522-1.414-3.899.57-2.584-.531-4.527-2.414-6.115-.925-.78-1.974-1.198-3.093-1.39"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.375 8.227 1.997-4.565 2.054 4.565"
    />
    <Path stroke={props.color} strokeWidth={1.5} d="M3.91 7.05h2.981" />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.629 8.225V3.828"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4.309 12.863c1.455 2.605 2.127 5.568.884 8.402"
    />
  </Svg>
);
export default IconlystAiBrainLight;
