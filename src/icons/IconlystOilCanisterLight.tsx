import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOilCanisterLight = ({
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
      d="M12.958 7.272h3.757M16.742 21.885H7.758a2.99 2.99 0 0 1-2.988-2.989v-7.945c0-.88.387-1.714 1.059-2.282l4.553-3.85a3 3 0 0 1 1.93-.706h4.43a2.99 2.99 0 0 1 2.989 2.989v11.794a2.99 2.99 0 0 1-2.989 2.989M9.706 5.358 8.64 4.293a1.395 1.395 0 0 0-1.887-.079l-1.36 1.15a1.395 1.395 0 0 0-.086 2.052l.891.891M15.911 11.275l-1.81 1.81M8.59 18.597l1.797-1.797M8.59 11.275l1.81 1.81m5.511 5.512L14.114 16.8"
    />
    <Rect
      width={4.285}
      height={4.285}
      x={10.108}
      y={12.794}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={1}
    />
  </Svg>
);
export default IconlystOilCanisterLight;
