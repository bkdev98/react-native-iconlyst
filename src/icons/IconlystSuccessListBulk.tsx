import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSuccessListBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M7.735 18.733c-.25 0-.49-.094-.677-.264l-2.445-2.25a1 1 0 0 1 1.353-1.472l1.615 1.485 4.008-5.592a.998.998 0 1 1 1.625 1.164l-4.667 6.512a1 1 0 0 1-.812.417M20 12.902h-3.964a1 1 0 1 1 0-2H20a1 1 0 1 1 0 2"
      clipRule="evenodd"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M4 7.219h16a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2M13.544 18.78H20a1 1 0 1 0 0-2h-6.456a1 1 0 1 0 0 2" />
    </G>
  </Svg>
);
export default IconlystSuccessListBulk;
