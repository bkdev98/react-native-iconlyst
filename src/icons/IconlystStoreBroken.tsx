import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStoreBroken = ({
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
      d="M4.304 4.63v2.045l-1.037 5.093a.842.842 0 0 0 .825 1.01H20.41c.532 0 .93-.49.824-1.01l-1.058-5.174.063-1.947a.84.84 0 0 0-.841-.859H5.146a.84.84 0 0 0-.842.842"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.153 6.677 13.022-.001M4.404 12.777v6.284a1.15 1.15 0 0 0 1.15 1.15h7.897a1.15 1.15 0 0 0 1.15-1.15v-3.597M20.117 20.212v-7.435"
    />
  </Svg>
);
export default IconlystStoreBroken;
