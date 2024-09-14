import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaintingPaletteTwoTone = ({
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
      d="M13.012 3.943c2.539.006 5.118.832 6.785 2.832 1.645 1.973 2.495 5.209.932 7.464-.994 1.434-2.676 2.146-4.365 2.334-1.67.188-2.27 1.296-1.534 2.94.54 1.21.01 2.292-1.506 2.407-5.524.417-10.22-4.755-9.425-10.248.683-4.72 4.308-7.74 9.113-7.729"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.887 8.384v.053m.216-.042a.218.218 0 1 1-.435 0 .218.218 0 0 1 .435 0M14.504 7.292v.054m.216-.042a.218.218 0 1 1-.435 0 .218.218 0 0 1 .435 0M18.026 10.92v.053m.216-.042a.218.218 0 1 1-.435 0 .218.218 0 0 1 .435 0M7.342 12.487v.054m.216-.042a.218.218 0 1 1-.435 0 .218.218 0 0 1 .435 0"
    />
  </Svg>
);
export default IconlystPaintingPaletteTwoTone;
