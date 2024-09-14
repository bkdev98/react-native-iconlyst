import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMenu3TwoTone = ({
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
      d="M13.042 20.02H7.088a3.11 3.11 0 0 1-3.108-3.108V7.088A3.11 3.11 0 0 1 7.088 3.98h5.954a3.11 3.11 0 0 1 3.107 3.108v9.824a3.11 3.11 0 0 1-3.107 3.108"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.063 6.543v10.915M21.98 8.922v6.155"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMenu3TwoTone;
