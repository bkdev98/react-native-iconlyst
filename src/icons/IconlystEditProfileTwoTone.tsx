import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditProfileTwoTone = ({
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
      d="m16.172 19.806-.75.126a.84.84 0 0 1-.975-.919l.084-.775c.04-.373.197-.724.447-1.006l2.955-3.253a1.03 1.03 0 0 1 1.455-.056l.69.639a1.03 1.03 0 0 1 .057 1.455l-2.92 3.214c-.272.305-.64.508-1.043.575"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.142 7.996a3.996 3.996 0 1 1-7.992 0 3.996 3.996 0 0 1 7.992 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.146 14.875c-3.375 0-6.254.51-6.254 2.553s2.862 2.571 6.254 2.571"
    />
  </Svg>
);
export default IconlystEditProfileTwoTone;
