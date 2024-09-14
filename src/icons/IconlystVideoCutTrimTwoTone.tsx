import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCutTrimTwoTone = ({
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
      d="M9.214 20.665H8.035C5.381 20.665 3.5 19 3.5 16.345V7.652c0-2.663 1.88-4.319 4.535-4.319h1.18M15.79 3.332h1.169c2.664 0 4.536 1.656 4.536 4.32v8.694c0 2.664-1.872 4.319-4.536 4.319h-1.17M12.5 13.912v1.912m0 2.87v1.913m0-12.086v1.913m0-7.043v1.913"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.15 3.45v17.104M3.526 7.69h3.621m.003 4.29H3.52m.004 4.284h3.621M17.848 20.554V3.448m3.648 4.247h-3.645m3.648 4.289h-3.653m3.65 4.284h-3.645"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystVideoCutTrimTwoTone;
