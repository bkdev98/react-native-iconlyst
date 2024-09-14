import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiNeuralLight = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.796 6.61v10.778C18.796 19.615 17.224 21 15 21H8.999c-2.224 0-3.795-1.385-3.795-3.613V6.611C5.204 4.385 6.776 3 9 3h6.002c2.223 0 3.795 1.391 3.795 3.61"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.76 16.457h-3.28l-1.342-1.748"
    />
    <Circle
      cx={1}
      cy={1}
      r={1}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(.0097 -.99995 -.99995 -.0097 14.59 14.871)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.192 5.955h5.414a1 1 0 0 1 1 1V8.85a1 1 0 0 1-1 1H9.192a1 1 0 0 1-1-1V6.955a1 1 0 0 1 1-1"
    />
    <Circle
      cx={10.778}
      cy={17.662}
      r={1}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(89.445 10.778 17.662)"
    />
    <Circle
      cx={8.759}
      cy={13.441}
      r={1}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(89.445 8.759 13.441)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.25 17.662h4.519M5.25 13.441h2.5"
    />
  </Svg>
);
export default IconlystAiNeuralLight;
