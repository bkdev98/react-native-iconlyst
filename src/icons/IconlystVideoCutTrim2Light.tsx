import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCutTrim2Light = ({
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
      d="M3.834 16.002V7.999c0-2.797 1.974-4.538 4.769-4.538h8.462c2.795 0 4.769 1.74 4.769 4.538v8.003c0 2.796-1.974 4.536-4.769 4.536H8.603c-2.795 0-4.769-1.75-4.769-4.536M21.829 15.598h-2.191m-3.076 0h-2.191m-3.076 0h-2.19m-3.076 0H3.838M21.829 8.398h-2.191m-3.076 0h-2.191m-3.076 0h-2.19m-3.076 0H3.838"
    />
  </Svg>
);
export default IconlystVideoCutTrim2Light;
