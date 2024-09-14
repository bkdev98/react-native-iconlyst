import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserSettingBroken = ({
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
      d="M17 14.516v.914m0 3.657V20m-2.377-4.114.789.457m3.177 1.828.79.458m-4.756 0 .789-.458m3.177-1.828.79-.457m-1.085.077a1.829 1.829 0 1 1-2.587 2.587 1.829 1.829 0 0 1 2.587-2.587M11.607 14.754c-3.339 0-6.185.504-6.185 2.525s2.83 2.541 6.185 2.541M7.698 7.93A3.93 3.93 0 1 0 8.71 5.294"
    />
  </Svg>
);
export default IconlystUserSettingBroken;
