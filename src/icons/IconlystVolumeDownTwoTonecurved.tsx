import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeDownTwoTonecurved = ({
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
      d="M18.656 8.635a7.57 7.57 0 0 1 0 7.305"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.667 12.287c-.003 1.219 0 2.648 1.006 3.503s1.806.502 3.108.93c1.303.43 3.128 3.077 5.144 1.881 1.09-.774 1.604-2.235 1.604-6.314 0-4.078-.491-5.523-1.604-6.313-2.016-1.195-3.84 1.452-5.144 1.88-1.302.43-2.101.077-3.108.931-1.006.854-1.01 2.284-1.006 3.502"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVolumeDownTwoTonecurved;
