import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.865 6.417c-2.203-.448-3.066-2.566-3.1-2.651a.998.998 0 0 0-1.933.359v8.145a4.7 4.7 0 0 0-2.749-.892 4.754 4.754 0 0 0-4.749 4.749 4.754 4.754 0 0 0 4.749 4.748 4.75 4.75 0 0 0 4.746-4.733q.002-.008.003-.015v-7.52c1.434.345 2.97-.194 3.183-.273a1 1 0 0 0-.15-1.917"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongBold;
