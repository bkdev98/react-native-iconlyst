import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaintingPaletteBroken = ({
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
      d="M3.398 11.673c.683-4.721 4.309-7.741 9.114-7.73 2.538.006 5.118.832 6.785 2.832 1.645 1.973 2.495 5.209.932 7.464-.995 1.434-2.676 2.146-4.365 2.334-1.67.188-2.27 1.296-1.534 2.94.54 1.21.01 2.292-1.507 2.407-4.11.31-7.762-2.474-9.034-6.183"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.387 8.384v.053m.216-.042a.218.218 0 1 1-.435 0 .218.218 0 0 1 .435 0M14.004 7.292v.054m.216-.042a.218.218 0 1 1-.435 0 .218.218 0 0 1 .435 0M17.526 10.92v.053m.216-.042a.218.218 0 1 1-.435 0 .218.218 0 0 1 .435 0M6.842 12.487v.054m.216-.042a.218.218 0 1 1-.435 0 .218.218 0 0 1 .435 0"
    />
  </Svg>
);
export default IconlystPaintingPaletteBroken;