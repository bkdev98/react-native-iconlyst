import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabase3LevelTwoTone = ({
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
      strokeWidth={1.5}
      d="M19.615 10.067c0 1.752-3.41 3.171-7.615 3.171-4.206 0-7.615-1.42-7.615-3.17M19.615 13.773c0 1.75-3.41 3.171-7.615 3.171-4.206 0-7.615-1.42-7.615-3.17"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.615 6.146V17.83c0 1.751-3.41 3.17-7.615 3.17-4.206 0-7.615-1.419-7.615-3.17V6.146"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.615 6.17c0 1.752-3.41 3.172-7.615 3.172-4.206 0-7.615-1.42-7.615-3.171S7.794 3 12 3s7.615 1.42 7.615 3.17Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabase3LevelTwoTone;
