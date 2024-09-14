import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCutTrimBroken = ({
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
      d="M8.964 20.665H7.785c-2.654 0-4.535-1.665-4.535-4.32V7.652c0-2.663 1.88-4.319 4.535-4.319h1.18M15.54 3.332h1.169c2.664 0 4.536 1.656 4.536 4.32v8.694c0 2.664-1.872 4.319-4.536 4.319h-1.17M12.25 13.912v1.912m0 2.87v1.913m0-12.086v1.913m0-7.043v1.913M6.9 3.45v17.104M3.274 7.691h3.622m.002 4.29H5.517m-2.243 4.284h3.622M17.598 20.554V3.448M19.145 7.695h-1.544m3.648 4.29h-3.653m1.55 4.284H17.6"
    />
  </Svg>
);
export default IconlystVideoCutTrimBroken;
