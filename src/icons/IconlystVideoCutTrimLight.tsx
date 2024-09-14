import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCutTrimLight = ({
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
      d="M8.714 20.665H7.535C4.881 20.665 3 19 3 16.345V7.652c0-2.663 1.88-4.319 4.535-4.319h1.18M15.29 3.332h1.169c2.664 0 4.536 1.656 4.536 4.32v8.694c0 2.664-1.872 4.319-4.536 4.319h-1.17M12 13.912v1.912m0 2.87v1.913m0-12.086v1.913m0-7.043v1.913M6.65 3.45v17.104M3.025 7.691h3.621m.003 4.29H3.02m.004 4.284h3.621M17.348 20.554V3.448M20.996 7.695h-3.645m3.648 4.29h-3.653m3.65 4.284h-3.645"
    />
  </Svg>
);
export default IconlystVideoCutTrimLight;
