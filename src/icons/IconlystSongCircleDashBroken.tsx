import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongCircleDashBroken = ({
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
      d="M17.811 19.087a8.96 8.96 0 0 1-4.878 1.887 9 9 0 0 1-2.645-.193M8.894 13.705a2.103 2.103 0 1 1 1.168 2.143M7.1 19.362a9 9 0 0 1-3.12-3.782M3.577 9.547a9 9 0 0 0-.299 3.034M5.027 6.634A9 9 0 0 1 6.48 5.082M20.533 8.487a9.01 9.01 0 0 0-8.64-5.48M19.897 16.724a8.9 8.9 0 0 0 1.345-5.06"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.07 14.207.756-6.266s.371 1.477 1.795 1.95"
    />
  </Svg>
);
export default IconlystSongCircleDashBroken;
