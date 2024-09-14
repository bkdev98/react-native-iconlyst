import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWheelUnlockLight = ({
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
      d="M3.769 10.246H8.29l.905-1.008a2 2 0 0 1 1.49-.665h3.13a2 2 0 0 1 1.49.665l.904 1.008h4.523"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.25 12.885a9 9 0 1 0-9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.473 14.478c4.782 0 6.77 2.516 6.77 7.165"
    />
    <Circle
      cx={12.25}
      cy={13.969}
      r={1.5}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.797 21.885h-2.926c-.802 0-1.453-.65-1.453-1.453V18.79c0-.802.65-1.453 1.453-1.453h2.926c.802 0 1.453.65 1.453 1.453v1.642c0 .802-.65 1.453-1.453 1.453"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.588 17.363v-1.087a1.747 1.747 0 0 1 2.92-1.264"
    />
  </Svg>
);
export default IconlystWheelUnlockLight;
