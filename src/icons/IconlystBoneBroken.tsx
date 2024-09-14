import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoneBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.526 10.269H5.344M6.566 6.7l1.125 1.124M10.16 6.635V5.453M13.773 17.514v1.182M16.207 16.342l1.125 1.125M17.406 13.88h1.182M11.973 8.933l1.803-1.803a2.419 2.419 0 1 1 3.42-3.421c.688.686.869 1.682.556 2.538a2.41 2.41 0 0 1 2.539.556M14.568 10.452l.486 1.562 1.804-1.805.012.015a2.42 2.42 0 0 0 4.045-1.076M3.709 17.198a2.42 2.42 0 0 0 2.538.556 2.41 2.41 0 0 0 .556 2.538 2.418 2.418 0 1 0 3.42-3.421q-.007-.006-.014-.012l2.265-2.264M11.717 12.58l-2.324-1.066-2.263 2.263a2.418 2.418 0 0 0-4.109 1.391"
    />
  </Svg>
);
export default IconlystBoneBroken;
