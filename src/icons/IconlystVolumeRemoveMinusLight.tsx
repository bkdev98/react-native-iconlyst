import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeRemoveMinusLight = ({
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
      d="M6.43 7.496c.38 0 .825-.107 1.148-.31l2.777-1.735c1.666-1.042 3.7.209 3.818 2.15a60.4 60.4 0 0 1 0 8.8c-.101 1.937-2.152 3.19-3.82 2.15l-2.775-1.737c-.323-.202-.762-.309-1.143-.309-1.424-.107-1.88.06-2.665-.586-.83-.696-.769-2.555-.769-3.92 0-1.362-.063-3.221.769-3.917.78-.648 1.243-.481 2.66-.586"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 11.998h-3.701"
    />
  </Svg>
);
export default IconlystVolumeRemoveMinusLight;
