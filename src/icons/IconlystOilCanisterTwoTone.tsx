import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOilCanisterTwoTone = ({
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
      d="M12.958 6.387h3.757"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.742 21H7.758a2.99 2.99 0 0 1-2.988-2.989v-7.944c0-.88.387-1.715 1.059-2.283l4.553-3.85a3 3 0 0 1 1.93-.705h4.43a2.99 2.99 0 0 1 2.989 2.988v11.794A2.99 2.99 0 0 1 16.742 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.706 4.473 8.64 3.41a1.395 1.395 0 0 0-1.887-.08L5.394 4.48a1.395 1.395 0 0 0-.086 2.051l.891.892M15.911 10.39l-1.81 1.81M8.59 17.712l1.797-1.797M8.59 10.39l1.81 1.81m5.511 5.512-1.797-1.797"
      opacity={0.4}
    />
    <Rect
      width={4.285}
      height={4.285}
      x={10.108}
      y={11.909}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={1}
    />
  </Svg>
);
export default IconlystOilCanisterTwoTone;
