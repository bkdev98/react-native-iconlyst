import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonalBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M6.176 5a2.93 2.93 0 0 1 2.542-1.47H12v17.24H8.718a2.94 2.94 0 0 1-2.543-1.473L2.893 13.62a2.93 2.93 0 0 1-.001-2.937z"
    />
    <Path
      fill={props.color}
      d="M17.824 5a2.93 2.93 0 0 0-2.542-1.47H12v17.24h3.282a2.94 2.94 0 0 0 2.543-1.473l3.282-5.678c.527-.92.527-2.018.001-2.937z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHexagonalBulk;
