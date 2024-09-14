import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiskMusicTwoTone = ({
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
      d="M5.883 21h4.837a2.543 2.543 0 0 0 2.543-2.543V5.543A2.543 2.543 0 0 0 10.72 3H5.883"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.823 14.161a2.16 2.16 0 1 1-4.318 0 2.16 2.16 0 0 1 4.318 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.822 14.162V7.68s.562 1.46 2.07 1.767M15.951 4.76a7.5 7.5 0 0 1 5.546 7.239 7.5 7.5 0 0 1-5.546 7.239"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.951 9.955c.623.37 1.041 1.148 1.041 2.043s-.418 1.684-1.04 2.053"
    />
  </Svg>
);
export default IconlystDiskMusicTwoTone;
