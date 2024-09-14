import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonFlagLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.506 17.486c3.778-4.336 13.316-4.398 17.218 0M10.645 16.429V4.906M12.114 21.074v.01M5.483 9.778v.01M18.658 3.084v.01M10.645 6.827s.698-.679 1.963-.679c1.264 0 1.619.679 2.883.679s2.024-.679 2.024-.679v3.936s-.759.678-2.024.678c-1.264 0-1.619-.678-2.883-.678s-1.963.678-1.963.678"
    />
    <Circle
      cx={15.628}
      cy={18.948}
      r={1.23}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.838 18.948a1.23 1.23 0 1 0-2.46 0"
    />
  </Svg>
);
export default IconlystMoonFlagLight;
