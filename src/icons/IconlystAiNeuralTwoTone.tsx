import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiNeuralTwoTone = ({
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
      d="M19.296 6.61v10.778c0 2.227-1.572 3.612-3.795 3.612H9.499c-2.224 0-3.795-1.385-3.795-3.613V6.611C5.704 4.385 7.276 3 9.5 3h6.002c2.223 0 3.795 1.391 3.795 3.61"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.26 16.457h-3.28l-1.342-1.748"
      opacity={0.4}
    />
    <Circle
      cx={1}
      cy={1}
      r={1}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(.0097 -.99995 -.99995 -.0097 15.09 14.871)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.692 5.955h5.414a1 1 0 0 1 1 1V8.85a1 1 0 0 1-1 1H9.692a1 1 0 0 1-1-1V6.955a1 1 0 0 1 1-1"
      opacity={0.4}
    />
    <Circle
      cx={11.278}
      cy={17.662}
      r={1}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(89.445 11.278 17.662)"
    />
    <Circle
      cx={9.259}
      cy={13.441}
      r={1}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(89.445 9.259 13.441)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.75 17.662h4.519M5.75 13.441h2.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAiNeuralTwoTone;
