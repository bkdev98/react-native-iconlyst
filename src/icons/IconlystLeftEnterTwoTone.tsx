import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftEnterTwoTone = ({
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
      d="M8.895 4.145h-1.8a3.6 3.6 0 0 0-3.6 3.6v9c0 1.988 1.61 3.6 3.6 3.6h1.8"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.375 9.969-2.28 2.279 2.28 2.28M19.004 4.148a2.5 2.5 0 0 1 2.5 2.5v11.2a2.5 2.5 0 0 1-2.5 2.5h-2.17a2.5 2.5 0 0 1-2.5-2.5v-11.2a2.5 2.5 0 0 1 2.5-2.5zM14.324 12.246H7.1"
    />
  </Svg>
);
export default IconlystLeftEnterTwoTone;
