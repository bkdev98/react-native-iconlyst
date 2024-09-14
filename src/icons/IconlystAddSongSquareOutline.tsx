import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddSongSquareOutline = ({
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
      fill={props.color}
      d="M15.942 21.441h-8.1c-3.2 0-5.342-2.242-5.342-5.578V8.231c0-3.336 2.146-5.577 5.342-5.577h5.3a.75.75 0 1 1 0 1.5h-5.3C5.508 4.154 4 5.754 4 8.231v7.632c0 2.477 1.508 4.078 3.842 4.078h8.1c2.335 0 3.844-1.6 3.844-4.078v-4.829a.75.75 0 1 1 1.5 0v4.83c0 3.335-2.147 5.577-5.344 5.577"
    />
    <Path
      fill={props.color}
      d="M10.644 16.801a2.825 2.825 0 1 1-.005-5.65 2.825 2.825 0 0 1 .005 5.65m0-4.148a1.326 1.326 0 0 0-1.04 2.141c.216.276.533.455.882.497a1.323 1.323 0 1 0 .317-2.628 1 1 0 0 0-.163-.013zM18.914 8.73a.75.75 0 0 1-.75-.75V6.395h-1.586a.75.75 0 1 1 0-1.5h1.586V3.309a.75.75 0 1 1 1.5 0v1.585h1.586a.75.75 0 0 1 0 1.5h-1.586V7.98a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M12.7 14.975h-.091a.75.75 0 0 1-.654-.835l.745-6.18a.75.75 0 0 1 1.472-.094 2.14 2.14 0 0 0 1.276 1.385.75.75 0 1 1-.473 1.424 3.3 3.3 0 0 1-1.028-.562l-.507 4.2a.75.75 0 0 1-.74.662"
    />
  </Svg>
);
export default IconlystAddSongSquareOutline;
