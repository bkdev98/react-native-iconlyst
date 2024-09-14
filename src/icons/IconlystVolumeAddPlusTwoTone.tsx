import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeAddPlusTwoTone = ({
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
      d="M6.93 7.496c.38 0 .825-.107 1.148-.31l2.777-1.735c1.666-1.042 3.7.209 3.819 2.15a60.4 60.4 0 0 1 0 8.799c-.102 1.938-2.153 3.191-3.82 2.15l-2.776-1.736c-.323-.202-.762-.309-1.143-.309-1.424-.107-1.88.06-2.665-.587C3.44 15.223 3.5 13.364 3.5 12c0-1.363-.063-3.222.769-3.918.78-.648 1.243-.481 2.66-.586"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 11.998h-4.09m2.045 2.05V9.95"
    />
  </Svg>
);
export default IconlystVolumeAddPlusTwoTone;
