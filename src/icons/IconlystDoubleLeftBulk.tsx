import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleLeftBulk = ({
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
      d="M10.106 6.406A1.142 1.142 0 1 1 11.61 8.13L6.882 12.25l4.727 4.121a1.144 1.144 0 0 1-1.503 1.723L4.392 13.11a1.142 1.142 0 0 1 0-1.722z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M18.106 6.406A1.142 1.142 0 0 1 20 7.283v10.012H20a1.144 1.144 0 0 1-1.892.799l-5.715-4.983a1.142 1.142 0 0 1 0-1.722z"
    />
  </Svg>
);
export default IconlystDoubleLeftBulk;
