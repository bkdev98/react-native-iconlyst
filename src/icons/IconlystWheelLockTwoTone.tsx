import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWheelLockTwoTone = ({
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
      d="M3.768 10.246h4.523l.905-1.008a2 2 0 0 1 1.489-.665h3.131a2 2 0 0 1 1.49.665l.904 1.008h4.523"
      opacity={0.4}
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
      d="M3.472 14.478c4.783 0 6.77 2.516 6.77 7.165"
      opacity={0.4}
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
      d="M19.797 21.885H16.87c-.802 0-1.452-.65-1.452-1.453V18.79c0-.802.65-1.453 1.453-1.453h2.926c.802 0 1.453.65 1.453 1.453v1.642c0 .802-.65 1.453-1.453 1.453"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.08 17.363v-1.08a1.748 1.748 0 0 0-3.492-.007v1.087"
    />
  </Svg>
);
export default IconlystWheelLockTwoTone;