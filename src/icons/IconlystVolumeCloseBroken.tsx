import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeCloseBroken = ({
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
      d="M21.246 10.327 17.9 13.671m3.349.005-3.35-3.35M3.342 9.652c.095-.665.289-1.245.678-1.57.779-.648 1.243-.481 2.66-.586.38 0 .825-.107 1.148-.31l2.777-1.735c1.666-1.042 3.7.209 3.819 2.15a60.4 60.4 0 0 1 0 8.799c-.102 1.938-2.153 3.191-3.82 2.15l-2.776-1.736c-.323-.202-.762-.309-1.143-.309-1.424-.107-1.88.06-2.665-.587-.639-.534-.75-1.757-.767-2.913"
    />
  </Svg>
);
export default IconlystVolumeCloseBroken;
