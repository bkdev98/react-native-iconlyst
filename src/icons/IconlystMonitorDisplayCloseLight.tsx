import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayCloseLight = ({
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
      d="M4.291 5.45a3.84 3.84 0 0 0-.516 1.923v5.22a3.855 3.855 0 0 0 3.856 3.856h7.66M7.875 20.193h8.99M10.364 16.445l-.61 3.748M14.107 16.445l.61 3.748M3 4.16l16.324 16.324M7.7 3.518h9.444A3.855 3.855 0 0 1 21 7.372v5.221a3.8 3.8 0 0 1-1.331 2.894"
    />
  </Svg>
);
export default IconlystMonitorDisplayCloseLight;
