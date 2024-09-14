import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFishBoneLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.897 3.3c2.868 2.03 3.881 5.16 3.978 6.472H7.918c.097-1.312 1.11-4.443 3.979-6.471M8.48 21.3c1.13-.069 3.417-1.345 3.417-3.47 0 2.125 2.287 3.401 3.416 3.47M11.898 17.9V9.77M11.898 6.8v-.01M8.036 13.47c3.077-.968 4.736-.953 7.81 0M9.86 16.263c1.64-.516 2.523-.508 4.16 0M18.389 18.4l.71.711M20.169 15.174l-1.006.001M18.35 11.956l.75-.75M5.611 18.417l-.71.711M3.832 15.19l1.005.002M5.65 11.973l-.75-.75"
    />
  </Svg>
);
export default IconlystFishBoneLight;
