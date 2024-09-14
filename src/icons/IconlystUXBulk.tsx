import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUXBulk = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
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
      fill={props.color}
      d="M2.5 12a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M18.21 9.836a.75.75 0 0 0-1.22-.871L15.6 10.91l-1.39-1.945a.75.75 0 1 0-1.22.871l1.688 2.364-1.688 2.365a.75.75 0 0 0 1.22.871l1.39-1.945 1.39 1.945a.75.75 0 0 0 1.22-.871L16.522 12.2zM7.35 9.4a.75.75 0 0 0-1.5 0v3.55a3 3 0 1 0 6 0V9.4a.75.75 0 0 0-1.5 0v3.55a1.5 1.5 0 0 1-3 0z"
    />
  </Svg>
);
export default IconlystUXBulk;
