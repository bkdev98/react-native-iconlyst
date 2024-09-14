import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTargetSearchBold = ({
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
      d="M11.196 9.968c-.56 0-1.01.45-1.01 1.01 0 .55.45 1.01 1.01 1.01s1.01-.46 1.01-1.01c0-.56-.45-1.01-1.01-1.01"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.106 13.118a6.37 6.37 0 0 1-3.89 3.9c-.09.02-.17.04-.25.04a.752.752 0 0 1-.25-1.46 4.86 4.86 0 0 0 2.97-2.97c.13-.39.56-.6.95-.46.39.13.6.56.47.95m-8.42-2.14c0-1.39 1.13-2.51 2.51-2.51s2.51 1.12 2.51 2.51c0 1.38-1.13 2.51-2.51 2.51s-2.51-1.13-2.51-2.51m1.36 5.57a.76.76 0 0 1-.71.51c-.08 0-.16-.02-.24-.04a6.4 6.4 0 0 1-3.9-3.89c-.13-.4.07-.82.46-.96s.82.07.96.46a4.86 4.86 0 0 0 2.97 2.97c.39.13.6.56.46.95m-4.85-7.54a6.37 6.37 0 0 1 3.89-3.9c.39-.14.82.07.96.46.13.39-.07.82-.46.96a4.86 4.86 0 0 0-2.97 2.97.75.75 0 0 1-.95.46.757.757 0 0 1-.47-.95m7.06-3.43c.13-.4.56-.6.95-.47 1.81.63 3.27 2.08 3.9 3.89.13.39-.07.82-.46.96-.09.02-.17.04-.25.04-.31 0-.6-.2-.71-.51a4.87 4.87 0 0 0-2.97-2.96.744.744 0 0 1-.46-.95m-1.13-3.08c-4.64 0-8.41 3.77-8.41 8.42s3.77 8.42 8.41 8.42a8.42 8.42 0 0 0 0-16.84M20.99 19.795l-1.982-1.98a1 1 0 0 0-1.413 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTargetSearchBold;