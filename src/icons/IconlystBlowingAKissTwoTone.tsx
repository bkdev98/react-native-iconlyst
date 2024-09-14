import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBlowingAKissTwoTone = ({
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
      d="M21.072 9.248A9 9 0 0 0 12.5 3a9 9 0 1 0 3.762 17.179"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.617 9.81c.265-.345.655-.56 1.088-.56s.823.215 1.088.56M14.086 9.81c.265-.345.655-.56 1.088-.56s.823.215 1.088.56M12.438 16.663c.682-.21 1.119-.531 1.119-.892 0-.379-.767-.805-.767-.805s.767-.407.767-.766c0-.31-.422-.587-1.083-.77"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.627 16.733c.84-.639 1.19-1.795.521-2.678a1.8 1.8 0 0 0-1.49-.71 1.81 1.81 0 0 0-1.175-1.156c-1.059-.327-2.027.396-2.34 1.404-.503 1.591.625 3.879.625 3.879s2.511.283 3.859-.74"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBlowingAKissTwoTone;
